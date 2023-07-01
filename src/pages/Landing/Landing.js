import React, { useEffect, useRef } from "react";
import style from "../Landing/landing.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const ref = useRef();

  useEffect(() => {
    aos.init({ duration: 1000 });
    console.log(ref);
  }, []);
  return (
    <div>
      <div className={[style.landing,"flex","justify-center","items-center"].join(" ")}>
        <div className="absolute bg-slate-900 w-full h-full top-0 bg-opacity-50 rounded-2xl"></div>
        <h1 className="text-white">Hi</h1>
      </div>
    </div>
  );
};

export default Landing;
