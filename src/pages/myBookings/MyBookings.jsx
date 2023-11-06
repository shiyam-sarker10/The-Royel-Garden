import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Typography } from '@material-tailwind/react';
import moment from 'moment';

const MyBookings =() => {
    const [myBookingData,setMyBookingData] = useState([])
    const {user} = useContext(AuthContext)
    const email = user?.email
    console.log(email)
    useEffect(() => {
      axios.get(`http://localhost:5000/myBooking/${email}`).then((res) => {
        setMyBookingData(res.data);
      });
    }, [email]);
    
    return (
      <div className="my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {myBookingData.map((data) => (
            <div className="flex    items-center gap-6 shadow-md p-4 rounded-lg">
              <div className="">
                <img
                  className="w-[300px] h-[200px] rounded-lg"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <Typography className=" font-bold text-2xl text-blue-600">
                  <span className='text-black'>Room </span> {data.sitName}
                </Typography>
                <Typography className="font-normal text-gray-600">
                  <span className="font-bold text-black text-lg">
                    Price Per Night
                  </span>{" "}
                  : ${data.sitPrice}
                </Typography>
                <Typography className="font-normal text-gray-600">
                  <span className="font-bold text-lg text-black">
                    Room Booked Date
                  </span>{" "}
                  : {moment(data.bookedDate).format("MMM Do YY")}
                </Typography>
              </div>
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyBookings;