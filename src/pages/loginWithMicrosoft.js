import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import microsoft_logo from "../assets/img/microsoft.png";
import "../assets/css/Login.css";
import 'firebase/compat/auth';
import { useNavigate } from "react-router-dom";



// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXnRir_ctl0PtamFbaQ51Q0WleKgEO5yU",
    authDomain: "mlsclasses.firebaseapp.com",
    projectId: "mlsclasses",
    storageBucket: "mlsclasses.appspot.com",
    messagingSenderId: "916013180188",
    appId: "1:916013180188:web:a06da5128c0e502df1c6d9",
    measurementId: "G-VCS563YQD2",
    databaseURL: "https://mlsclasses-default-rtdb.firebaseio.com/"
  };
firebase.initializeApp(firebaseConfig);

const MicrosoftLogin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleMicrosoftLogin = async () => {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      setUser(result.user);
      console.log(JSON.stringify(result.user))
      sessionStorage.setItem("user", JSON.stringify(result.user));
      navigate("/portal");
    } catch (error) {
      console.error('Microsoft login error:', error);
    }
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div>
      <button
            onClick={handleMicrosoftLogin}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300"
          >
            <img src={microsoft_logo} style={{width:"25px"}} alt='microsoft logo'/>
            &nbsp;&nbsp;&nbsp; Login with Microsoft
          </button>
    </div>
  );
};

export default MicrosoftLogin;
