import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import PageLoading from './PageLoading';
import auth from '../firebase.init';

const ProtectedRoute = ({children}) => {
    const {user, isloading} = useAuthState(auth)
    //sendResponse({damn: true});

    if(isloading){
        return <PageLoading/>
    }
    
    if (!user){
        return <Navigate to='/login' />
    }
    return children

};

export default ProtectedRoute;
