import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';

import './App.css';

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      Evan's Movie Tracker
      {user
        ?
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element ={<LandingPage user={user} />}/>
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }

    </main>
  );
}


