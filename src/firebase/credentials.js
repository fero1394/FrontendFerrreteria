// acá colocas las credenciales de Firebase


// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";


// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyBZAXYOXTsKj1Z7KWCw0AMYJQfbvOZHlWQ",
  authDomain: "reactfirebaseferreteria.firebaseapp.com",
  projectId: "reactfirebaseferreteria",
  storageBucket: "reactfirebaseferreteria.appspot.com",
  messagingSenderId: "362859139713",
  appId: "1:362859139713:web:951d822d12f5ef7c807380"
};

// Inicializamos a Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp