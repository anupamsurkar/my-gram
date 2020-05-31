import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import AppBar from "./AppBar";
import BottomNav from './BottomNav';
 const Login = (props) => {
  const [bottom, setBottom] = useState(true);

  useEffect(() => {
    let w = window.innerWidth;
    console.log(w);
    
    w < 500 ? setBottom(true) : setBottom(false);
  },[window.innerWidth]);
  return(   
    <div className="App">
      
      {props.checkSignIn ? (
        <span className="">
          {bottom ? <BottomNav/> : <AppBar check="true" click={() => firebase.auth().signOut()}/>}
          
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img
            src={firebase.auth().currentUser.photoURL}
            alt="profile"
          />
        </span>
      ) : (
        <div>
          {bottom ? <BottomNav/> : <AppBar check="false" click={() => {}}/>}
        <div className="login">
          
          <StyledFirebaseAuth 
          uiConfig={props.config}
          firebaseAuth={firebase.auth()}
        />
          </div>
          </div>
      )}
    </div>    
);
}
export default Login;