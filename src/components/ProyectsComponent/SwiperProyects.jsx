import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react';

export const SwiperComponent = () => {
  return (
    <Swiper
      pagination={true} 
      navigation={true} 
      modules={[Pagination, Navigation]} 
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
