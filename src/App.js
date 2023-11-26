import logo from './logo.svg';
import './App.css';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './css/changeSwiper.css';

//
import { Fade } from "react-awesome-reveal";


import CallTimer from './knowledgeBlock/hooks/imperativeHook/CallTimer';
import SerialCommunication from './components/SerialCommunication'
import TransitionEx1 from './knowledgeBlock/headlessui/TransitionEx1';
import { NavBar, Example1 } from './knowledgeBlock/navbar/NavBar';
import DisclosureEx1 from './knowledgeBlock/headlessui/DisclosureEx1';
import HeroIconLists from './knowledgeBlock/heroicon/HeroIconLists';

function App() {
  return (
    <Swiper
      // install Swiper modules

      // **  Somehow EffectFade is not working vividly so I'm using <Fade> **
      // modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      // effect='fade'
      //----------------------------
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      // autoHeight={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}

      loop={true}
    >
      <SwiperSlide>
        {/* <Fade cascade damping={0.1}> */}
        <div className="flex flex-col justify-center items-center h-screen">
          {/* useImperativeHandle */}
          <Fade cascade damping={0.1}>
            <CallTimer />
            <SerialCommunication />
          </Fade>
        </div>
        {/* </Fade> */}
      </SwiperSlide>
      <SwiperSlide>
        <Fade>
          <TransitionEx1 />
        </Fade>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col justify-center items-center  min-h-screen'>
          <Fade duration={500} damping={0.1} delay={100} cascade={true} className='flex flex-col justify-center items-center'>
            <p>I enter first...</p>
            <p>...then comes my turn...</p>
            <p>...and finally you see me!</p>
          </Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <DisclosureEx1 />
      </SwiperSlide>
      <SwiperSlide>
        <div className='overflow-auto h-screen'>
          <Example1 />
          <NavBar />
          <p>NavBar</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <HeroIconLists />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
