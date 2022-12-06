import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../UserAuthContex/UserAuthContex';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <div>Loading .....</div>;
    }
    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;