import React from 'react'
import '../../styles/Hero.css'
import heroDarkImg from '../../images/a.svg'

const Hero = () => {
  return (
    <section className="heroSection" id='home'>
      <div className="container">
        <div className="heroWrapper">
          <div className="heroContent">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              rerum? Odio ea fugiat in est non, amet nulla quisquam dolore.
            </p>
            <div className="heroBtns">
              <button className="primaryBtn">Get Started Now</button>
              <button className="secondaryBtn">Discover More</button>
            </div>
          </div>
          <div className="heroImg">
            <img src={heroDarkImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero