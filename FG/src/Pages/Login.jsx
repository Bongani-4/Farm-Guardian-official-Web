import React from 'react';

import './LogIn.css';
import farmGuardianLogo from '../assets/images/FarmGuardian.png';
import featureImage from '../assets/images/featureFG-removebg.png';
const Home = () => {
  return (
    <div className="hero">
      <nav>
        <img src={farmGuardianLogo} className="logo" alt="Farm Guardian Logo" />
        <div className="button-group" >
          <a href="#" className="login-btn">Log In</a>
          <a href="Farm Guardian.apk" className="btn">Download app</a>
        </div>
      </nav>
      <div className="content">
        <h2 className="anim lowerText">Simplify<br />your farming.</h2>
        <p className="anim">Farm smart with FG's free services to optimize profitability in your farming operations. Small or large company, we got you covered.</p>
        <a href="#" className="btn anim">Join Now</a>
      </div>
      <img src={featureImage} className="feature-img anim" alt="Farm Guardian Feature" />
    </div>
  );
};

export default Home;
