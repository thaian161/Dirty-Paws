import './registration.css';
import FrontProfile from '../../components/profile/FrontProfile';
import BackProfile from '../../components/profile/BackProfile';

export default function Registration() {
  return (
    <section className="register-section">
      <div className="register-wrapper">
        <div>
          <FrontProfile />
        </div>

        <div>
          <BackProfile />
        </div>
        <div className="register-form">
          <h2 className="intro-large"> Create Your Profile </h2>
          <form action="/" method="POST">
            <div>
              {/* <!-- NAME --> */}
              <div>
                <label className="landing-p">Name</label>
                <input class="form-control sign-up" required />
              </div>

              {/* <!-- AGE --> */}
              <div class="form-group">
                <label className="landing-p">Age</label>
                <input class="form-control sign-up" required />
              </div>

              {/* <!-- CITY --> */}
              <div class="form-group">
                <label className="landing-p">City</label>
                <input class="form-control sign-up" required />
              </div>

              {/* <!-- BIO --> */}
              <div class="form-group">
                <label className="landing-p">Bio</label>
                <input class="form-control sign-up" required />
              </div>

              {/* <!-- AVATAR --> */}
              <div class="form-group">
                <label className="landing-p">Avatar</label>
                <input class="form-control sign-up" required />
              </div>
            </div>

            {/* <!-- SUBMIT BUTTON --> */}

            <button type="submit" className="land-btn signup-btn ">
              Let's Paws
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
