import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

import MyBookingCard from './MyBookingCard';


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


    // update  app

    
    return (
      <div className="my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {myBookingData.map((data,idx) => ( <MyBookingCard data={data} key={idx}></MyBookingCard>))}
        </div>
      </div>
    );
};

export default MyBookings;