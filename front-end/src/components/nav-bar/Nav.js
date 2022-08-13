import './Nav.css';
import clearLogo from './images/clearLogo.png';
import yes from './images/yes.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav() {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    axios.get('/login/2').then((res) => {
      console.log(res);
    });
  };
  const logoutUser = () => {
    axios.get('/logout').then((res) => {
      console.log(res);
    })
  };

  return (
    <header className="header">
      <div className="logoContent">
        <a href="/" className="logo">
          <img src={clearLogo} alt="" />
        </a>
      </div>

      <nav className="navbar">
        <Link className="nav-btn" to="/pawsss">
          Paws
        </Link>
        <Link className="nav-btn" to="/my-profile">
          My Profile
        </Link>
        <Link className="nav-btn" to="/messages">
          Messages
        </Link>
        <Link className="nav-btn" to="/" onClick={loginUser}>
          Login
        </Link>
        <Link className="nav-btn" to="/" onClick={logoutUser}>
          Logout
        </Link>
      </nav>
    </header>
  );
}
