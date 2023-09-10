// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./swiperstyles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ images }) => {
  const imageSlots = [];

  for (const image of images) {
    imageSlots.push(
      <SwiperSlide>
        <img src={image}></img>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {imageSlots}
      </Swiper>
    </>
  );
};
