import React from "react";
import { Tab, Tabs } from "./../Tab/Tab";
import { useEffect } from "react";

const Process = () => {
   useEffect(() => {
     document.title = "The Royal Garden - How Its Works";
   }, []);
  return (
    <Tabs>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around 0 bg-gradient-to-r from-blue-500 to-light-blue-200 shadow-md flex-col">
            <div className="w-1/2">
              <h2 className="sm:text-4xl w-full text-3xl  font-bold">
                Create Account
              </h2>
              <p className="mt-3">
                First you need have account for login then you can see dashboard
                , we make sign up easy and this basic , same like you make
                account social media . and dont worry all details is safe , we
                not share your details to others.
              </p>
            </div>
            <div className="w-1/2">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/mTCQ6X4/Screenshot-1.png"
                alt="Image 1"
              />
            </div>
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3 ">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-500">
            1
          </p>
          <p className="md:text-lg sm:text-base text-sm">Create Account</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around 0 bg-gradient-to-r from-blue-500 to-light-blue-200 shadow-md flex-col">
            <div className="w-1/2">
              <h2 className="sm:text-4xl text-3xl xl:max-w-[200px] font-bold">
                Login
              </h2>
              <p className="mt-3">
                Second you need to go to the rooms section and then there you
                will see 6 rooms choose any 1 room then you can book 4 sit under
                that room you. For deposit please go to{" "}
                <span className="text-[#0ABB85]">
                  “https://growfollows.com/addfunds”
                </span>
                you can find “Add funds” at slidebar
              </p>
            </div>

            <div className="w-1/2">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/7Yn4jbc/Screenshot-2.png"
                alt="Image 1"
              />
            </div>
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-500">
            2
          </p>
          <p className="md:text-lg ">Book Rooms</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-8 p-7 text-white rounded-xl   justify-around 0 bg-gradient-to-r from-blue-500 to-light-blue-200 shadow-md flex-col">
            <div className="flex gap-4 xl:flex-row flex-col">
              <div className=" w-1/2">
                <h2 className="sm:text-4xl text-3xl xl:max-w-[250px] font-bold">
                  Create Order
                </h2>
                <p className="mt-3">
                  Third after On rooms Details page you can post your review but
                  you have to full fill a condition that is you have to booked
                  sit then only you can post review
                  <span className="text-[#0ABB85]">
                    “https://growfollows.com/addfunds”
                  </span>{" "}
                  to see all service and price.
                </p>
              </div>
              <div className="w-1/2">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://i.ibb.co/Pzjptcg/Screenshot-3.png"
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-500">
            3
          </p>
          <p className="md:text-lg ">Post Review</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-8 p-7 text-white rounded-xl   justify-around 0 bg-gradient-to-r from-blue-500 to-light-blue-200 shadow-md flex-col">
            <div className="flex gap-4 xl:flex-row flex-col">
              <div className="w-1/2">
                <h2 className="sm:text-4xl text-3xl xl:max-w-[250px] font-bold">
                  Create Order
                </h2>
                <p className="mt-3">
                  Fourth You can update your booking date and also you can
                  delete your bookings but make sure that you have to cancel
                  your booking 1 day before your booking date
                  <span className="text-[#0ABB85]">
                    “https://growfollows.com/addfunds”
                  </span>{" "}
                  to see all service and price.
                </p>
              </div>
              <div className="w-1/2">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://i.ibb.co/QD80kV4/Screenshot-4.png"
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-500">
            3
          </p>
          <p className="md:text-lg ">Post Review</p>
        </div>
      </Tab>
    </Tabs>
  );
};





export default Process;
