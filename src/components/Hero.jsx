import React from 'react';
import HeroImage from '../assets/hero-image.png';
import manikPaul from "../assets/manikpaul.jpg"

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-20 px-6'>
      <div className='relative inline-block'>
        <img 
          src={manikPaul} 
          alt="Manik Paul"
          className='mx-auto w-52 h-52 rounded-full object-cover shadow-lg 
          transition-transform duration-300 hover:scale-110 border-4 border-gray-700'
        />
        <div className='absolute bottom-2 right-2 bg-green-400 w-4 h-4 rounded-full border-2 border-black'></div>
      </div>

      <h1 className='text-5xl font-extrabold mt-6 leading-tight'>
        Hi, I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Manik Paul
        </span>
      </h1>

      <p className='text-lg text-gray-300 mt-4 max-w-2xl mx-auto'>
        A passionate <span className='text-green-400 font-semibold'>Professional Video Editor</span>  
        &nbsp;dedicated to crafting stunning visuals and storytelling that captivate audiences.
      </p>

      <div className='mt-8 flex justify-center space-x-6'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold 
        px-6 py-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110'>
          Contact Me
        </button>

        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold 
        px-6 py-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110'>
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;
