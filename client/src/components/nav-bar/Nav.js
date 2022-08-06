import './Nav.css';
import clearLogo from './images/clearLogo.png';
import whiteLogo from './images/whiteLogo.png';

export default function Nav() {
  return (
    <header className="header">
      <div className="logoContent">
        <a href="/" className="logo">
          <img src={clearLogo} alt="" />
        </a>
      </div>

      <nav className="navbar">
        <a className="nav-btn" href="#profile">My Profile</a>
        <a className="nav-btn" href="#log-in">Sign In</a>
        <a className="nav-btn" href="#sign-up">Sign Up</a>
      </nav>
    </header>
  );
}
