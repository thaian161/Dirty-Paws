import './MatchProfile.css';
import yes from './images/yes.png';
import Matchhh from '../../lotties/Matchhh.jsx';
import { Link } from 'react-router-dom';

export default function MatchProfile(props) {
  return (
    <div className="container">
      <div className="match-wrapper">
        <div className="profile-match">
          <img
            className="match-profile-pic1"
            src={props.profile_picture}
            alt="front profile card"
          />

          <img className="love-btn-match" src={yes} alt="yes love me" />

          <img
            className="match-profile-pic2"
            src={props.myPicture}
            alt="front profile card"
          />
        </div>

        <div className="content">
          <h2 className="user-name1"> Yassss! </h2>
          <h3 className="user-name"> </h3>
        </div>
        <div className="profile-footer-match">
          <div>
            <Link to="/messages" className="im-from-match-profile">
              <button className="profile-title button-chat">
                Send A Message
              </button>
            </Link>

            <br />
            <Link className="keep-search" to="/profile" onClick={props.getNewUser}>
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

// if you click the LINK we should do transition(PROFILE).
//To get the transition function, go into Profile.js and give 'transition' to MatchProfile as a prop. Then we can use it in here as props.transition to transition back to PROFILE