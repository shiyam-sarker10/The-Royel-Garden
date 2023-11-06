import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetailsCard from "./RoomDetailsCard";

const RoomDetails = () => {
  const [sits, setSits] = useState([]);
  const [singleSit,setSingleSit] = useState({})
  const {}
  const {id} = useParams()
  console.log(id)
  const url = `http://localhost:5000/roomSit/${id}`;
  useEffect(() => {
    axios.get(url)
    .then((res) => {
        console.log(res.data);
        setSits(res.data);
      })
  }, []);
 const [roomData,setRoomData] = useState([])
  const RoomUrl = `http://localhost:5000/rooms/${id}`;
  useEffect(() => {
    axios.get(RoomUrl).then((res) => {
      setRoomData(res.data);
    });
  }, []);
  const { price, imageDescription, roomSize, available, roomImage } = roomData;
  return (
    <div className="px-4 my-20">
      <div>
        <div>
          <img
            className="w-[500px] border-8 border-blue-500/50 rounded-lg h-[400px]"
            src={roomImage}
            alt={imageDescription}
          />
        </div>
        <div>
          <div>
            <img src={} alt="" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sits?.map((sit, index) => {
          return (
            <RoomDetailsCard
              sit={sit}
              setSingleSit={setSingleSit(sit)}
              key={index}
            ></RoomDetailsCard>
          );
        })}
      </div>
    </div>
  );};

export default RoomDetails;
