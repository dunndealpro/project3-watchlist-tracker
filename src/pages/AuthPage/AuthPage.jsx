import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'
// import { Routes, Route } from 'react-router-dom';

export default function AuthPage({setUser}){
    const [showSignUp, setShowSignUp] = useState(false);
    return(
        <div className="auth-page">
            Are you authorized, Brah?
            <button className="btn-sign-log" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
          { showSignUp ?
              <SignUpForm setUser={setUser} />
              :
              <LoginForm setUser={setUser} />
          }

        </div>
      
    )
}
