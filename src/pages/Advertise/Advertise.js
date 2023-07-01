import React from "react";
import { AdverImage } from "./AdverImage";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";

const Advertise = () => {
  const theme = useTheme();
  const smSize = useMediaQuery(theme.breakpoints.up("sm"));
  const mdSize = useMediaQuery(theme.breakpoints.up("md"));
  const lgSize = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className="bg-blue-950 p-10">
      <h1 className="text-white text-2xl">ADVANCED GAMING GEAR</h1>
      <h3 className="text-white text-base">
        Play at the highest level with the most powerful gaming gear from
        Logitech and Razor
      </h3>
      <div>
        <Swiper
          slidesPerView={lgSize ? 4 : mdSize ? 3 : smSize ? 2 : 1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper rounded-2xl my-5 h-[27rem] gap-10"
        >
          {AdverImage.map((item) => {
            return (
              <SwiperSlide className="rounded-2xl">
                <div className="bg-blue-400 shadow-sm transition-shadow hover:shadow-xl rounded-md">
                  <div className="p-3">
                    <div className="relative overflow-hidden rounded-md">
                      <div>
                        <img
                          src={item.image}
                          alt="advertise image"
                          className="rounded-2xl bg-blue before:opacity-20 hover:opacity-90 "
                        />
                      </div>
                      <div className="absolute bg-slate-900 w-full h-full top-0 bg-opacity-50 rounded-2xl"></div>
                      <h3 className="absolute bottom-2 right-2 bg-cyan-600 p-2 rounded-2xl text-white text-lg">
                        {item.price} $
                      </h3>
                      {/* <h4 className='absolute top-2 right-2 bg-slate-600 text-white-100 p-1 rounded-md shadow-sm font-medium'>{props.data.status}</h4> */}
                    </div>
                  </div>

                  <div className="py-1 flex flex-col gap-2 items-start">
                    <h1 className="text-slate-200 text-2xl px-3 hover:text-red transition-all line-clamp-1	">
                      {item.title}
                    </h1>

                    <h2 className="text-red text-xl px-3 line-clamp-1	">{item.name}</h2>
                    <hr className='text-zinc-300' />
                    <div className="flex justify-between w-full">
                      <h3 className="text-slate-600 text-lg px-3 line-clamp-1	">
                        {item.productInfo}
                      </h3>
                      <div className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Advertise;
