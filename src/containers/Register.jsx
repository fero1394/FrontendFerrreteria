import React, {useState} from "react";
import firebaseApp from "../firebase/credentials";
import { Navigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword, 
    getAuth, 

} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { async } from "@firebase/util";
import Logo from '../assets/img/logo.png'
import {useAuth} from '../contexts/authContext'
import {useNavigate} from 'react-router-dom'; 

function Register(){

    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);
    const {registrarUsuario} = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
  
    //////////////////////////////////
    
  const handleChange = ({target: {name,value}}) =>
  setUser({...user, [name]: value});
  ///////////////////////////////////////
  const handleSubmit = async  e => {
    e.preventDefault();
    try{
      await registrarUsuario(user.email,user.password);
      navigate('/')
    }catch(error){
      alert('no se pudo registrar')
    }
    }
/////////////////////////////////////////
    return (
      <>
        <div className="div-welcome">
            <img src={Logo} alt="" />
          <h1>Registrate</h1>
        
            <form action="">
                <label htmlFor="email">
                    <input type="email" name="email" placeholder="Registra tu Email" onChange={handleChange}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="password">
                    <input type="password" name="password" placeholder="Registra Password" onChange={handleChange}/>
                </label>
            </form>
            <br/>
            <button onClick={handleSubmit}> Registrarse </button>
            
        </div>
      </>
    );
}


export default Register