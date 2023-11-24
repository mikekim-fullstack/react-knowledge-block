import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'

const Timer = forwardRef((props, ref) => {
    const refTimer = useRef(null);
    const [time, setTime] = useState(0);

    const startTimer = () => {
        if (!refTimer.current) {
            refTimer.current = setInterval(() => {
                setTime(prev => prev + 1);

            }, 1000);
        }
    };

    const pausTimer = () => {
        if (refTimer.current) {
            clearInterval(refTimer.current);
            refTimer.current = null;
        }

    };

    const resetTimer = () => {
        if (refTimer.current) {
            clearInterval(refTimer.current);
            refTimer.current = null;
        }
        setTime(0);
    };
    useImperativeHandle(ref, () => ({
        start: startTimer,
        pause: pausTimer,
        reset: resetTimer,
    }));
    return (
        <div {...props}  >
            <div className={`w-44 h-44  border-4 border-sky-500 rounded-full  p-10 flex flex-col justify-center items-center bg-violet-800/${(time % 2) ? '50' : '100'} border-sky-${(time % 2) ? 500 : 800} transition-all  duration-500 hover:bg-violet-950`}>
                <p className='text-center'>Timer count </p>
                <div className='text-center'>
                    <p className='text-2xl font-bold'>{time}</p>
                    <p>sec</p>
                </div>
            </div>
        </div>
    )
});

export default Timer