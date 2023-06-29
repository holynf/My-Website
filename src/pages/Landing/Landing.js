import React, { useEffect, useRef } from "react";
import style from "../Landing/landing.module.css";
import {LandingImg} from "./LandingImg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import one from "../../images/1.jpg"
import "swiper/css";
import "swiper/css/pagination";
import aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-3 items-center ">
        <div class="row-span-1 col-span-1 sm:row-span-2 sm:col-span-2 p-3 sm:p-2 rounded-lg relative" data-aos="fade-right">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            
            className="mySwiper rounded-2xl"
          >            
            {LandingImg.map((item)=>{
              return <SwiperSlide>
                <img src={item.image} alt="" className=""/>
              </SwiperSlide>
            })}            
          </Swiper>
          <span className="absolute right-10 bottom-10 z-10 py-2 px-8 rounded-2xl bg-cyan-500 select-none	 text-white">
            Buy Now
          </span>
          <span className="absolute left-10 top-10 z-10 py-2 px-8 rounded-2xl bg-slate-300 select-none	">
            Available!
          </span>
        </div>
        <div class="row-span-1 col-span-1 p-3" data-aos="fade-left">
          <img src={one} alt="" className="rounded-2xl"/>
        </div>
        <div class="row-span-1 col-span-1 p-3" data-aos="fade-left">
          <img src={one} alt="" className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
