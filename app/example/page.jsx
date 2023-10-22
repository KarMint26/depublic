"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-coverflow';

export default function Example() {
  return (
    <>
      <div className="mt-[10rem] carousel-container flex justify-center items-center">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={5}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 3000 }}
          effect={'coverflow'}
          coverflow={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Image
              src="/assets/events/ticket-images.png"
              width={300}
              height={200}
              alt="image"
              className="w-[600px] event-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/events/ticket-images.png"
              width={300}
              height={200}
              alt="image"
              className="w-[600px] event-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/events/ticket-images.png"
              width={300}
              height={200}
              alt="image"
              className="w-[600px] event-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/events/ticket-images.png"
              width={300}
              height={200}
              alt="image"
              className="w-[600px] event-images"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
