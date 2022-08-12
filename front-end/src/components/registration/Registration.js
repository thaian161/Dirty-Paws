import './registration.css';
import FrontProfile from '../../components/profile/FrontProfile';
import BackProfile from '../../components/profile/BackProfile';

import { useState, useEffect } from 'react';

export default function Registration() {
  //update page title when show case Registration component
  useEffect(() => {
    document.title = 'Update My Profile';
  }, []);

  const defaultUser = {
    name: 'Sleepy Head',
    age: 18,
    address: 'Pupland',
    treats: 7,
    profile_picture:
      'https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg',
    bio: 'I love going for a walk with my frends and chasing cats at the park. woof wooffff',
    badges_id: 'https://cdn-icons-png.flaticon.com/512/5229/5229380.png',
  };

  const [user, setUser] = useState(defaultUser);

  return (
    <section className="register-section">
      <div className="register-wrapper">
        <div>
          <FrontProfile {...user} />
        </div>

        <div>
          <BackProfile {...user} />
        </div>
        <div className="register-form">
          <h2 className="intro-large sign-up"> Update Your Profile </h2>
          <form action="/" method="POST">
            <div>
              {/* <!-- NAME --> */}
              <div>
                <label className="landing-p">Name</label>
                <input class="form sign-up" required />
              </div>

              {/* <!-- AGE --> */}
              <div class="form-group">
                <label className="landing-p">Age</label>
                <input class="form sign-up" required />
              </div>

              {/* <!-- CITY --> */}
              <div class="form-group">
                <label className="landing-p">City</label>
                <input class="form sign-up" required />
              </div>

              {/* <!-- BIO --> */}
              <div class="form-group">
                <label className="landing-p">Bio</label>
                <input class="form sign-up" required />
              </div>

              {/* <!-- AVATAR --> */}
              <div class="form-group">
                <label className="landing-p">Avatar</label>
                <input class="form sign-up" required />
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
