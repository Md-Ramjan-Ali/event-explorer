import React from "react";
import { MdDateRange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const UpcomingDetails = () => {
  const { id } = useParams();
  const upcomingData = useLoaderData();

  const singleEvent = upcomingData.find((singleData) => singleData.id == id);
  const {
    name,
    thumbnail,
    category,
    entry_fee,
    date,
    time,
    location,
    description,
  } = singleEvent;
  return (
    <div className="card max-w-5xl mx-auto my-10 shadow-sm p-5 space-y-5">
      <img
        className="w-full object-fill h-[500px] rounded-tl-2xl rounded-tr-2xl"
        src={thumbnail}
        alt=""
      />
      <h2 className="text-2xl">{name}</h2>
      <div className="flex justify-between">
        <p className="font-semibold">
          <span className="font-bold">Category:</span> {category}
        </p>
        <p className="font-bold text-red-600">Entry Fee: {entry_fee} Tk</p>
      </div>
      <p>
        <span className="flex gap-1 items-center font-semibold">
          <MdDateRange size={24} />
          {date} at {time} on {location}
        </span>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default UpcomingDetails;
