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
      setUser(user);
    });
  };

  return (
    <header className="header">
      <div className="logoContent">
        <a href="/" className="logo">
          <img src={clearLogo} alt="" />
        </a>
      </div>

      <nav className="navbar">
        {/* 
        <a className="nav-btn" href="#log-in">Sign In</a>
        <a className="nav-btn" href="#sign-up">Sign Up</a>
        <a className="nav-btn" href="#sign-up">Search</a> */}
        <Link className="nav-btn" to="/profile">
          Paws
        </Link>
        <Link className="nav-btn" to="/register">
          My Profile
        </Link>
        <Link className="nav-btn" to="/messages">
          Messages
        </Link>
        <Link className="nav-btn" to="/" onClick={loginUser}>
          Login
        </Link>
        <Link className="nav-btn" to="/#">
          Logout
        </Link>
      </nav>
    </header>
  );
}
