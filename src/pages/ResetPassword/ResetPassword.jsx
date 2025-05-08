import React, { use, useRef } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';

const ResetPassword = () => {
const { forgetPassword } = use(AuthContext);
 const emailRef = useRef();


  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    forgetPassword(email)
      .then(() => {
        alert("Reset password");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-2xl mx-auto card shadow-sm mt-20 p-10">
      <h1 className="text-2xl font-bold text-center mb-3">
        Reset your Password
      </h1>
      <div className="fieldset space-y-3">
        <label className="label text-xl font-bold">Email</label>
        <input
          name="email"
          type="email"
          ref={emailRef}
          className="input w-full"
          placeholder="Enter your email"
          required
        />
        <button onClick={handleForgetPassword} className="btn">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;