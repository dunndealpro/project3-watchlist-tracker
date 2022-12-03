import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { Routes, Route } from 'react-router-dom';

export default function AuthPage({setUser}){
    const [showSignUp, setShowSignUp] = useState(false);
    return(
        <>
        <h1>Are you authorized, Brah?</h1>
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
        </>
    )
}
