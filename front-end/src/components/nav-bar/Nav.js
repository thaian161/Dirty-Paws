import './Nav.css';
import clearLogo from './images/clearLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
      <div className="my-photo-on-nav">
        <img
          className="photo-nav"
          src="https://img.freepik.com/free-vector/cute-dog-bites-bone-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3743.jpg?w=740&t=st=1659775375~exp=1659775975~hmac=bf9c8ab42957127b945b39543036609169019f89d2ba2ccbb1962eaddc600c95"
          alt=""
        />
      </div>
    </header>
  );
}
