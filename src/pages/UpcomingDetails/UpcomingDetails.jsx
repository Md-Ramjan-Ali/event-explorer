import React from "react";
import { Helmet } from "react-helmet-async";
import { MdDateRange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

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

  const handleReserveSeat = (e) => {
    e.preventDefault();
    toast.success("Successfully reserve seat!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <Helmet>
        <title>Eventora | UpcomingDetails</title>
      </Helmet>
      <div className="card max-w-5xl mx-auto my-10 shadow-sm p-5 space-y-5">
        <img
          className="w-full object-fill h-[500px] rounded-tl-2xl rounded-tr-2xl"
          src={thumbnail}
          alt=""
        />
        <h2 className="text-3xl font-semibold">{name}</h2>
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

        {/* Reserve Seat part */}

        <div className="max-w-3xl md:w-2xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-center mb-2">
            Form to reserve a seat
          </h2>
          <form onSubmit={handleReserveSeat} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              required
            />
            {/* email */}
            <label className="label mt-2">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <button className="btn mt-2">Reserve Seat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDetails;
