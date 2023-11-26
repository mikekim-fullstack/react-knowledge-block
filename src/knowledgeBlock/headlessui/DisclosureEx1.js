import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Fade } from "react-awesome-reveal";

const QnALists = [
    {
        id: 1,
        'Q': 'Is team pricing available?',
        'A': 'Yes! You can purchase a license that share with your entire team.',
    },
    {
        id: 2,
        'Q': 'What is your refund policy?',
        'A': 'If you\'re unhappy with your purchase for any reason, email us\
        within 90 days and we\'ll refund you in full, no questions asked.',
    },
    {
        id: 3,
        'Q': 'Do you offer technical support?',
        'A': 'No.',
    },

];

const listItems = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Remix'
];
export default function DisclosureEx1() {
    const [isEntered, setIsEntered] = useState(false);

    return (
        <section >
            <h1 className=" mt-[150px] text-2xl text-white capitalize text-center">Headlessui Disclosure Action Example</h1>
            <div className="flex  mt-[50px] justify-between items-start w-full">

                <div className=" mx-auto w-full max-w-md rounded-2xl bg-white text-black p-2">
                    <div className="">
                        {
                            QnALists.map(qna => (
                                <Disclosure key={qna.id} as='div' className='m-2'>
                                    {({ open }) => (

                                        <div key={qna.id}>
                                            <Disclosure.Button className='flex justify-between  w-full py-2 px-4 rounded-lg bg-purple-100'>
                                                <span>{qna.Q}</span>
                                                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-7 h-7 text-purple-500 transition-transform duration-75 ease-linear`} />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className='px-5 pt-4 pb-2 text-sm text-gray-500'>
                                                <Fade>
                                                    {qna.A}
                                                </Fade>
                                            </Disclosure.Panel>
                                        </div>

                                    )}
                                </Disclosure>
                            ))
                        }
                        <Disclosure as='div' className='m-2'>
                            {
                                ({ open }) => (
                                    <>
                                        <Disclosure.Button onMouseEnter={() => setIsEntered(true)} onMouseLeave={() => setIsEntered(false)} className={`w-full flex justify-between ${open ? 'rounded-t-md' : 'rounded-md'}  bg-purple-300 px-4 py-2`}>
                                            <p> List out laguages</p>
                                            <ChevronUpIcon className={`w-6 h-6   ${open ? 'transform rotate-180' : isEntered ? 'transform rotate-90' : ''} transition-all duration-75 ease-linear`} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel as='ul'>
                                            {
                                                listItems.map((list, index) => (
                                                    <li className="w-full px-4 py-2 bg-purple-300/30 cursor-pointer hover:text-purple-600 hover:font-bold" key={index}><a href="/#">{list}</a></li>
                                                ))
                                            }

                                        </Disclosure.Panel>
                                    </>
                                )
                            }
                        </Disclosure>
                    </div>
                </div>
            </div>
        </section>
    );
}