import React, { useRef } from 'react'
import Timer from './Timer'

const CallTimer = () => {
    const refTimer = useRef(null);
    const handleStartTimer = () => refTimer.current.start();
    const handlePauseTimer = () => refTimer.current.pause();
    const handleResetTimer = () => refTimer.current.reset();
    return (
        <section>
            <h1 className='text-2xl uppercase text-center underline underline-offset-4'>Imperative Hook Usage</h1>
            <Timer ref={refTimer} className=' m-10  flex justify-center items-center' />
            <div className='flex justify-center items-center gap-2'>
                <button className='btnIndigo' onClick={handleStartTimer}>StartTimer</button>
                <button className='btnIndigo' onClick={handlePauseTimer}>PausTimer</button>
                <button className='btnIndigo' onClick={handleResetTimer}>RestTimer</button>
            </div>
        </section>
    )
}

export default CallTimer