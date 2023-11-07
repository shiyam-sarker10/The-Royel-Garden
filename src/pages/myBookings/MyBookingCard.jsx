import { Button, Typography } from "@material-tailwind/react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { MdSystemUpdateAlt, MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import axios from "axios";



const MyBookingCard = ({ data }) => {
  const { _id, bookedDate } = data;

      const [startDate, setStartDate] = useState(new Date(bookedDate));



      // Update  
  const handleUpdate = (_id) => {
    console.log(_id)
    axios
      .put(`http://localhost:5000/Booked/${_id}`, {
        bookedDate: startDate,
      })
      .then((res) => {
        console.log(res);
        alert("hoise");
        location.reload()
      });

      
      
  };
  const handleDelete = (_id) => {
    console.log(_id)
    axios
      .delete(`http://localhost:5000/Booked/${_id}`)
      .then((res) => {
        console.log(res);
        alert("hoise");
        location.reload()
      });

      
      
  };
  return (
    <div>
      <div className="flex    items-center gap-6 shadow-md p-4 rounded-lg">
        <div className="">
          <img
            className="w-[300px] h-[200px] rounded-lg"
            src={data.image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <Typography className=" font-bold text-2xl text-blue-600">
            <span className="text-black">Room </span> {data.sitName}
          </Typography>
          <Typography className="font-normal text-gray-600">
            <span className="font-bold text-black text-lg">
              Price Per Night
            </span>{" "}
            : ${data.sitPrice}
          </Typography>
          <Typography className="font-normal text-gray-600">
            <span className="font-bold text-lg text-black">
              Room Booked Date
            </span>{" "}
            : {moment(data.bookedDate).format("MMM Do YY")}
          </Typography>
          <Typography className="font-normal text-gray-600">
            <div className="md:flex items-center space-x-2  rounded-lg w-max">
              <span className="font-bold text-lg text-black">Date :</span>
              <div className="border-blue-50 rounded-2xl ">
                <ReactDatePicker
                  showIcon
                  className="w-[150px] text-blue-500 px-2"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </Typography>
        </div>
      <div className=" space-y-4">
          <Button
            onClick={() => {
              handleUpdate(_id);
            }}
            className="flex bg-blue-400 items-center gap-4"
          >
            UpDate
            <span className="">
              <MdSystemUpdateAlt className="text-white/90 text-xl" />
            </span>
          </Button>
          <Button onClick={()=>{handleDelete(_id)}} className="flex bg-red-400 items-center gap-4">
            Delete
            <span className="">
              <MdDeleteOutline className="text-white/90 text-xl" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
