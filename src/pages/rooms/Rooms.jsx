import axios from "axios";
import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Option, Select } from "@material-tailwind/react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const url = "http://localhost:5000/rooms";
  useEffect(() => {
    axios.get(url).then((data) => {
      setRooms(data.data); // Update the state with the fetched data
    });
  }, []);
 
const [selection, setSelection] = useState(null);
  console.log("this is select value ", selection);




  return (
    <div className="px-4 my-20">
      <div className="py-8 ">
        <Select
          size="md"
          value={selection}
          onChange={(value) => {
            setSelection(value);
            if (selection === "ascending") {
              rooms.sort((a, b) => a.price - b.price);
            } else if (selection === "descending") {
              rooms.sort((a, b) => b.price - a.price);
            }
          }}
          name="brand"
          label="Select Price Order"
        >
          <Option value="descending">Lowest to Highest</Option>
          <Option value="ascending">Highest to Lowest</Option>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms?.map((room, index) => {
          return (
            <RoomCard
              room={room}
              key={index}
            ></RoomCard>
          );
        })}
      </div>
      
    </div>
  );
};

export default Rooms;
