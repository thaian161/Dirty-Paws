// Import Swiper React components
// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Profile.css';

export default function ProfileCard() {
  return (
    <div className="profile-container">
      <Swiper
        modules={[Navigation, EffectFade, Swiper]}
        navigation
        effect
        speed={800}
        slidesPerView={3}
        loop
        className="my-swiper"
      >
        <SwiperSlide className="swiper-slice">
          slice 1
          {/* <img src="./images/white-logo.png" alt="testing" /> */}
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src="./images/white-logo.png" alt="testing" /> */}
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src="./images/white-logo.png" alt="testing" /> */}
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src="./images/white-logo.png" alt="testing" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
