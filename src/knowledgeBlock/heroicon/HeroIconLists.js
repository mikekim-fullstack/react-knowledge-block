import React, { useRef } from 'react'
import * as heroIcons20 from '@heroicons/react/20/solid'
import * as heroIcons24Solid from '@heroicons/react/24/solid'
import * as heroIcons24Outline from '@heroicons/react/24/outline'
import useLazyLoad from '../hooks/useLazyLoad'
const heroIcons20Map = { ...heroIcons20 };
const heroIcons24SolidMap = { ...heroIcons24Solid };
const heroIcons24OutlineMap = { ...heroIcons24Outline };


const heroIconLists = ['AcademicCapIcon', 'AdjustmentsHorizontalIcon', 'AdjustmentsVerticalIcon', 'ArchiveBoxArrowDownIcon', 'ArchiveBoxIcon', 'ArchiveBoxXMarkIcon', 'ArrowDownCircleIcon', 'ArrowDownIcon', 'ArrowDownLeftIcon', 'ArrowDownOnSquareIcon', 'ArrowDownOnSquareStackIcon', 'ArrowDownRightIcon', 'ArrowDownTrayIcon', 'ArrowLeftCircleIcon', 'ArrowLeftIcon', 'ArrowLeftOnRectangleIcon', 'ArrowLongDownIcon', 'ArrowLongLeftIcon', 'ArrowLongRightIcon', 'ArrowLongUpIcon', 'ArrowPathIcon', 'ArrowPathRoundedSquareIcon', 'ArrowRightCircleIcon', 'ArrowRightIcon', 'ArrowRightOnRectangleIcon', 'ArrowSmallDownIcon', 'ArrowSmallLeftIcon', 'ArrowSmallRightIcon', 'ArrowSmallUpIcon', 'ArrowTopRightOnSquareIcon', 'ArrowTrendingDownIcon', 'ArrowTrendingUpIcon', 'ArrowUpCircleIcon', 'ArrowUpIcon', 'ArrowUpLeftIcon', 'ArrowUpOnSquareIcon', 'ArrowUpOnSquareStackIcon', 'ArrowUpRightIcon', 'ArrowUpTrayIcon', 'ArrowUturnDownIcon', 'ArrowUturnLeftIcon', 'ArrowUturnRightIcon', 'ArrowUturnUpIcon', 'ArrowsPointingInIcon', 'ArrowsPointingOutIcon', 'ArrowsRightLeftIcon', 'ArrowsUpDownIcon', 'AtSymbolIcon', 'BackspaceIcon', 'BackwardIcon', 'BanknotesIcon', 'Bars2Icon', 'Bars3BottomLeftIcon', 'Bars3BottomRightIcon', 'Bars3CenterLeftIcon', 'Bars3Icon', 'Bars4Icon', 'BarsArrowDownIcon', 'BarsArrowUpIcon', 'Battery0Icon', 'Battery100Icon', 'Battery50Icon', 'BeakerIcon', 'BellAlertIcon', 'BellIcon', 'BellSlashIcon', 'BellSnoozeIcon', 'BoltIcon', 'BoltSlashIcon', 'BookOpenIcon', 'BookmarkIcon', 'BookmarkSlashIcon', 'BookmarkSquareIcon', 'BriefcaseIcon', 'BugAntIcon', 'BuildingLibraryIcon', 'BuildingOffice2Icon', 'BuildingOfficeIcon', 'BuildingStorefrontIcon', 'CakeIcon', 'CalculatorIcon', 'CalendarDaysIcon', 'CalendarIcon', 'CameraIcon', 'ChartBarIcon', 'ChartBarSquareIcon', 'ChartPieIcon', 'ChatBubbleBottomCenterIcon', 'ChatBubbleBottomCenterTextIcon', 'ChatBubbleLeftEllipsisIcon', 'ChatBubbleLeftIcon', 'ChatBubbleLeftRightIcon', 'ChatBubbleOvalLeftEllipsisIcon', 'ChatBubbleOvalLeftIcon', 'CheckBadgeIcon', 'CheckCircleIcon', 'CheckIcon', 'ChevronDoubleDownIcon', 'ChevronDoubleLeftIcon', 'ChevronDoubleRightIcon', 'ChevronDoubleUpIcon', 'ChevronDownIcon', 'ChevronLeftIcon', 'ChevronRightIcon', 'ChevronUpDownIcon', 'ChevronUpIcon', 'CircleStackIcon', 'ClipboardDocumentCheckIcon', 'ClipboardDocumentIcon', 'ClipboardDocumentListIcon', 'ClipboardIcon', 'ClockIcon', 'CloudArrowDownIcon', 'CloudArrowUpIcon', 'CloudIcon', 'CodeBracketIcon', 'CodeBracketSquareIcon', 'Cog6ToothIcon', 'Cog8ToothIcon', 'CogIcon', 'CommandLineIcon', 'ComputerDesktopIcon', 'CpuChipIcon', 'CreditCardIcon', 'CubeIcon', 'CubeTransparentIcon', 'CurrencyBangladeshiIcon', 'CurrencyDollarIcon', 'CurrencyEuroIcon', 'CurrencyPoundIcon', 'CurrencyRupeeIcon', 'CurrencyYenIcon', 'CursorArrowRaysIcon', 'CursorArrowRippleIcon', 'DevicePhoneMobileIcon', 'DeviceTabletIcon', 'DocumentArrowDownIcon', 'DocumentArrowUpIcon', 'DocumentChartBarIcon', 'DocumentCheckIcon', 'DocumentDuplicateIcon', 'DocumentIcon', 'DocumentMagnifyingGlassIcon', 'DocumentMinusIcon', 'DocumentPlusIcon', 'DocumentTextIcon', 'EllipsisHorizontalCircleIcon', 'EllipsisHorizontalIcon', 'EllipsisVerticalIcon', 'EnvelopeIcon', 'EnvelopeOpenIcon', 'ExclamationCircleIcon', 'ExclamationTriangleIcon', 'EyeDropperIcon', 'EyeIcon', 'EyeSlashIcon', 'FaceFrownIcon', 'FaceSmileIcon', 'FilmIcon', 'FingerPrintIcon', 'FireIcon', 'FlagIcon', 'FolderArrowDownIcon', 'FolderIcon', 'FolderMinusIcon', 'FolderOpenIcon', 'FolderPlusIcon', 'ForwardIcon', 'FunnelIcon', 'GifIcon', 'GiftIcon', 'GiftTopIcon', 'GlobeAltIcon', 'GlobeAmericasIcon', 'GlobeAsiaAustraliaIcon', 'GlobeEuropeAfricaIcon', 'HandRaisedIcon', 'HandThumbDownIcon', 'HandThumbUpIcon', 'HashtagIcon', 'HeartIcon', 'HomeIcon', 'HomeModernIcon', 'IdentificationIcon', 'InboxArrowDownIcon', 'InboxIcon', 'InboxStackIcon', 'InformationCircleIcon', 'KeyIcon', 'LanguageIcon', 'LifebuoyIcon', 'LightBulbIcon', 'LinkIcon', 'ListBulletIcon', 'LockClosedIcon', 'LockOpenIcon', 'MagnifyingGlassCircleIcon', 'MagnifyingGlassIcon', 'MagnifyingGlassMinusIcon', 'MagnifyingGlassPlusIcon', 'MapIcon', 'MapPinIcon', 'MegaphoneIcon', 'MicrophoneIcon', 'MinusCircleIcon', 'MinusIcon', 'MinusSmallIcon', 'MoonIcon', 'MusicalNoteIcon', 'NewspaperIcon', 'NoSymbolIcon', 'PaintBrushIcon', 'PaperAirplaneIcon', 'PaperClipIcon', 'PauseCircleIcon', 'PauseIcon', 'PencilIcon', 'PencilSquareIcon', 'PhoneArrowDownLeftIcon', 'PhoneArrowUpRightIcon', 'PhoneIcon', 'PhoneXMarkIcon', 'PhotoIcon', 'PlayCircleIcon', 'PlayIcon', 'PlayPauseIcon', 'PlusCircleIcon', 'PlusIcon', 'PlusSmallIcon', 'PowerIcon', 'PresentationChartBarIcon', 'PresentationChartLineIcon', 'PrinterIcon', 'PuzzlePieceIcon', 'QrCodeIcon', 'QuestionMarkCircleIcon', 'QueueListIcon', 'RadioIcon', 'ReceiptPercentIcon', 'ReceiptRefundIcon', 'RectangleGroupIcon', 'RectangleStackIcon', 'RocketLaunchIcon', 'RssIcon', 'ScaleIcon', 'ScissorsIcon', 'ServerIcon', 'ServerStackIcon', 'ShareIcon', 'ShieldCheckIcon', 'ShieldExclamationIcon', 'ShoppingBagIcon', 'ShoppingCartIcon', 'SignalIcon', 'SignalSlashIcon', 'SparklesIcon', 'SpeakerWaveIcon', 'SpeakerXMarkIcon', 'Square2StackIcon', 'Square3Stack3DIcon', 'Squares2X2Icon', 'SquaresPlusIcon', 'StarIcon', 'StopCircleIcon', 'StopIcon', 'SunIcon', 'SwatchIcon', 'TableCellsIcon', 'TagIcon', 'TicketIcon', 'TrashIcon', 'TrophyIcon', 'TruckIcon', 'TvIcon', 'UserCircleIcon', 'UserGroupIcon', 'UserIcon', 'UserMinusIcon', 'UserPlusIcon', 'UsersIcon', 'VariableIcon', 'VideoCameraIcon', 'VideoCameraSlashIcon', 'ViewColumnsIcon', 'ViewfinderCircleIcon', 'WalletIcon', 'WifiIcon', 'WindowIcon', 'WrenchIcon', 'WrenchScrewdriverIcon', 'XCircleIcon', 'XMarkIcon'];

