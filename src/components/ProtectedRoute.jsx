import userEvent from '@testing-library/user-event'
import React from 'react'
import { useAuth } from '../contexts/authContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const {userEvent,loading} = useAuth();

    if(loading) return <h1>Loading...</h1>
    if(!user) return <Navigate to='/' />

  return (
    <>
        {children}
    </>
  )
}
