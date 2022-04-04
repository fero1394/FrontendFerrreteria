import React from 'react'
import {getAuth} from 'firebase/auth';
import  {Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

export default function ProtectedRoute({children}) {
  const {user, loading} = useAuth();

  if(loading) return <h1>Loading</h1>

  if(!user) return <Navigate to="/" /> 

    return (
    <>{children}</>
  )
}
