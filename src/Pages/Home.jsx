import ExtraComponent from "../Components/ExtraComponent";
import SwiperComponent from "../Components/SwiperComponent";
import TopBanner from "../Components/TopBanner";
import AllInstructor from "../Components/allInstructor";

const Home = () => {
  return (
    <div >
        
      <TopBanner></TopBanner>
      {/* Instructor Section */}
      <h2 className="text-center text-teal-500 text-3xl mt-5">Instructor </h2>
      <AllInstructor></AllInstructor>
      <h2 className="text-center text-teal-500 text-3xl mt-5 mb-5">
        Popular Classes Slider{" "}
      </h2>
      {/* Class Section with swipper */}
      <SwiperComponent></SwiperComponent>
      {/* Extra Section */}
      <ExtraComponent></ExtraComponent>
    </div>
  );
};

export default Home;
