import React from 'react';
import './Hero.css';
import img from "../../img/hero.webp";

const Hero = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold"><span className='logo'>Quiz</span>enger</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Assessment, instruction, and practice that motivate every student to mastery</p>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5 hero-img">
            <img src={img} alt='test'></img>
      </div>
    </div> 
  </div>
    );
};

export default Hero;