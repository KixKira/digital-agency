import React from 'react'
import '../../styles/Testimonials.css'
import Slider from 'react-slick'
import Testimonial1 from '../../images/Testimonial1.jpg'
import Testimonial2 from '../../images/Testimonial2.jpg'
import Testimonial3 from '../../images/Testimonial3.jpg'
import Testimonial4 from '../../images/Testimonial4.jpg'

const Testimonials = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };

  return (
    <section>
      <div className="container">
        <div className="sliderContentTop">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>
        <div className="sliderWrapper">
          <Slider {...settings}>
            <div className="sliderItem">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas consequatur quam facilis perferendis cumque voluptatem hic,
                dolorum, velit blanditiis maxime voluptas magni ullam a. Beatae
                vel fuga excepturi velit! Qui ducimus iste quo cum! Deleniti,
                similique quaerat. Molestiae, perferendis?
              </p>
              <div className="customerDetails">
                <div className="customerImg">
                  <img src={Testimonial1} alt="" />
                </div>
                <div>
                  <h5 className="customerName">Firdos Sloan</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>
            <div className="sliderItem">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas consequatur quam facilis perferendis cumque voluptatem hic,
                dolorum, velit blanditiis maxime voluptas magni ullam a. Beatae
                vel fuga excepturi velit! Qui ducimus iste quo cum! Deleniti,
                similique quaerat. Molestiae, perferendis?
              </p>
              <div className="customerDetails">
                <div className="customerImg">
                  <img src={Testimonial2} alt="" />
                </div>
                <div>
                  <h5 className="customerName">Gaius Gordon</h5>
                  <p className="description">Sr. Product Designer</p>
                </div>
              </div>
            </div>
            <div className="sliderItem">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas consequatur quam facilis perferendis cumque voluptatem hic,
                dolorum, velit blanditiis maxime voluptas magni ullam a. Beatae
                vel fuga excepturi velit! Qui ducimus iste quo cum! Deleniti,
                similique quaerat. Molestiae, perferendis?
              </p>
              <div className="customerDetails">
                <div className="customerImg">
                  <img src={Testimonial3} alt="" />
                </div>
                <div>
                  <h5 className="customerName">Cyrillus Uthyr</h5>
                  <p className="description">Owner FS</p>
                </div>
              </div>
            </div>
            <div className="sliderItem">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas consequatur quam facilis perferendis cumque voluptatem hic,
                dolorum, velit blanditiis maxime voluptas magni ullam a. Beatae
                vel fuga excepturi velit! Qui ducimus iste quo cum! Deleniti,
                similique quaerat. Molestiae, perferendis?
              </p>
              <div className="customerDetails">
                <div className="customerImg">
                  <img src={Testimonial4} alt="" />
                </div>
                <div>
                  <h5 className="customerName">Pumay Asim</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials