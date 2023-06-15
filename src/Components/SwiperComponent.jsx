import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import useAxios from "../Hooks/useAXios";

const SwiperComponent = () => {
  const [axiosSecure] = useAxios();

  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  return (
    <div className="container mx-auto  mt-5 mb-5">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {classes.map((myClass) => (
          <SwiperSlide key={myClass._id}>
            <div className="card w-full text-teal-500 shadow-xl">
              <figure className="px-5 w-full">
                <img
                  src={myClass.classPhoto}
                
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{myClass.className}</h2>
                <p>Instructor: {myClass.instructorName}</p>
                <div className="card-actions">
                  <button className="btn text-white bg-teal-400">Select</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
