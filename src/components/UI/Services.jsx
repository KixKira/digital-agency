import React from 'react'
import '../../styles/Services.css'

const serviceData = [
  {
    icon: "ri-apps-2-line",
    title: "App Development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum sed",
  },
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum sed",
  },
  {
    icon: "ri-pencil-ruler-line",
    title: "Graphics Design",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum sed",
  },
  {
    icon: "ri-rocket-2-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum sed",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="servicesTopContent">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="servicesItemWrapper">
          {serviceData.map((item, index) => (
            <div className="servicesItem" key={index}>
              <span className="serviceIcon">
                <i className={item.icon}></i>
              </span>
              <h3 className="serviceTitle">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services