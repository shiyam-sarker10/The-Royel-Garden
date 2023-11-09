import React from 'react';
import { Hotel } from '../lottie/Lottie';

const Welcome = () => {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='w-1/2'>
          <Hotel></Hotel>
        </div>
      </div>
    );
};

export default Welcome;