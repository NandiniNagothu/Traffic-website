import React from 'react';
import './Section.css'
import photo from "./images/trafficcar1.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagesSlide from "./imagesSlide";
const Section = () => {

    const settings = {
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className="sectioncontainer">
            <div className="text-container">
                <h2>Welcome to the <h1><b className='projectname'>Smart Traffic Monitoring and Controlling</b></h1></h2>
                <p>"Speed Smart, Drive Safe: Your Journey, Your Responsibility."</p>
            </div>
            <div className="image-container">
                <img className='img1' src={photo} alt="Library" />
            </div>
            <div className="slidercontainer">
                <div className="imgslider">
                    <Slider {...settings}>
                        {imagesSlide.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="text">
                    <h2 className="heading">Traffic Rules</h2>
                    <div className="points">
                        <p>1.Do not drink and drive</p>
                        <p>2.Avoid over-speeding</p>
                        <p>3.Follow traffic signals</p>
                        <p>4.Make way for emergency vehicles</p>
                        <p>5.Don't use a mobile phone while driving</p>
                        <p>6.Always wear your seat belt</p>
                        <p>7.Avoid Rash driving</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
