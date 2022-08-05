import './Profile.css';
import profileNav from './images/profileNav.jpg';

export default function EachProfileCard() {
  return (
    <div className="each-profile-container">
      <div className="profile-wrapper">
        <div className="img">{/* {nav image} */}</div>
        <div className="content">
          <img
            src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000"
            alt="aaa"
          />
          <h2>
            Ms Meow Meow <span>19</span>
          </h2>
          <p>Orlando</p>

          <div className="profile-footer">
            <div>
              <p className="badge">BAGDE</p>
            </div>

            <div>
              <p className="bio">Bio</p>
              <p>Meow meow meow meow meow meow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
