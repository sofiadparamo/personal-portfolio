import './Home.scss'
import GreetingAnimation from "./GreetingAnimation";

const Home = () => {


  return (
    <div className="home-container">
        <div className={"title-anim-container"}>
            <GreetingAnimation/>
        </div>
    </div>
  );
};

export default Home;