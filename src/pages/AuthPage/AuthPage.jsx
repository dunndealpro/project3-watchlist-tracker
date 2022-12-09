import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'


export default function AuthPage({setUser}){
    const [showSignUp, setShowSignUp] = useState(false);
    return(
        <div className="auth-page">
            <h1>Welcome to MyMovie Tracker</h1>
           <h2>Please Login or Sign Up</h2>
            
            <button className="btn-sign-log" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
          { showSignUp ?
              <SignUpForm setUser={setUser} />
              :
              <LoginForm setUser={setUser} />
          }
<a href="https://www.themoviedb.org/" target="_blank">Powered by TMDB.com</a>
        </div>
      
    )
}
