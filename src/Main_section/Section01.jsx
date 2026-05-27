import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/scss/Main.scss';

import Main1 from '../assets/img/Main1.png';
import Main2 from '../assets/img/Main2.png';
import Main3 from '../assets/img/Main3.png';
import Main4 from '../assets/img/Main4.png';
import Main5 from '../assets/img/Main5.png';
import Prev from '../assets/img/prev_btn.png';
import Next from '../assets/img/next_btn.png';

const Section01 = () => {
  const slides = [
    { id: 1, image: Main1, alt: 'Slide 1', title: '24 NEW 인터런' },
    { id: 2, image: Main2, alt: 'Slide 2', title: 'FILA ECHAPPE' },
    { id: 3, image: Main3, alt: 'Slide 3', title: 'COLD WAVE T_SHIRTS' },
    { id: 4, image: Main4, alt: 'Slide 4', title: 'FILA WHITE LINE' },
    { id: 5, image: Main5, alt: 'Slide 5', title: 'PEITO' },
  ];

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  
  useEffect(() => {
    

  }, []);

  return (
    <div className="main">

      </div>
  );
};

export default Section01;
