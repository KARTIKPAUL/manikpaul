import React, { useState, useEffect } from 'react';
import { FiFilm, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll function
  const smoothScroll = (e, section) => {
    e.preventDefault();
    document.querySelector(section).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsOpen(false); // Close mobile menu after click
  };

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'} text-white`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex justify-between items-center py-3'>
          {/* Logo with film icon */}
          <div className='flex items-center space-x-2'>
            <FiFilm className='w-8 h-8 text-blue-400' />
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>
              Manik Paul
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='flex space-x-8'>
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, '#home')}
                className='nav-link hover:text-blue-400'
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => smoothScroll(e, '#about')}
                className='nav-link hover:text-blue-400'
              >
                About
              </a>
              <div className='relative group'>
                <button className='nav-link hover:text-blue-400 flex items-center'>
                  Services <span className='ml-1'>▾</span>
                </button>
                <div className='absolute hidden group-hover:block bg-black/90 backdrop-blur-sm p-4 rounded-lg space-y-3 min-w-[200px]'>
                  <a href="#editing" className='block hover:text-blue-400'>Video Editing</a>
                  <a href="#color-grading" className='block hover:text-blue-400'>Color Grading</a>
                  <a href="#motion-graphics" className='block hover:text-blue-400'>Motion Graphics</a>
                </div>
              </div>
              <a 
                href="#portfolio" 
                onClick={(e) => smoothScroll(e, '#portfolio')}
                className='nav-link hover:text-blue-400'
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, '#contact')}
                className='nav-link hover:text-blue-400'
              >
                Contact
              </a>
            </div>

            <button className='ml-8 bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 animate-pulse'>
              Let's Collaborate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-2xl p-2 hover:text-blue-400 transition-colors'
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-sm pb-4 `}>
          <div className='flex flex-col space-y-4 text-center h-screen'>
            <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className='nav-link-mobile'>Home</a>
            <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className='nav-link-mobile'>About</a>
            <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className='nav-link-mobile'>Services</a>
            <a href="#portfolio" onClick={(e) => smoothScroll(e, '#portfolio')} className='nav-link-mobile'>Portfolio</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className='nav-link-mobile'>Contact</a>
            <button className='mx-8 bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300'>
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;