import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import moment from 'moment/moment';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const RoomDetailsCard = ({ sit }) => {
  const navigate = useNavigate()

  const {user} = useContext(AuthContext)
  const email = user?.email
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  let { image, sitName, _id, sitPrice, available, commonId, bookedDate } = sit;

  const [roomSit, setRoomSit] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const dateValue = moment(startDate).format("MMM Do YY");

  const { id } = useParams();

  const url = `http://localhost:5000/rooms/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setRoomSit(res.data);
    });
  }, []);

  bookedDate = startDate;
  const { imageDescription, roomSize } = roomSit;
  const bookedData = {
    sitName,
    image,
    sitPrice,
    commonId,
    bookedDate,
    email,
  };
  

  const handleBooking = (_id) => {
   if(user?.email){
     axios
       .put(`http://localhost:5000/roomIdSit/${_id}`, {
         available: false,
       })
       .then((res) => {
         axios
           .post("http://localhost:5000/myBooking", bookedData)
           .then((res) => {
             location.reload();
           });
       })
       .catch((err) => {
         console.log(err);
       });
   }
   else{
     navigate('/login')
   }
  };

  return (
    <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Your Booking Preview</DialogHeader>
        <DialogBody className="flex justify-center items-center gap-4">
          <div className="">
            <img className="w-[250px] rounded-lg" src={image} alt="" />
          </div>
          <div>
            <Typography className="font-normal">
              Price Per Night : ${sitPrice}
            </Typography>
            <Typography className="font-normal">
              Room Size : {roomSize}
            </Typography>
            <Typography className="font-normal">
              Room Booked Date : {dateValue}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Go Back
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleBooking(_id) 
            }}
          >
            Booked confirm
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="flex px-4 flex-col bg-white border shadow-sm rounded-xl  dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 md:p-5 space-y-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Room {sitName}
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            <span className="font-bold"> Price Per Night : </span>${sitPrice}
          </p>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            <span className="font-bold"> Room Size : </span> {roomSize}
          </p>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            {imageDescription}
          </p>
          <p
            className={`mt-1 text-gray-800 dark:text-gray-400 py-2 px-4 rounded-lg font-bold w-max ${
              available
                ? "bg-blue-50 text-blue-500/80"
                : "bg-red-50 text-red-500"
            } `}
          >
            {available ? "Available" : "Not Available"}
          </p>
          <div className="md:flex items-center space-x-2  rounded-lg w-max">
            <p>Pick Booking Date : </p>
            <div className="border-blue-50 rounded-2xl ">
              <DatePicker
              showIcon
                className="w-[150px] text-blue-500 px-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <Button
            disabled={!available}
            onClick={handleOpen}
            className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            href="#"
          >
            Booking now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCard;