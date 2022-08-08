import './MatchProfile.css';
import yes from './images/yes.png';
import noSoSad from './images/noSoSad.png';
import Matchhh from '../../lotties/Matchhh';
import { Link } from 'react-router-dom';

export default function MatchProfile() {
  return (
    <div className="container">
      <div className="match-wrapper">
        <div className="profile-match">
          <img
            className="match-profile-pic1"
            src="https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg"
            alt="front profile card"
          />

          <img className="love-btn-match" src={yes} alt="yes love me" />

          <img
            className="match-profile-pic2"
            src="https://i.imgur.com/sKdbm4Vh.jpg"
            alt="front profile card"
          />
        </div>

        <div className="content">
          <h2 className="user-name1"> Yassss! </h2>
          <h3 className="user-name">  </h3>
        </div>
        <div className="profile-footer-match">
          <div>
            <button className="profile-title button-chat">
              Send A Message
            </button>
            <br/>
            <Link className="keep-search" to="/">
              KEEP SEARCHING
            </Link>
          </div>
        </div>
        <div className="love-me">
          <button>
            <Matchhh />
          </button>
        </div>
        <div className="empty-bottom-match">.</div>
      </div>
    </div>
  );
}
