import React from 'react';
import { Button, Textarea } from "@material-tailwind/react";

const SitReview = () => {
    return (
      <div>
        <div className=" py-5">
          <div className="w-1/2">
            <h1 className="text-3xl md:w-1/3 font-bold border-b-4 border-blue-400 text-gray-800">
              User Review
            </h1>
          </div>
        </div>
        <form action="">
          <div className="flex md:w-96 flex-col gap-6">
            <Textarea name="comment" color="blue" label="Comment" />
            <div>
              <Button className='bg-blue-400'>
                <input type="submit" value="Submit" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default SitReview;