import React from 'react'
import {useAuth} from '../contexts/authContext';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {

    const {user, logout,loading} = useAuth();
    const mensaje = 'hello'
    
    const handleLogout = async () =>{
        await logout();    
    }
    if(loading) return(<h1>Loading...</h1>)

  return (
    <div>Dashboard {user.email}
    <button onClick={handleLogout}>LogOut</button>
    <div>
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",}}>
        <Link to={'RegisterCustomer'}>Registar Cliente</Link>|{" "}
        <Link to={'RegisterSupplier'}>Registar Proveedor</Link>|{" "}
        <Link to={'ProductEntry'}>Ingresar Mercancia</Link>|{" "}
        <Link to={'Sale'}>Venta</Link>|{" "}
        <Link to={'ViewInventory'}>Ver Inventario</Link>|{" "}
        </nav>
        <Outlet />
    </div>
    </div>
  )
}
