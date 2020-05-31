import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from "firebase";
import Login from './Components/signIn';

firebase.initializeApp({
  apiKey: "AIzaSyD0GPjtW37TOX1QrgqUN-3Al2Rh2cUvnEQ", 
  authDomain: "socialapp-anupam.firebaseapp.com"
})

export default function App() {
  const [isSignedIn, setSignalIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      //this.setState({ isSignedIn: !!user })
      setSignalIn(!!user)
      console.log("user", user)
    })
  })

  return(
    <Login checkSignIn={isSignedIn} config={uiConfig}/>
  );
}