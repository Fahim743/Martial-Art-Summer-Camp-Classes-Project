import SwiperComponent from "../Components/SwiperComponent";
import TopBanner from "../Components/TopBanner";
import AllInstructor from "../Components/allInstructor";

const Home = () => {
  return (
    <div >
        
      <TopBanner></TopBanner>

      <h2 className="text-center text-teal-500 text-3xl mt-5">Instructor </h2>
      <AllInstructor></AllInstructor>
      <h2 className="text-center text-teal-500 text-3xl mt-5 mb-5">
        Popular Classes Slider{" "}
      </h2>
      <SwiperComponent></SwiperComponent>
    </div>
  );
};

export default Home;
