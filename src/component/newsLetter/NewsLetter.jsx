import React from 'react';
import { Input, Button } from "@material-tailwind/react";

const NewsLetter = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
      <div className='my-20 px-4'>
        <div className=" py-6 flex justify-center">
          <h1 className="md:w-[25%] py-5 font-bold text-3xl  text-center border-b-4 border-black">
            Get Discount
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-8">
          <p className="text-lg text-blue-gray-700 ">
            Subscribe now and get a 20$ discount on your first purchases
          </p>

            <div className="relative flex w-full max-w-[24rem]">
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                color={email ? "gray" : "blue-gray"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded bg-light-blue-500"
              >
                Subscribe
              </Button>
            </div>
          </div>
      </div>
    );
};

export default NewsLetter;