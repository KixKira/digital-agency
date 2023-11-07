import React from 'react'
import '../../styles/Blog.css'
import Video from '../../images/Video.png'
import Article from '../../images/Article.png'
import CaseStudy from '../../images/CaseStudy.png'

const blogData = [
    {
        imgUrl: Video,
        title: 'Video',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: Article,
        title: 'Article',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: CaseStudy,
        title: 'Case Study',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
]

const Blog = () => {
  return (
    <section id='blog' className='blog'>
      <div className="container">
        <div className="blogTopContent">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look from our{" "}
            <span className="highlight">recent blog</span>
          </h2>
        </div>
        <div className="blogWrapper">
          {blogData.map((item, index) => (
            <div className="blogItem" key={index}>
              <h3>{item.title}</h3>
              <div className="blogImg">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blogDesc">
                {item.desc}
              </p>
              <div>
                <a href="#" className="learnMore">
                  <i className="ri-arrow-right-double-fill"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;