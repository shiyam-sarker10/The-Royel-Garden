import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetailsCard from "./RoomDetailsCard";
import SitReview from "../../component/review/SitReview.jsx/SitReview";
import ReviewModel from "../../component/review/reviewModel/ReviewModel";

const RoomDetails = () => {
  const [sits, setSits] = useState([]);
  console.log("data ayse ?",sits)
  const {id} = useParams()
  const url = `http://localhost:5000/roomSit/${id}`;
  useEffect(() => {
    axios.get(url)
    .then((res) => {
        setSits(res.data);
      })
  }, []);

// room Data 

 const [roomData,setRoomData] = useState([])
  const RoomUrl = `http://localhost:5000/rooms/${id}`;
  useEffect(() => {
    axios.get(RoomUrl).then((res) => {
      setRoomData(res.data);
    });
  }, []);
  const { price, imageDescription, roomSize, available, roomImage, roomId } =
    roomData;

// review fetch 
  const [reviewData, setReviewData] = useState([]);
  const ReviewUrl = `http://localhost:5000/review/${id}`;
  useEffect(() => {
    axios.get(ReviewUrl).then((res) => {
      setReviewData(res.data);
    });
  }, []);




    const isAvailable = sits.filter(sit => sit.available == true )
  return (
    <div className="px-4 my-20">
      <div className="lg:flex gap-10 items-center ">
        <div className="md:w-1/3">
          <img
            className="w-[500px] border-8 border-blue-500/50 rounded-lg h-[400px]"
            src={roomImage}
            alt={imageDescription}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Room {roomId}
          </h1>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            <span className="font-bold"> Price Per Night : </span>${price} -{" "}
            {price + 400}
          </p>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            <span className="font-bold"> Room Size : </span> {roomSize}
          </p>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            {imageDescription}
          </p>
          <p
            className={`mt-1 text-gray-800 dark:text-gray-400 py-2 px-4 rounded-lg font-bold w-max ${
              isAvailable.length
                ? "bg-blue-50 text-blue-500/80"
                : "bg-red-50 text-red-500"
            } `}
          >
            {isAvailable.length ? "Available" : "Not Available"}
          </p>
        </div>
      </div>
      <div className="lg:flex py-5 flex-wrap items-end space-x-4 space-y-4">
        {sits.map((sitImage) => {
          return (
            <div className="">
              <img
                className="w-[300px] rounded-lg h-[200px]"
                src={sitImage.image}
                alt={imageDescription}
              />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sits?.map((sit, index) => {
          return (
            <RoomDetailsCard
              sit={sit}
              isAvailable={isAvailable}
              key={index}
            ></RoomDetailsCard>
          );
        })}
      </div>
      <div className="my-20">
        <SitReview roomId={roomId}></SitReview>
      </div>
      <div>
        {
          reviewData.map((review, index) => {
            return <ReviewModel review={review}></ReviewModel>;
          })
        }
      </div>
    </div>
  );};

export default RoomDetails;
