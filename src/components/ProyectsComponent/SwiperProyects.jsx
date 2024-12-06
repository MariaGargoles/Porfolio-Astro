import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

const SwiperComponent = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
