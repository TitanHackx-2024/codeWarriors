// Carousel.js
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const Carousel = ({ items, type }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const autoSlide = () => {
        if (swiper) {
          if (swiper.isEnd) {
            swiper.slideTo(0); // Reset to the first slide
          } else {
            swiper.slideNext();
          }
          setTimeout(autoSlide, 3000); // Change slide every 3 seconds
        }
      };

    autoSlide();

    return () => {
      // Clean up the timeout on component unmount
      clearTimeout(autoSlide);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {items.map(item => (
        <SwiperSlide key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={type === 'dish' ? item.title : item.name}
            />
            <CardContent>
              <Typography variant="h6">
                {type === 'dish' ? item.title : item.name}
              </Typography>
              {type === 'chef' && <Typography variant="subtitle1">Rating: {item.rating}</Typography>}
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
