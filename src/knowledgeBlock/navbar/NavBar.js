import { Fragment, useState, useReducer, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon, UserIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Fade } from 'react-awesome-reveal'
import * as All from '@heroicons/react/24/outline'
import { hover } from '@testing-library/user-event/dist/hover'
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
/*
----------- WOMEN'S SALE -----------------
WOMEN'S CYBER DEALS
All Cyber Deals
Deals At $15
Deals At $20
Deals At $25
Deals At $30

WOMEN'S SALE
All Women's Sale
Best Of Sale Items
50% Off And Above
60% Off And Above
All Accessories Sale

WOMEN'S SALE TRENDING
New Releases
T-Shirts & Tops
Sports Bras
Best Sellers
Black Leggings
Winter Essentials
Oversized
Gifts For Her
E-Gift Card

SALE PRODUCTS
All Products
T-Shirts & Tops
Sports Bras
Shorts
Leggings
Hoodies & Jackets
Joggers & Sweatpants
Skorts
Crop Tops
Tank Tops
Dresses
All In One
Underwear

SALE COLLECTIONS
Vital
Seamless
Legacy
Sweat
Adapt
Essentials
Graphics
Elevate
GS Power
Key Fits

ACCESSORIES
All Accessories Sale
All Equipment
All Socks
All Bottles
All Bags Sale
All Slides
All Headwear


----------- MEN'S SALE -----------------
MEN'S CYBER DEALS
All Cyber Deals
Deals At $15
Deals At $20
Deals At $25
Deals At $30

MEN'S SALE
All Men's Sale
Best Of Sale Items
50% Off And Above
60% Off And Above
All Accessories Sale


MEN'S SALE TRENDING
New Releases
T-Shirts & Tops
Best Sellers
Oversized
Pump Cover
Winter Essentials
Gifts For Him
E-Gift Card

SALE PRODUCTS
All Products
T-Shirts & Tops
Joggers & Sweatpants
Hoodies & Jackets
Shorts
Tanks
Stringers
All Slides
Base Layers
Underwear
Sweatsuits

SALE COLLECTIONS
Graphics
Power
Crest
Heritage
Legacy
Sport
Apex
Essentials
React
Arrival

ACCESSORIES
All Accessories Sale
All Bottles
All Equipment
All Headwear
All Socks
All Bags Sale
All Slides


---------- CYBER DEALS ------------
CYBER DEALS
All Cyber Deals
Deals At $15
Deals At $20
Deals At $25
Deals At $30

WOMEN'S SALE
All Women's Sale
Best Of Sale Items
50% Off And Above
60% Off And Above
All Accessories Sale

MEN'S SALE
All Men's Sale
Best Of Sale Items
50% Off And Above
60% Off And Above
All Accessories Sale

ALL ACCESSORIES SALE
All Accessories Sale
Winter Essentials
*/
const collections = [
    {
        id: 1,
        title: "WOMEN'S SALE",
        subCollections: [
            {
                id: 1,
                title: "WOMEN'S SALE TRENDING",
                menus: [
                    { id: 1, name: "New Releases", href: "/#" },
                    { id: 2, name: "T-Shirts & Tops", href: "/#" },
                    { id: 3, name: "Sports Bras", href: "/#" },
                    { id: 4, name: "Best Sellers", href: "/#" },
                    { id: 5, name: "Black Leggings", href: "/#" },
                    { id: 6, name: "Winter Essentials", href: "/#" },
                    { id: 7, name: "Oversized", href: "/#" },
                    { id: 8, name: "Gifts For Her", href: "/#" },
                    { id: 9, name: "E-Gift Card", href: "/#" },
                ],
            },
            {
                id: 2,
                title: "WOMEN'S SALE",
                menus: [
                    { id: 1, name: "All Women's Sale", href: "/#" },
                    { id: 2, name: "Best Of Sale Items", href: "/#" },
                    { id: 3, name: "50% Off And Above", href: "/#" },
                    { id: 4, name: "60% Off And Above", href: "/#" },
                    { id: 5, name: "All Accessories Sale", href: "/#" },

                ],
            },
            {
                id: 3,
                title: "SALE PRODUCTS",
                menus: [
                    { id: 1, name: "All Products", href: "/#" },
                    { id: 2, name: "T-Shirts & Tops", href: "/#" },
                    { id: 3, name: "Sports Bras", href: "/#" },
                    { id: 4, name: "Shorts", href: "/#" },
                    { id: 5, name: "Leggings", href: "/#" },
                    { id: 6, name: "Hoodies & Jackets", href: "/#" },
                    { id: 7, name: "Joggers & Sweatpants", href: "/#" },
                    { id: 8, name: "Skorts", href: "/#" },
                    { id: 9, name: "Crop Tops", href: "/#" },
                    { id: 10, name: "Tank Tops", href: "/#" },
                    { id: 11, name: "Dresses", href: "/#" },
                    { id: 12, name: "All In One", href: "/#" },
                    { id: 13, name: "Underwear", href: "/#" },
                ],
            },

        ]
    },
    // -----------------------------------------------------
    {
        id: 2,
        title: "MEN'S SALE",
        subCollections: [
            {
                id: 1,
                title: "MEN'S SALE",
                menus: [
                    { id: 1, name: "All Men's Sale", href: "/#" },
                    { id: 2, name: "Best Of Sale Items", href: "/#" },
                    { id: 3, name: "50% Off And Above", href: "/#" },
                    { id: 4, name: "60% Off And Above", href: "/#" },
                    { id: 5, name: "All Accessories Sale", href: "/#" },
                ],
            },
            {
                id: 2,
                title: "MEN'S SALE TRENDING",
                menus: [
                    { id: 1, name: "New Releases", href: "/#" },
                    { id: 2, name: "T-Shirts & Tops", href: "/#" },
                    { id: 3, name: "Best Sellers", href: "/#" },
                    { id: 4, name: "Oversized", href: "/#" },
                    { id: 5, name: "Pump Cover", href: "/#" },
                    { id: 6, name: "Winter Essentials", href: "/#" },
                    { id: 7, name: "Gifts For Him", href: "/#" },
                    { id: 8, name: "E-Gift Card", href: "/#" },
                ],
            },
            {
                id: 3,
                title: "SALE COLLECTIONS",
                menus: [
                    { id: 1, name: "Graphics", href: "/#" },
                    { id: 2, name: "Power", href: "/#" },
                    { id: 3, name: "Crest", href: "/#" },
                    { id: 4, name: "Heritage", href: "/#" },
                    { id: 5, name: "Legacy", href: "/#" },
                    { id: 6, name: "Sport", href: "/#" },
                    { id: 7, name: "Apex", href: "/#" },
                    { id: 8, name: "Essentials", href: "/#" },
                    { id: 9, name: "React", href: "/#" },
                    { id: 10, name: "Arrival", href: "/#" },
                ],
            },


        ]
    },
    // -----------------------------------------------------
    {
        id: 3,
        title: "CYBER DEALS",
        subCollections: [
            {
                id: 1,
                title: "CYBER DEALS",
                menus: [
                    { id: 1, name: "All Cyber Deals", href: "/#" },
                    { id: 2, name: "Deals At $15", href: "/#" },
                    { id: 3, name: "Deals At $20", href: "/#" },
                    { id: 4, name: "Deals At $25", href: "/#" },
                    { id: 5, name: "Deals At $30", href: "/#" },
                ],
            },
            {
                id: 2,
                title: "WOMEN'S SALE",
                menus: [
                    { id: 1, name: "All Women's Sale", href: "/#" },
                    { id: 2, name: "Best Of Sale Items", href: "/#" },
                    { id: 3, name: "50% Off And Above", href: "/#" },
                    { id: 4, name: "60% Off And Above", href: "/#" },
                    { id: 5, name: "All Accessories Sale", href: "/#" },

                ],
            },
            {
                id: 3,
                title: "MEN'S SALE",
                menus: [
                    { id: 1, name: "All Men's Sale", href: "/#" },
                    { id: 2, name: "Best Of Sale Items", href: "/#" },
                    { id: 3, name: "50% Off And Above", href: "/#" },
                    { id: 4, name: "60% Off And Above", href: "/#" },
                    { id: 5, name: "All Accessories Sale", href: "/#" },

                ],
            },


        ]
    },
    /*
    // -----------------------------------------------------
    {
        id: 4,
        title: "",
        subCollections: [
            {
                id: 1,
                title: "",
                menus: [
                    { id: 1, name: "", href: "/#" },
                    { id: 2, name: "", href: "/#" },
                    { id: 3, name: "", href: "/#" },
                    { id: 4, name: "", href: "/#" },
                    { id: 5, name: "", href: "/#" },
                    { id: 6, name: "", href: "/#" },
                    { id: 7, name: "", href: "/#" },
                    { id: 8, name: "", href: "/#" },
                    { id: 9, name: "", href: "/#" },
                ],
            },
            {
                id: 2,
                title: "",
                menus: [
                    { id: 1, name: "", href: "/#" },
                    { id: 2, name: "", href: "/#" },
                    { id: 3, name: "", href: "/#" },
                    { id: 4, name: "", href: "/#" },
                    { id: 5, name: "", href: "/#" },
                    { id: 6, name: "", href: "/#" },
                    { id: 7, name: "", href: "/#" },
                    { id: 8, name: "", href: "/#" },
                    { id: 9, name: "", href: "/#" },
                ],
            },
            {
                id: 3,
                title: "",
                menus: [
                    { id: 1, name: "", href: "/#" },
                    { id: 2, name: "", href: "/#" },
                    { id: 3, name: "", href: "/#" },
                    { id: 4, name: "", href: "/#" },
                    { id: 5, name: "", href: "/#" },
                    { id: 6, name: "", href: "/#" },
                    { id: 7, name: "", href: "/#" },
                    { id: 8, name: "", href: "/#" },
                    { id: 9, name: "", href: "/#" },
                ],
            },


        ]
    },
    */

];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const iconCss = 'w-5 h-5 cursor-pointer';
const logoCss = `
    absolute 
    top-1/2 
    left-1/2 
    transform  
    translate-x-[-50%] 
    translate-y-[-50%] 

`;
const ulCss = `
    lg:absolute 
    lg:top-1/2 
    lg:left-1/2 
    lg:transform  
    lg:translate-x-[-50%] 
    lg:translate-y-[-50%] 
    lg:flex 
    lg:justify-center  
    lg:items-center
`;

