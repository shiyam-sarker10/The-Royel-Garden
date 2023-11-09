import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

import MyBookingCard from './MyBookingCard';
import { NoProduct } from '../../component/lottie/Lottie';


const MyBookings =() => {

    const [myBookingData,setMyBookingData] = useState([])
    
    
    const {user} = useContext(AuthContext)
    const email = user?.email
    console.log(email)


    useEffect(() => {
      axios
        .get(`https://ass-11-server-eight.vercel.app/myBooking/${email}`, {withCredentials:true})
        .then((res) => {
          setMyBookingData(res.data);
          console.log("this is booking",res.data)
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }, [email]);
    const [changeData, setChangeData] = useState(myBookingData);
    useEffect(() => {
      if (myBookingData) {
        setChangeData(myBookingData);
      }
    }, [myBookingData]);
    
    
    useEffect(() => {
      document.title = "The Royal Garden - My Bookings";
    }, []);
    // update  app

    
    return (
      <div className="my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {changeData?.length > 0 ? (
            changeData?.map((data, idx) => (
              <MyBookingCard
                data={data}
                setChangeData={setChangeData}
                changeData={changeData}
                key={idx}
              ></MyBookingCard>
            ))
          ) : (
            <div className="h-[80vh] col-span-2 flex flex-col items-center ">
              <div className='md:w-1/4'>
                <NoProduct></NoProduct>
              </div>
              <div>
                <h1 className="text-center font-bold text-gray-500 text-3xl col-span-2">
                  You haven't made any Booking yet
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default MyBookings;