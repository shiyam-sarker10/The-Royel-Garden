import { Button, Typography } from "@material-tailwind/react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const MyBookingCard = ({ data }) => {
  const { _id } = data;

      const [startDate, setStartDate] = useState(new Date());

  const handleUpdate = (_id) => {
    console.log(_id)
    axios
      .put(`http://localhost:5000/Booked/${_id}`, {
        bookedDate: startDate,
      })
      .then((res) => {
        console.log(res);
        alert("hoise");
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
        <div>
          <Button
            onClick={() => {
              handleUpdate(_id);
            }}
            className="flex bg-blue-200 items-center gap-4"
          >
            UpDate
            <span className="">
              <MdSystemUpdateAlt className="text-white/90 text-xl" />
            </span>
          </Button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
