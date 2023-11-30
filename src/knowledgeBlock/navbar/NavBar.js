import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import * as All from '@heroicons/react/24/outline'
// import { AcademicCapIcon } from '@heroicons/react/20/solid'


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar1', href: '#', current: false },
    { name: 'Calendar2', href: '#', current: false },
    { name: 'Calendar3', href: '#', current: false },
    { name: 'Calendar4', href: '#', current: false },
    { name: 'Calendar5', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const NavBar = () => {
    // const academics = [heroIcons20Map['AcademicCapIcon'], heroIcons20Map['AdjustmentsHorizontalIcon']];
    return (
        <nav className='w-full h-16 bg-slate-800 sticky top-0 z-10 backdrop-blur-sm bg-white/30'>

        </nav>
    );
};
export const NavBarTest = () => {
    // const academics = [heroIcons20Map['AcademicCapIcon'], heroIcons20Map['AdjustmentsHorizontalIcon']];
    return (
        <>

            <Menu>
                {({ open }) => (
                    <>
                        {console.log('open state:', open)}
                        <Menu.Button>More</Menu.Button>
                        {open && (
                            <div>
                                {/*
                Using the `static` prop, the `Menu.Items` are always
                rendered and the `open` state is ignored.
              */}
                                <Menu.Items static>
                                    <Menu.Item as='div'>
                                        Hellon1
                                    </Menu.Item>

                                    <Menu.Item as='div'>
                                        Hello 2
                                    </Menu.Item>

                                </Menu.Items>
                            </div>
                        )}
                    </>
                )}
            </Menu>
            <fieldset>
                <legend>Published status</legend>

                <input id="draft" className="peer/draft" type="radio" name="status" checked />
                <label for="draft" className="peer-checked/draft:text-sky-500">Draft</label>

                <input id="published" className="peer/published" type="radio" name="status" />
                <label for="published" className="peer-checked/published:text-sky-500">Published</label>

                <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
            </fieldset>
            <blockquote class="text-2xl font-semibold italic text-center text-slate-100">
                When you look
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">annoyed</span>
                </span>
                all the time, people think that you're busy.
            </blockquote>
        </>
    );
};

export function Example1() {
    return (

        <>
            <div className="mx-auto  w-full px-2 sm:px-6 lg:px-8">
                <div className="relative  flex h-16 items-center justify-between sm:justify-start ">

                    {/* Mobile menu button*/}
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <div className="relative flex items-center sm:hidden">

                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                {/* <Disclosure.Panel className="sm:hidden"> */}
                                <Disclosure.Panel className="absolute top-[3rem] w-screen -left-2 bg-gray-800 sm:hidden">
                                    <div className="space-y-1 px-2 pb-3 pt-2">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>

                        )}
                    </Disclosure >

                    {/* Left logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 flex flex-shrink-0 items-center sm:static sm:transform-none">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                    </div>
                    {/* Middle menu */}
                    <div className="hidden  dark:ring-offset-slate-900 hover:-inset-2 hover:ring-roun-md hover:ring hover:ring-offset-4 hover:ring-offset-slate-900 hover:rounded hover:ring-purple-600  sm:ml-6  sm:inline-block sm:overflow-x-scroll sm:no-scrollbar ">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* --- Right profile --- */}
                    <div className="w-fit ml-auto flex   items-center px-2   ">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 w-8">
                            <div >
                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    {/* </div> */}
                    {/* ------------------- */}
                    {/* </div> */}
                </div>
            </div>


        </>

    )
};
export function Example2() {
    return (

        <>
            <div className="mx-auto  w-full px-2 sm:px-6 lg:px-8">
                <div className="relative  flex h-16 items-center justify-between sm:justify-start ">
                    {/* Left Items */}
                    {/* <div className='flex justify-start items-center sm:max-w-[calc(100%-100px)]'> */}

                    {/* Mobile menu button*/}
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <div className="relative flex items-center sm:hidden">

                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                {/* <Disclosure.Panel className="sm:hidden"> */}
                                <Disclosure.Panel className="absolute top-[3rem] w-screen -left-2 bg-gray-800 sm:hidden">
                                    <div className="space-y-1 px-2 pb-3 pt-2">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>

                        )}
                    </Disclosure >
                    {/* -- screen navbar (bigger than mobile)---  */}
                    {/* <div className="w-full flex  items-center justify-center sm:items-stretch sm:justify-start"> */}

                    {/* Left logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 flex flex-shrink-0 items-center sm:static sm:transform-none">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                    </div>
                    {/* Middle menu */}
                    <div className="hidden  dark:ring-offset-slate-900 hover:-inset-2 hover:ring-roun-md hover:ring hover:ring-offset-4 hover:ring-offset-slate-900 hover:rounded hover:ring-purple-600  sm:ml-6  sm:inline-block sm:overflow-x-scroll sm:no-scrollbar ">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* </div> */}
                    {/* --- Right profile --- */}
                    {/* <div className='w-fit flex justify-end flex-shrink-0  border  flex-1'> */}
                    {/* <div className="min-x-[200px] flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 "> */}
                    <div className="w-fit ml-auto flex   items-center px-2   ">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 w-8">
                            <div >
                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    {/* </div> */}
                    {/* ------------------- */}
                    {/* </div> */}
                </div>
            </div>


        </>

    )
};




