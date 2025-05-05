import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <form className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* passowrd  */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="font-semibold text-center pt-5">
            Dont't Have An Account ?{" "}
            <Link className="text-green-500 underline" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;