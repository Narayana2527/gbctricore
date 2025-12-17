import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import companyLogos from "../data/Company-logos";

const LogoSlider = () => {
  return (
    <div className="w-full py-5 bg-white">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {companyLogos.map((company) => (
          <SwiperSlide key={company.id}>
            <div className="p-3">
              <img
                src={company.logo}
                
                alt={company.name}
                className="w-full object-contain opacity-70 hover:opacity-100 transition fs-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
