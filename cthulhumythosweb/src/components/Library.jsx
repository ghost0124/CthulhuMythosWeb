import React from 'react';
import Carousel from '../components/WebComponents/Carousel';

export const Library = () => {
    return (
      <div name="Library" className='h-screen w-full bg-gradient-to-b from-black via-green to-green-800'>
          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
              <div>
                <Carousel>
                </Carousel>
            </div>
          </div>
      </div>
    );
  };