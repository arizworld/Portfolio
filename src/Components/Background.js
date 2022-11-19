import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import backgroundConfig from "../config/background";

const Background = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id="particleJs">
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            params={backgroundConfig}
        />
        </div>
    );
};
export default Background