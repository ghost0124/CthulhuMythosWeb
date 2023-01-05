import React from 'react';
import PortraitImage from '../images/cthulhurising.jpg';
import Portrait1Image from '../images/lovecraft23.png';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div name="Home" className='h-screen bg-gradient-to-b from-black via-green to-green-800'>
        <div className='max-w-screen-lg mx-auto flex items-center justify-center h-full md:flex-row'>
          <div className='container'>
            <div className="row">
              <div className='col-5 justify-center'>
                    <img src={Portrait1Image} alt='lovecraft' className='rounded-2xl mx-auto md:w-full'></img>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
