import React from 'react';
import poster from "../../../assets/img/2151662967.jpg"
import bannerVideo from "../../../../public/Galaxy.mp4"
const Banner = () => {
    return (
        <div>
            <video playsInline loop autoPlay muted poster={poster} >
                <source src={bannerVideo} type="video/mp4" />
                
            </video>
        </div>
    );
};

export default Banner;