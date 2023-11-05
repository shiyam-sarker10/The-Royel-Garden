import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RoomDetailsCard = ({sit}) => {
    const { image, sitName, } = sit;
    const [sits, setSits] = useState([]);
    const { id } = useParams();
    console.log("this is real id i want", id);
        const url = `http://localhost:5000/rooms/${id}`;
        useEffect(() => {
          axios.get(url).then((res) => {
            console.log(res.data);
            setSits(res.data);
          });
        }, []);
        const { price, imageDescription, roomSize, available } = sits;

    return (
      <div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-[500px] h-[350px] rounded-t-xl"
            src={image}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Room {sitName}
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              <span className="font-bold"> Price Per Night : </span>${price}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              <span className="font-bold"> Room Size : </span> {roomSize}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              {imageDescription}
            </p>
            <p
              className={`mt-1 text-gray-800 dark:text-gray-400 p-2 font-bold w-max ${available ? "bg-blue-50 text-blue-500" : "bg-red-50 text-red-500"} `}
            >
              {available ? "Available" : "Not Available"}
            </p>
            <a
              className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              href="#"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
};

export default RoomDetailsCard;