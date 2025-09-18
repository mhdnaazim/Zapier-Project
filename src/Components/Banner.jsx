import React, { useState } from "react";
import './Banner.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import video2 from "../assets/Cl1XVAyhpmWlSfI.mp4";
import video3 from "../assets/3rN6Qi4Dvt3cCf3.mp4";
import video4 from "../assets/L9QfMmgGJN6X2cl.mp4";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Move to next slide after video ends
    const handleVideoEnd = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 4); // 4 = total slides
    };

    return (
        <div className="banner-container">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}  // disable auto timer
            >
                {/* Video 1 */}
                <Carousel.Item>
                    <video
                        className="d-block w-100"
                        src={video2}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                </Carousel.Item>

                {/* Video 2 */}
                <Carousel.Item>
                    <video
                        className="d-block w-100"
                        src={video4}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                </Carousel.Item>

                {/* Video 3 */}
                <Carousel.Item>
                    <video
                        className="d-block w-100"
                        src={video2}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                </Carousel.Item>

                {/* Video 4 */}
                <Carousel.Item>
                    <video
                        className="d-block w-100"
                        src={video3}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
