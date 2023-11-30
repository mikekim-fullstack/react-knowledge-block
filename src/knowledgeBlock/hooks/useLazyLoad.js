import { useState, useEffect, useReducer } from 'react'

const defaultData = {
    isLoading: false,
    currentPage: 1,
    data: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        // Update a data which is any changed .
        case 'set':
            return {
                ...state,
                ...action.payload
            };
        // After grab a data, update status.
        case 'onGrabData':
            return {
                ...state,
                isLoading: false,
                data: [...state.data, ...action.payload.data],
                currentPage: state.currentPage + 1,
            };
        default:
            return state;
    };
};
export default function useLazyLoad({ targetRef, onGrabData, options = {} }) {
    const mergedOptions = { ...options, ...{ root: null, rootMargin: '0px', threshold: 0.0 } }
    const [state, dispatch] = useReducer(reducer, defaultData);

    const handleObserver = async (entries) => {
        console.log('entry', entries);
        const entry = entries[0];
        //  Action criteria ...
        if (!state.isLoading &&
            entry.isIntersecting &&
            entry.intersectionRect.bottom - entry.boundingClientRect.bottom < 5
        ) {
            dispatch({ type: 'set', payload: { isLoading: true } });
            const data = await onGrabData(state.currentPage);
            dispatch({ type: 'onGrabData', payload: { data } });
        }
    }

    useEffect(() => {
        console.log('target.current', targetRef?.current);
        if (!targetRef?.current) return;

        const observer = new IntersectionObserver(handleObserver, mergedOptions);
        if (observer) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        }
    }, [targetRef, handleObserver, options]);

    return state;
};