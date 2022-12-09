// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div >
        <form className="form-container" autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="enter email"/>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder="enter password"/>
          <button className="btn-login" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
