import logo from './logo.svg';
import './App.css';

import CallTimer from './knowledgeBlock/hooks/imperativeHook/CallTimer';
import SerialCommunication from './components/SerialCommunication'
import TransitionEx1 from './knowledgeBlock/headlessui/TransitionEx1';

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

function App() {
  return (
    <Swiper
      // install Swiper modules
      // modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={0}
      slidesPerView={1}
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
          <Fade cascade damping={0.1} className='flex flex-col justify-center items-center'>
            <p>I enter first...</p>
            <p>...then comes my turn...</p>
            <p>...and finally you see me!</p>
          </Fade>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
