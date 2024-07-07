import React from "react";
import Lottie from "react-lottie";
import * as LoaderJson from '../assets/images/loaderVideo.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoaderJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
        };
    return(
        <React.Fragment>
            <Lottie options={defaultOptions}
              height={360}
              width={360}
              isStopped={false}
              isPaused={false}/>
        </React.Fragment>
    );
};

export default Loader;