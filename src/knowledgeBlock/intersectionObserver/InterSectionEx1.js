import { useState, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import useLazyLoad from '../hooks/useLazyLoad';

// use custom hook for IntersectionObserver
function IntersectionEx1() {
    const targetRef = useRef(null);
    // const [data, setData] = useState([]);
    // const genData = () => Array.from({ length: 10 }, (_, index) => `Item: ${data.length + index + 1}`);
    let timerId = null;
    const onGrabData = (currentPage) => {
        return new Promise((resolve) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                resolve(
                    Array.from({ length: 10 }, (_, index) => `Item ${(currentPage - 1) * 10 + index + 1}`)
                );
            }, 1500);
        });
    };

    const { data, isLoading } = useLazyLoad({ targetRef, onGrabData });


    return (
        <section>
            {
                data.map((item, index) => (
                    <div key={index} className='my-1 mx-10 py-10 px-3 bg-purple-400 text-black rounded-md'>
                        {
                            item
                        }
                    </div>
                ))
            }
            {
                isLoading && <p className='text-center text-2xl py-3'>Loading more...</p>
            }
            <div ref={targetRef}></div>
        </section>
    );

}

// IntersectionObserver
function IntersectionEx2() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const targetRef = useRef(null);
    const observerRef = useRef(null);
    const genData = () => Array.from({ length: 10 }, (_, index) => `Item ${data.length + index + 1}`);
    useEffect(() => {
        setData([...genData()]);
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
        let timerId = null;
        const handleObserver = (entries) => {
            console.log('entries:', entries, entries[0].isIntersecting);
            if (entries[0].isIntersecting) {
                setIsLoading(true);
                clearTimeout(timerId);
                timerId = setTimeout(() => {

                    setData([...data, ...genData()]);
                    setIsLoading(false);
                }, 1000);

            }
        }

        // console.log('targetRef.current:', targetRef.current);
        if (targetRef.current) {
            //1. Create instance from IntersectionObserver...
            observerRef.current = new IntersectionObserver(handleObserver, options);

            //2. Assign the instance of targer reference to observe input...
            if (observerRef.current) {
                observerRef.current.observe(targetRef.current);
            }
        }

        return () => {
            clearTimeout(timerId);
            observerRef.current?.disconnect()
        };
    }, [data, setData]);
    return (
        <>
            <h1 className='mt-10 text-3xl text-center'>IntersectionObserver</h1>
            {
                data?.map((item, index) => (
                    <Fade key={index}>
                        <div className='mx-10 my-3  rounded-md bg-slate-400 text-black py-10 px-10 sm:mx-auto sm:w-1/2 ' >{item}</div>
                    </Fade>
                ))
            }
            {
                isLoading && <p className='text-center text-xl my-2'>Loading more...</p>

            }
            {/* Observing last element when it is hit then observer callback kicks in */}
            {/* <div ref={targetRef} className='m-[20px] border-[2px] py-[100px]'></div> */}
            <div ref={targetRef} className='py-[10px] '></div>
        </>
    )
}

export { IntersectionEx1, IntersectionEx2 };