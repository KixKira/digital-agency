import React from 'react'
import '../../styles/Newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletterWrapper">
          <div className="newsletterContent">
            <h6 className="subtitle">Let's work</h6>
            <h2>
              Explore the <span className="highlight">hidden</span> ideas and
              subscribe!
            </h2>
          </div>
          <div className="newsletterForm">
            <input type="email" placeholder="Email" />
            <button className="secondaryBtn subscribeBtn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter