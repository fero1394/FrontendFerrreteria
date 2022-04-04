import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../assets/img/logo.png'
import firebaseApp from "../firebase/credentials";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
  
} from 'firebase/auth';
import {useAuth} from '../contexts/authContext'

///////////////////////////////////////
function Login(){
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const {login,loginGoogle,loginGithub } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
///////////////////////////////////////////

  const handleChange = ({target: {name,value}}) =>
  setUser({...user, [name]: value})

//////////////////////////////////////////
const handleSubmit = async  e => {
  e.preventDefault();
  try{
    await login(user.email,user.password);
    navigate('/Dashboard')
  }catch(error){
    setError(setError.message);
  }
}
/////////////////////////////////
const handleLoginGoogle = async e => {
  try{
    await loginGoogle();
    navigate('/Dashboard')
  }catch(error){
    setError(setError.message);
  }
}
///////////////////////////////
const handleLoginGithub = async e => {
  try{
    await loginGithub();
    navigate('/Dashboard')
  }catch(error){
    setError(setError.message);
  }
}

/////////////////////////////////
    return (
      <>
      {error && <p>{error}</p>}
        <div className="div-welcome">
          <img src={Logo} alt="" />
          <h1>Reto final - Client Side</h1>
        
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              </label>
              <label htmlFor="">        
                  <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
              </label>
              <input type="submit" value="Ingresar" />
          </form>
          <nav  style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            ¿ya tienes una cuenta? 
            <Link to="/Register">Registrate</Link>
          </nav>
          <nav>
          <button onClick={handleLoginGoogle} >Login Google</button>
          <button onClick={handleLoginGithub}>Login Github</button>
          </nav>
        </div>
      </>
    );
}


export default Login