import React from 'react'
import '../../styles/Team.css'
import PD from '../../images/ProductDeveloper.png'
import FD from '../../images/FrontDeveloper.png'
import PDe from '../../images/ProductDesigner.png'
import CEO from '../../images/CEO.png'

const teamMembers = [
    {
        imgUrl: PD,
        name: 'Ruben Maitiú',
        position: 'Product Developer',
    },
    {
        imgUrl: FD,
        name: 'Obi Nurgül',
        position: 'Front-End Developer',
    },
    {
        imgUrl: PDe,
        name: 'Morteza Lindsey',
        position: 'Product Designer',
    },
    {
        imgUrl: CEO,
        name: 'Hanne Cunigund',
        position: 'CEO & Sr. Developer',
    },
]

const Team = () => {
  return (
    <section className="ourTeam">
      <div className="container">
        <div className="teamContent">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="teamWrapper">
          {teamMembers.map((item, index) => (
            <div className="teamItem" key={index}>
              <div className="teamImg">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="teamDetails">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="teamMemberSocial">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-x-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team