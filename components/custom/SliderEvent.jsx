"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/navigation";

const SliderEvent = ({ carouselImage }) => {
  const router = useRouter();

  return (
    <>
      <div className="carousel-container flex justify-center items-center">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={5}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 8000 }}
          effect={"coverflow"}
          coverflow={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {carouselImage.map((card) => (
            <SwiperSlide key={card.id}>
              <Image
                src={card.url}
                width={350}
                height={300}
                alt={card.alt}
                className="event-images rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] cursor-pointer"
                onClick={() => router.push(`/all-event/detail/${card.id}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderEvent;
