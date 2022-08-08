import './BackProfile.css';
import yes from './images/yes.png';
import noSoSad from './images/noSoSad.png';

export default function BackProfile(props) {
  return (
    <div className="container">
      <div className="back-wrapper">
        <div className="profile-top-back">
          <img
            className="back-profile-pic"
            src="https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg"
            alt="front profile card"
          />
        </div>
        <div className="back-content">
          <h2 className="bio">A little bit about me...</h2>
        </div>
        <div className="profile-footer-bio">
          <div>
            <p className="profile-bio">{props.bio}</p>
          </div>
        </div>
        <div className="love-me-not">
          <button> 
            <img
              className="user-badge"
              src="https://cdn-icons-png.flaticon.com/512/5229/5229380.png"
              alt="my badge"
            />
          </button>
        </div>
        <div className="empty-bottom-back">.</div>
      </div>
    </div>
  );
}
