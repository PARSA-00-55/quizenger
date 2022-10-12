import React from 'react';
import './Hero.css';
import img from "../../img/quiz-image_0.jpg";

const Hero = () => {
    return (
      <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
        <h1 className="display-4 fw-bold"><span className='logo'>Quiz</span>enger</h1>
          <p className="lead">Assessment, instruction, and practice that motivate every student to mastery</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Take a Quiz</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;