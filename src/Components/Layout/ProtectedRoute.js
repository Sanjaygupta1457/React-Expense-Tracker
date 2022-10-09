import React from 'react'
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../../Context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
     const {user} = useUserAuth();

    console.log("Check user in Private: ",user);
    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
    // return loggedIn ? children : <Navigate to="/" />;
}
 
export default ProtectedRoute