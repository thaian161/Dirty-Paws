import './Nav.css';
import clearLogo from './images/clearLogo.png';
// import whiteLogo from './images/whiteLogo.png';
// import match from './images/match.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav() {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    axios.get('/login/1').then((res) => {
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

        <Link className="nav-btn" to="/">
          About
        </Link>
        <Link className="nav-btn" to="/profile">
          My Profile
        </Link>
        <Link className="nav-btn" to="/messages">
          Messenger
        </Link>
        <Link className="nav-btn" to="/#">
          Sign-up
        </Link>
        <Link className="nav-btn" to="/" onClick={loginUser}>
          Login
        </Link>
        <Link className="nav-btn" to="/#">
          DarkMode
        </Link>
      </nav>
    </header>
  );
}
