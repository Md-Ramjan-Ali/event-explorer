import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  // console.log(event);
  const {
    id,
    name,
    thumbnail,
    category,
    entry_fee,
    date,
    time,
    location,
  
  } = event;
  return (
    <div className="card card-side bg-base-100 shadow-sm" data-aos="zoom-in">
      <div className="">
        <figure>
          <img
            className="w-60 h-72 rounded-tl-lg rounded-bl-lg"
            src={thumbnail}
            alt="thumbnail"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="font-semibold">
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="flex gap-1 items-center font-semibold">
            <MdDateRange size={24} />
            {date} at {time}
          </span>
        </p>
        <p className="font-semibold">
          <span className="flex gap-1">
            <IoLocation size={24} /> {location}
          </span>
        </p>
        <p className="font-bold text-red-600">Entry Fee: {entry_fee} Tk</p>
        <div className="card-actions">
          <Link to={`/upcomingdetails/${id}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
