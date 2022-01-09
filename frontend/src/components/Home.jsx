import './Home.scss'
import GreetingAnimation from "./GreetingAnimation";
import Particles from "react-tsparticles";

const Home = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
    <div className="home-container">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            options={{
                fpsLimit: 60,
                fullScreen: false,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 3,
                    },
                },
                detectRetina: true,
            }}
        />
        <div className={"title-anim-container"}>
            <GreetingAnimation/>
        </div>
    </div>
  );
};

export default Home;