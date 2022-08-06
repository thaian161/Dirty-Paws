import './Profile.css';
import profileNav from './images/profileNav.jpg';

export default function TestCard() {
  return (
    <div className="each-profile-container">
      <div className="profile-wrapper">
        <div className="img">{/* {Nav Fun Pattern Background} */}</div>
        <div className="content">
          <img
            src="https://img.freepik.com/premium-vector/cute-puffer-fish-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon_138676-2293.jpg?w=2000"
            alt="aaa"
          />
          <h2>
            Mr Dex The Fish <span>21</span>
          </h2>
          <p className="profile-city">Toronto</p>

          <div className="profile-footer">
            <div>
              <p className="badge">BAGDE</p>
            </div>

            <div>
              <p className="bio">Bio</p>
              <p className="bio-description">Blob blob blob</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
