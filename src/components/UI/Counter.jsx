import React from 'react'
import '../../styles/Counter.css'

const counterData = [
    {
        number: '5k',
        text: 'Clients'
    },
    {
        number: 350,
        text: 'Running Projects'
    },
    {
        number: 900,
        text: 'Projects Completed'
    }
]

const Counter = () => {
  return (
    <section className="counter" id='projects'>
      <div className="container">
        <div className="counterWrapper">
          {counterData.map((item, index) => (
            <div className="counterItem" key={index}>
              <h3 className="counterNumber">{item.number}+</h3>
              <h4 className="counterTitle">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter