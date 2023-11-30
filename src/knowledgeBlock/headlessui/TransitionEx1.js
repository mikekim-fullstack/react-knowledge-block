import { useState } from "react";
import { Transition } from "@headlessui/react";
import { keyframes } from "@emotion/react";
import Reveal, { Fade, Slide } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(400px, 0, 0);
    opacity:0;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    opacity:0.9;
  }
`;

export default function TransitionEx1() {
    const [isShowing, setIsShowing] = useState(false);
    const [isSlideShowing, setIsSlideShowing] = useState(false);
    return (
        <section className="h-screen flex flex-col justify-center items-center relative">
            <div className='flex flex-col justify-center items-center'>
                {/* <div className="absolute top-[calc(50%-50px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70px] flex gap-5 ">
                    <button className="btnIndigo py-3 mb-5 w-[150px]" onClick={() => setIsShowing(prev => !prev)}>Toggle Fade {isShowing ? 'Out' : 'In'}</button>
                    <button className="btnIndigo py-3 mb-5 w-[150px]" onClick={() => setIsSlideShowing(prev => !prev)}>Slide {isSlideShowing ? 'Out' : 'In'}</button>

                </div>
                <Transition
                    appear={true}
                    show={isShowing}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className='text-bold text-2xl'
                >
                    I'll fade in and out.
                </Transition>

                <Transition
                    appear={true}
                    show={isSlideShowing}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className='text-bold text-2xl'
                >
                    <div className="absolute top-0 right-0 ">
                        <div className="h-screen text-center bg-gray-300 bg-opacity-[0.95] w-[400px] grid grid-cols-1 gap-10 justify-center items-center">
                            <div className="flex justify-center items-center">
                                <button className="btnBlack w-fit py-3">Hello Button</button>
                            </div>
                        </div>
                    </div>

                </Transition>
                {
                    isSlideShowing && (
                        <>

                            <div className="absolute top-0 left-0 ">
                                {/* <Fade direction="right" duration={500} damping={0.1} cascade={true}> */}
                                <Fade duration={1000} triggerOnce={true} delay={100} cascade={true}>
                                    <div className="h-screen text-center bg-gray-300 bg-opacity-[0.95] w-[400px] grid grid-cols-1 gap-10 justify-center items-center ">
                                        <div className="flex justify-center items-center">
                                            <button className="btnBlack w-fit py-3">Hello Button</button>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                            {/* <Reveal keyframes={customAnimation} >
                                <h1>React Reveal</h1>
                            </Reveal> */}
                        </>
                    )
                }


            </div>

        </section>
    );
};