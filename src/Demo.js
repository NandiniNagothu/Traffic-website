import React, { useState } from 'react';
import demovideo from './Demo.mp4';
import './Demo.css'
import close from './images/close.png';

const Demo = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);

  const toggleVideo = () => {
    setIsVideoActive(!isVideoActive);
  };

  const handleVideoClose = () => {
    toggleVideo();
    const video = document.querySelector(".video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="abcontainer m-5">
      <h2 className="abheading text-center m-3"><p>About</p></h2>
      <div className="subject">
        <div className='cardsub'>
          <div className='card1'>
            <p>Traffic due to automobiles is a major problem in many urban places
              in India as well as in other countries. Malfunctioning of the traffic lights and
              various other dysfunctionalities has led to traffic congestion which hurts the
              economy, environment, and overall quality of life. Hence it is very important
              to manage the traffic congestion problem effectively.</p>
          </div>
          <div className='card1'>
            <p> In this System, a prototype
              is proposed for a traffic management system using IR sensors, Arduino, serial
              to the parallel shift register, and LED displays. The density of the traffic is
              measured by placing the IR sensors at the 4 lane junction after a certain
              distance. The data collected from sensors is used to dynamically change the
              sequence of green lights as well as to dynamically change the green light
              delays.</p>
          </div>

          <div className='card1'>
            <p>Most of the prevailing system to control vehicle speed has a fixed speed control mechanism, which is not sufficient in places of high alert. The objective of this paper is to reduce the speed of the vehicle automatically in comparison with the maximum permissible speed limit of particular location. The Real Time Automatic Speed Control Unit we proposed is highly driver friendly and the mechanical systems do not lose their functional integrity.</p>
          </div>
          <div className='card1'>
            <p> The controlling part incorporated in this system fully avoids any kind of human intervention and integrating both mechanical and electronic systems. The algorithm incorporated continuously monitors and compares the speed raised by manual acceleration and the maximum permissible speed of the particular location. Based on this, the speed of the motor is brought down to the speed limit assigned to that particular zone.</p>
          </div>
        </div>
      </div>
      <div className='abbtn'>
        <button className='mainbtn' type="button" onClick={toggleVideo}>Watch Demo video</button>
      </div>
      {isVideoActive && (
        <div className="video1">
          <video src={demovideo} controls autoPlay className="video"></video>
          <img src={close} alt="Close" className="close" onClick={handleVideoClose} />
        </div>
      )}
    </div>
  );
};

export default Demo;
