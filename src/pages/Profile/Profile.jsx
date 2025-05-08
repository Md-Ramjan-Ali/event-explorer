import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateUser } = use(AuthContext);
  const { displayName, email, photoURL } = user;

  const handleEditProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    toast.success("Successfully Update profile!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ displayName: name, photoURL: photo });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Eventora | Profile</title>
      </Helmet>
      <div className="card max-w-3xl mx-auto  my-5 p-5 shadow-sm space-y-3">
        <div className="flex justify-center tooltip" data-tip={displayName}>
          <img className="w-56 h-56 border" src={photoURL} alt="" />
        </div>
        <h2 className="text-xl font-bold text-center">Name: {displayName}</h2>
        <p className="font-semibold flex justify-center items-center gap-2">
          <MdEmail size={24} /> {email}
        </p>
        {/* update profile */}
        <div className="max-w-2xl md:w-xl mx-auto mt-10">
          <h2 className="text-xl font-bold text-center mb-2">Update Profile</h2>
          <form onSubmit={handleEditProfile} className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              required
            />

            {/* Photo URl  */}
            <label className="label mt-2">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo URl"
              required
            />
            <button className="btn mt-2">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