const heroIcons = [
    {
        id: 1,
        title: 'HeroIcon mini 20 Solid',
        icon: heroIcons20Map,
    },
    {
        id: 2,
        title: 'HeroIcon 24 Solid',
        icon: heroIcons24SolidMap,
    },
    {
        id: 3,
        title: 'HeroIcon 24 Outline',
        icon: heroIcons24OutlineMap,
    },
];
const HeroIconLists = () => {
    const targetRef = useRef(null);
    const onGrabData = (currentPage) => {

        if (currentPage > 0 && currentPage < 4) {
            return new Promise((resolve) => {
                const selected = heroIcons.find(icon => icon.id === currentPage);
                // console.log('------HeroIconLists onGrabData:', currentPage, selected);
                resolve(selected);
            });
        }
        return null;
    }
    const { data, isLoading } = useLazyLoad({ targetRef, onGrabData, })
    return (
        // <section className='h-screen overflow-auto'>
        <section className=''>
            {
                data.map((item, index) => <div key={index}>
                    {/* {console.log('item:', item)} */}
                    <h1 className='text-center text-2xl m-7'>{item.title}</h1>
                    <div className='flex flex-wrap gap-2 mx-10'>
                        {
                            // academics.map(Com => (<Com className='w-7 h-7' />))
                            heroIconLists.map((iconName, index) => {

                                const Com = item.icon[iconName];
                                // console.log(Com)
                                return <Com key={index} title={iconName} className='w-5 h-5 transition-all duration-100 ease-in hover:transform hover:scale-[1.3] hover:fill-purple-400 hover:cursor-pointer tip ' />;
                                // return <div>Hello</div>
                            })
                        }
                    </div>


                </div>)
            }
            {isLoading && <p className='text-center text-2xl'>Loading more...</p>}
            <div ref={targetRef} className='py-3'></div>
            {/* <h1 className='text-center text-2xl m-7'>HeroIcon mini 20 Solid</h1>
            <div className='flex flex-wrap gap-2 mx-10'>
                {
                    // academics.map(Com => (<Com className='w-7 h-7' />))
                    heroIconLists.map((iconName, index) => {
                        const Com = heroIcons20Map[iconName];
                        // console.log(Com)
                        return <Com key={index} title={iconName} className='w-5 h-5 transition-all duration-100 ease-in hover:transform hover:scale-[1.3] hover:fill-purple-400 hover:cursor-pointer tip ' />;
                        // return <div>Hello</div>
                    })
                }
            </div>
            <h1 className='text-center text-2xl m-7'>HeroIcon 24 Outline</h1>
            <div className='flex flex-wrap gap-2 mx-10'>
                {
                    // academics.map(Com => (<Com className='w-7 h-7' />))
                    heroIconLists.map((iconName, index) => {
                        const Com = heroIcons24OutlineMap[iconName];
                        // console.log(Com)
                        return <Com key={index} title={iconName} className='w-7 h-7 transition-all duration-100 ease-in hover:transform hover:scale-[1.3] hover:fill-purple-400 hover:cursor-pointer tip ' />;
                        // return <div>Hello</div>
                    })
                }
            </div>
            <h1 className='text-center text-2xl m-7'>HeroIcon 24 Solid</h1>
            <div className='flex flex-wrap gap-2 mx-10 mb-20'>
                {
                    // academics.map(Com => (<Com className='w-7 h-7' />))
                    heroIconLists.map((iconName, index) => {
                        const Com = heroIcons24SolidMap[iconName];
                        // console.log(Com)
                        return <Com key={index} title={iconName} className='w-7 h-7 transition-all duration-100 ease-in hover:transform hover:scale-[1.3] hover:fill-purple-400 hover:cursor-pointer tip ' />;
                        // return <div>Hello</div>
                    })
                }
            </div> */}

        </section>
    )
}

export default HeroIconLists