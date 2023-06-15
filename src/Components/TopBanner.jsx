
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import imageA from "../../public/assets/a.jpg"
import imageB from "../../public/assets/b.jpg"
import imageC from "../../public/assets/c.jpg"


const TopBanner = () => {
  return <div className="container mx-auto mt-8 mb-6">
     <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-7" ><img className="w-full h-[720px] mx-auto rounded" src={imageA} alt="" /><h2 className="text-3xl text-center text-teal-400">Teach Your Children to be Stronger</h2></SwiperSlide>
        <SwiperSlide className="mb-7" ><img className=" w-full  h-[720px] mx-auto rounded" src={imageB} alt="" /><h2 className="text-3xl text-center text-teal-400">Make Your Children Self-dependable</h2></SwiperSlide>
        <SwiperSlide className="mb-7" ><img className=" w-full h-[720px] mx-auto rounded" src={imageC} alt="" /><h2 className="text-3xl text-center text-teal-400">Teach Them to protect themselves</h2></SwiperSlide>
        
      </Swiper>
  </div>;
};

export default TopBanner;
