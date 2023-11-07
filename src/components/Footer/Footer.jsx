import React from 'react'
import './Footer.css'

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    },
]

const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guides'
    },
]

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#",
    display: "Job",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="footerLogo">
            <h2>Agency</h2>
            <p className="description">Grow with us</p>
            <p className="smallText description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              est iste labore impedit unde illum? Maxime iusto quidem eligendi?
              Iure.
            </p>
          </div>
          <div className="footerQuickLinks">
            <h3 className="quickLinksTitle">Solutions</h3>
            <ul className="quickLinks">
              {quickLinks01.map((item, index) => (
                <li className="quickLinkItem" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerQuickLinks">
            <h3 className="quickLinksTitle">Support</h3>
            <ul className="quickLinks">
              {quickLinks02.map((item, index) => (
                <li className="quickLinkItem" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerQuickLinks">
            <h3 className="quickLinksTitle">Company</h3>
            <ul className="quickLinks">
              {quickLinks03.map((item, index) => (
                <li className="quickLinkItem" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright {year}, developed by{" "}
          <a href="https://kixkira.com">KixKira</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer