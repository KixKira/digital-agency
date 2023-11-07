import React from 'react'
import '../../styles/About.css'
import AboutImg from '../../images/AboutUs.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique unde illo molestiae ullam consequatur illum dolor, est'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated tem',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique unde illo molestiae ullam consequatur illum dolor, est'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Hours support',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique unde illo molestiae ullam consequatur illum dolor, est'
    },
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="aboutWrapper">
          <div className="aboutContent">
            <div className="subtitle">Why choose us</div>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description aboutContentDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolore inventore iure quasi illo autem aliquam, incidunt quaerat
              assumenda unde quam atque aspernatur voluptates exercitationem
              voluptate, quos ipsa, molestias suscipit!
            </p>
            <div className='chooseItemWrapper'> 
              {chooseData.map((item, index) => (
                <div className="chooseUsItem" key={index}>
                  <span className="chooseUsIcon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="chooseUsTitle">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aboutImg">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About