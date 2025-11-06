import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadBasic} from "tsparticles-basic";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {color: {value: "transparent"}},
          fpsLimit: 60,
          fullScreen: {enable: false},
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "attract", // 吸引而非排斥
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 180,
                duration: 0.4,
                factor: 2,
              },
              push: {
                quantity: 3,
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: {enable: true, area: 800},
            },
            color: {
              value: ["#60a5fa", "#a855f7", "#f472b6", "#facc15", "#34d399"],
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
            },
            opacity: {
              value: {min: 0.2, max: 0.9},
              animation: {
                enable: true,
                speed: 0.8,
                sync: false,
              },
            },
            size: {
              value: {min: 2, max: 8},
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 180,
              color: "#a5b4fc",
              opacity: 0.35,
              width: 1.2,
              shadow: {
                enable: true,
                color: "#93c5fd",
                blur: 2,
              },
            },
            move: {
              enable: true,
              speed: 2.2,
              direction: "none",
              random: false,
              straight: false,
              outModes: {default: "out"},
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            glow: {
              enable: true,
              color: "#ffffff",
              blur: 5,
            },
          },
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
