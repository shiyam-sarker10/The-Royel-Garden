import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ErrorLottie, PrivateLoading } from '../../component/lottie/Lottie';

const Error = () => {
    return (
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <div className="w-1/2">
          <ErrorLottie></ErrorLottie>

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