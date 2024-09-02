import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../ThemeProvider";

const ParticlesComponent = () => {
  const { theme } = useTheme();

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="h-[85vh] md:h-[90vh] bg-zinc-50 dark:bg-background"
          options={{
            fpsLimit: 120,
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,

                  mode: "repulse",
                },

                onHover: {
                  enable: true,

                  mode: "grab",
                },
              },

              modes: {
                push: {
                  quantity: 4,
                },

                repulse: {
                  distance: 200,

                  duration: 0.4,
                },
              },
            },

            particles: {
              color: {
                value: theme === "dark" ? "#bae6fd" : "#082f49",
              },

              links: {
                color: theme === "dark" ? "#e0f2fe" : "#075985",

                distance: 150,

                enable: true,

                opacity: 0.5,

                width: 1,
              },

              move: {
                direction: "none",

                enable: true,

                outModes: {
                  default: "bounce",
                },

                random: false,

                speed: 1.2,

                straight: false,
              },

              number: {
                density: {
                  enable: true,
                },

                value: 160,
              },

              opacity: {
                value: 0.5,
              },

              shape: {
                type: "circle",
              },

              size: {
                value: { min: 1, max: 5 },
              },
            },

            detectRetina: true,
          }}
        />
      )}
    </>
  );
};
export default ParticlesComponent;
