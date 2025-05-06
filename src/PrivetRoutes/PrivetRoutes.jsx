import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivetRoutes = ({children}) => {
  const { user, loading } = use(AuthContext);

  if(loading){
    return <Loading></Loading>
  }

  if(!user){
    return <Navigate to="/auth/login"></Navigate>;
  }



  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRoutes;