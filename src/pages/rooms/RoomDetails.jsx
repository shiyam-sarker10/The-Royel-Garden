import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetailsCard from "./RoomDetailsCard";

const RoomDetails = () => {
  const [sits, setSits] = useState([]);
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
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sits?.map((sit, index) => {
          return <RoomDetailsCard sit={sit} key={index}></RoomDetailsCard>;
        })}
      </div>
    </div>
  );};

export default RoomDetails;
