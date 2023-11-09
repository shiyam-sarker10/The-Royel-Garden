import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ErrorLottie, PrivateLoading } from '../../component/lottie/Lottie';
import { useEffect } from 'react';

const Error = () => {
   useEffect(() => {
     document.title = "404 page";
   }, []);
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