import './Profile.css';
import profileNav from './images/profileNav.jpg';

export default function TestCard2() {
  return (
    <div className="each-profile-container">
      <div className="profile-wrapper">
        <div className="img">{/* {Nav Fun Pattern Background} */}</div>
        <div className="content">
          <img
            src="https://img.freepik.com/premium-vector/cute-dog-corgi-butt-cartoon-icon-illustration_138676-2320.jpg"
            alt="aaa"
          />
          <h2>
            Mr Sleepy Corgi <span>27</span>
          </h2>
          <p className="profile-city">Outside Toronto</p>

          <div className="profile-footer">
            <div>
              <p className="badge">BAGDE</p>
            </div>

            <div>
              <p className="bio">Bio</p>
              <p className="bio-description">Sleepy woop woop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
