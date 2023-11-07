import React, { useRef, useEffect } from "react";
import "./Header.css";

const navLinks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null)

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('headerShrink')
    } else {
      headerRef.current.classList.remove('headerShrink')
    }
  }

  const handleClick = e => {
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  }

  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('menuActive')

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)
    return () => window.removeEventListener('scroll', headerFunc)
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="navWrapper">
          <div className="logo">
            <h2>Agency</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {navLinks.map((item, index) => (
                <li className="menuItem" key={index}>
                  <a href={item.path} onClick={handleClick} className="menuLink">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lightMode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-clear-line"></i>Dark Mode
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light Mode
                </span>
              )}
            </span>
          </div>
          <span className="mobileMenu" onClick={toggleMenu}><i className="ri-menu-line"></i></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
