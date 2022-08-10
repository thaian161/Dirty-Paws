import './BackProfile.css';
import yes from './images/yes.png';
import noSoSad from './images/noSoSad.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BackProfile(props) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get(`/badges/${props.id}`).then((res) => setBadges(res.data));
  }, [props.id]);

  const oneBadge = badges.map((badge) => {
    return (
      <button>
        <img className="user-badge" src={badge.icon} alt="my badge" />
      </button>
    );
  });

  return (
    <div className="container">
      <div className="back-wrapper">
        <div className="profile-top-back">
          <img
            className="back-profile-pic"
            src={props.profile_picture}
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
          {oneBadge}
        </div>
        <div className="empty-bottom-back">.</div>
      </div>
    </div>
  );
}

// <button>
//   <img
//     className="user-badge"
//     src="https://cdn-icons-png.flaticon.com/512/5229/5229380.png"
//     alt="my badge"
//   />
// </button>

