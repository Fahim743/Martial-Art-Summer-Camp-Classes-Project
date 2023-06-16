import { Fade } from "react-awesome-reveal";
import imageB from "../../public/assets/b.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ExtraComponent = () => {
  
    const {user} = useContext(AuthContext)
  
    return (
    <Fade >
      <div className="container mx-auto mb-7 mt-8">
        <div className="hero min-h-screen text-teal-500 rounded">
          <div className="hero-content flex-col lg:flex-row">
            <img src={imageB} className="w-2/3  rounded-lg shadow-2xl" />
            <div className="mr-5">
              <h1 className="text-5xl font-bold mt-3 px-5">
                Importance of Learning <br></br> Self-Defence for kids!
              </h1>
              <p className="py-5 px-5">
                Learning self-defense is crucial for kids as it equips them with
                essential skills and knowledge to protect themselves in
                potentially dangerous situations. In today's world, where
                personal safety can be a concern, self-defense training empowers
                children by boosting their confidence and self-esteem.
                Self-defense training teaches children to recognize and avoid
                potential threats while also providing them with practical
                techniques to defend themselves if necessary. It enhances their
                physical coordination, agility, and strength, promoting overall
                fitness and well-being. Moreover, self-defense instills
                discipline, focus, and respect in children, helping them develop
                a sense of responsibility and self-control. Additionally,
                learning self-defense teaches kids important life skills such as
                problem-solving, decision-making, and situational awareness. It
                enables them to assess risks, make informed choices, and respond
                effectively under pressure. By fostering a sense of personal
                safety, self-defense training empowers children to navigate the
                world with greater confidence, enabling them to protect
                themselves and others if ever confronted with threatening
                situations.
              </p>
              {user? <Link className="px-5" to={"/classes"}>
                <button className="btn bg-teal-500 text-white">Get Started</button>
              </Link>:<Link to={"/login"}>
                <button className="btn btn-primary bg-teal-500 text-white ">Get Started</button>
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ExtraComponent;
