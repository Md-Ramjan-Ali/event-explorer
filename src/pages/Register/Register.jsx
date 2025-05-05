import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
        <form className="fieldset">
          {/* Name  */}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />

          {/* Photo URl  */}
          <label className="label">Photo URl </label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo URl"
            required
          />

          {/* email  */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* password  */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="font-semibold text-center pt-5">
            Allready Have An Account ?{" "}
            <Link className="text-green-500 underline" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
