import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {


  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const titles = ['', 'Software Engineer', 'Machine Learning', 'Web Developer', 'Data Science', 'Photographer', 'Car Enthusiast', 'Formula 1'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex === titles.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.bg-hero-pattern')?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${isScrolled ? 'bg-primary' : 'bg-transparent'} `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className='w-19 h-10 object-contain'
          />
          <p className={`text-white text-[24px] font-normal cursor-pointer flex fade-text`}>&nbsp;
            <span className='lg:block hidden'>| {titles[currentIndex]}</span>
          </p>
        </Link>

        <ul className='list-none md:flex hidden flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
              ${active === nav.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-normal cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title === "Resume" ? (
                <a href={nav.resumeLink} target="_blank" rel="noopener noreferrer">{nav.title}</a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
              ${active === nav.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  {nav.title === "Resume" ? (
                    <a href={nav.resumeLink} target="_blank" rel="noopener noreferrer">{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar