import React from 'react';
import error from '../../../public/error.json'
import loading from '../../../public/loading.json'
import Lottie from "lottie-react";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <div className="w-1/2">
          <Lottie animationData={error} />
        </div>
        <div>
          <Link to="/">
            <Button className="bg-[#6FC7FF]">Go Back</Button>
          </Link>
        </div>
      </div>
    );
};

export default Error;