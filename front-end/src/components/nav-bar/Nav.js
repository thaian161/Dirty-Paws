import './Nav.css';
import clearLogo from './images/clearLogo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const profileData = await axios.get('/myprofile')
    setUser(profileData.data[0]);
  }

  const loginUser = async () => {
    try {
      await axios.get('/login/11')
      const profileData = await axios.get('/myprofile')
      setUser(profileData.data[0]);
    }
    catch(error) {
      console.log("it broke. error:  ", error);
    }
  };

  const logoutUser = () => {
    axios.get('/logout').then((res) => {
      console.log(res);
      setUser(null);
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
        <Link className="nav-btn" to="/about">
          About
        </Link>
        <Link className="nav-btn" to="/pawsss">
          Paws
        </Link>
        <Link className="nav-btn" to="/my-profile">
          My Profile
        </Link>
        <Link className="nav-btn" to="/messages">
          Messages
        </Link>
        {!user && (
          <Link className="nav-btn" to="/" onClick={loginUser}>
            Login
          </Link>
        )}
        {user && (
          <Link className="nav-btn" to="/" onClick={logoutUser}>
            Logout
          </Link>
        )}
      </nav>
      <div className="my-photo-on-nav">
        {user ? (
          <img className="photo-nav" src={user.profile_picture} alt="" />
        ) : (
          <img
            className="photo-nav"
            src="https://media.istockphoto.com/vectors/cute-cat-waving-paw-cartoon-vector-illustration-vector-id1218481548?k=20&m=1218481548&s=170667a&w=0&h=Ie9thBvAdFGvKdE078wOAoWlJzdM4_sv3q9q6uitwJI="
            alt=""
          />
        )}
      </div>
    </header>
  );
}