const collectionCss = `
    hover:before:w-full
    hover:before:absolute  
    hover:before:bottom-0 
    hover:before:left-0 
    hover:before:border-b-2 
    hover:before:rounded 
    hover:before:-mb-[4px]
    hover:before:border-purple-300
    hover:before:animate-menuBarHover
`;

const initState = {
    hoveredMenu: null,
    prev: null,
    changed: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'set': {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    };
}
export const NavBar = () => {
    // const [hoveredMenu, setHoveredMenu] = useState(null);
    // let id = -1;
    const [isChanged, setIsChanged] = useState(false);
    const [state, dispatch] = useReducer(reducer, initState);
    const onMouseEnter = (id) => {
        // console.log('entering', state.hoveredMenu, id, state.hoveredMenu === id)
        // id === hoveredMenu ? setPrevMenu(false) : setPrevMenu(true)
        dispatch({ type: 'set', payload: { hoveredMenu: id, prev: state.hoveredMenu } });
        // setIsChanged(true);
        // console.log('mouse entering')
        // setHoveredMenu(id);
    };
    const onMouseLeave = () => {
        // setHoveredMenu(null);

        dispatch({ type: 'set', payload: { hoveredMenu: null } });
    };
    const onMouseLeaveFromCol = () => {
        // setHoveredMenu(null);
        // console.log('mouse leaving')
        // setIsChanged(false);
        dispatch({ type: 'set', payload: { changed: false } });
    };
    const onClick = (id) => {

        // id === hoveredMenu ? setPrevMenu(false) : setPrevMenu(true)
        // setHoveredMenu(id);
        dispatch({ type: 'set', payload: { hoveredMenu: id } });
    };
    const getSubCollection = (id) => {
        const collection = collections.find((collection) => collection.id === id);
        return collection?.subCollections;
    };
    useEffect(() => {
        // console.log('isChanged', state);
        const timerId = setTimeout(() => {
            dispatch({ type: 'set', payload: { prev: state.hoveredMenu } });
        }, 0);

        return () => clearTimeout(timerId);

    }, [state.hoveredMenu]);

    return (
        <>
            <nav className={`
                w-full h-20 sticky top-0 z-10  flex items-center px-5
                ${state.hoveredMenu === null ? 'backdrop-blur-sm bg-slate-800/80' : ' bg-slate-800'}
            `}>
                <div className=' w-full mx-1 flex justify-start items-center gap-8 lg:mx-10'>
                    {/* ------ Menu button */}
                    <Bars3Icon className={`w-8 cursor-pointer lg:hidden `}
                        onClick={() => onClick(0)}
                    />
                    {/* ------ Logo --------- */}
                    <div className={`
                       ${logoCss} lg:static lg:flex lg:items-center   lg:transform-none
                `}>
                        <img src="/logo192.png" alt="logo" className={`h-9 w-9  `} />
                    </div>
                    {/* -------- collections title lists (absolute:center) ------------- */}
                    <ul className={`hidden ${ulCss}`}>
                        {
                            collections.map(collection => (
                                <li key={collection.id} className={`
                                ${state.hoveredMenu === null ? 'text-white' : state.hoveredMenu === collection.id ? 'text-white' : 'text-slate-400'}
                                text-md font-bold    px-5 relative  
                                `}
                                    // onMouseLeave={() => onMouseLeaveFromCol()}
                                    onMouseEnter={() => onMouseEnter(collection.id)}

                                    onClick={(e) => onClick(collection.id === state.hoveredMenu ? null : collection.id)}
                                >
                                    <h3 className={`relative text-base py-6 cursor-pointer `}>
                                        {collection.title}
                                        {/* Draw underline */}
                                        {
                                            state.hoveredMenu === collection.id ? (
                                                <hr className='absolute -bottom-[4px] left-0 w-full h-[3px] border-0 bg-purple-900 rounded-3xl animate-menuBarHover' />
                                            ) : ''
                                        }
                                    </h3>
                                </li>
                            ))
                        }
                    </ul>

                    <MagnifyingGlassIcon className={` ${iconCss} lg:ml-auto`} />
                    <HeartIcon className={`${iconCss} ml-auto lg:ml-0`} />
                    <UserIcon className={iconCss} />
                    <ShoppingBagIcon className={iconCss} />
                </div>
                {/* ------- Show the panel of sub-collections when a mouse is over the collections title -------- */}
                {/* {console.log(state.hoveredMenu)} */}
                {
                    state.hoveredMenu === null ? '' : (
                        <Fade duration={200}

                        >
                            {/* Backdrop to blur the background of menu panel */}
                            <div className='absolute top-20 left-0 w-full h-screen backdrop-blur-sm bg-black/80'
                                onMouseEnter={() => onMouseLeave()}
                            ></div>
                            {/* menus panel */}
                            <div className={`absolute top-20 left-0 w-full bg-slate-800

                                `}
                            // onMouseLeave={() => onMouseLeave()}
                            >
                                {/* draw the horizontal line between the top menubar and sub-collections menu */}
                                <hr className='h-[0.7px] bg-gray-900 border-0 rounded' />
                                {/* ----- Display the sub-collections ----- */}
                                <div className=' w-full min-h-[400px]  py-5 flex justify-center gap-10 ' >
                                    {
                                        getSubCollection(state.hoveredMenu)?.map((subCollection) => (
                                            <div key={subCollection.id} className=' '>
                                                {/* --- sub collection title --- */}
                                                {
                                                    state.hoveredMenu !== state.prev ? <div></div> :
                                                        <Transition
                                                            appear={true}
                                                            show={true}
                                                            enter="transition-opacity duration-150"
                                                            enterFrom="opacity-40"
                                                            enterTo="opacity-100"
                                                            leave="transition-opacity duration-20"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >

                                                            <h3 className='text-base font-bold pb-1 '>{subCollection.title}</h3>
                                                            {
                                                                // ---- menu links ----
                                                                subCollection.menus.map((menu) => (
                                                                    <ul key={menu.id} className=''>
                                                                        <li className='pb-1 text-base text-gray-400 '>
                                                                            <a href={menu.href}
                                                                                className='hover:text-white transition hover:duration-100 hover:ease-in'
                                                                                onClick={() => onClick(null)}
                                                                            >
                                                                                {menu.name}
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                ))
                                                                //------------------------
                                                            }
                                                        </Transition>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Fade>
                    )
                }
            </nav>
            {/* {console.log('hoveredMenu: ', hoveredMenu, ', status:', hoveredMenu ?? 'not null')} */}

        </>
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




