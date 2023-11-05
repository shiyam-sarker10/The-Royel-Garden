import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RoomCard = ({room}) => {
    const { roomImage, price,roomId } = room;
    const { id } = useParams();
    console.log(id);
    return (
      <div>
        <div className="relative">
          <img className="w-[500px] h-[400px]" src={roomImage} alt="" />
          <div className="bg-light-blue-900/50 absolute inset-0 opacity-0  hover:opacity-100 duration-500">
            <div className="flex justify-center items-center h-full space-x-4">
              <div className="border-r-4 border-light-blue-400 px-4">
                <h1 className="text-2xl font-bold text-white">
                  Price: {price}
                </h1>
              </div>
              <div>
                <Link to={`/room/${roomId}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white">
                    {" "}
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RoomCard;