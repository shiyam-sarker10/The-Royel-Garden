import React, { useEffect, useState } from 'react';
import ReviewCarsoul from './reviewCarsoul/ReviewCarsoul';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = () => {
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/review")
          .then((res) => res.json())
          .then((data) => setUserData(data));
    },[])
    return (
      <div className='my-20'>
        <div className='space-y-10'>
            <h1 className=' w-1/2 text-3xl md:text-4xl font-bold md:w-1/4 mx-auto text-center py-4 border-b-4 border-black'>User Testimonial</h1>
          <Carousel className='shadow-md'>
         
              {userData?.map((user, index) => {
                return <ReviewCarsoul user={user} key={index}></ReviewCarsoul>;
              })}

          </Carousel>
        </div>
      </div>
    );
};

export default Review;