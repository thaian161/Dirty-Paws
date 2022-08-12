import './registration.css';
import FrontProfile from '../../components/profile/FrontProfile';
import BackProfile from '../../components/profile/BackProfile';

import { useState, useEffect } from 'react';

export default function Registration() {
  //update page title when show case Registration component
  useEffect(() => {
    document.title = 'Update My Profile';
  }, []);

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [city, setCity] = useState()
  const [bio, setBio] = useState()
  const [avatar, setAvatar] = useState()

  const handleChangeName = (event) => {
    
    setName(event.target.value)
  }

  const handleChangeAge = (event) => {

    setAge(event.target.value)
  }

  const handleChangeCity = (event) => {

    setCity(event.target.value)
  }

  const handleChangeBio = (event) => {


    setBio(event.target.value)
  }

  const handleChangeAvatar= (event) => {

    setAvatar(event.target.value)
  }

  if (!name) {
    setName('Sleepy Head')
  }

  if (!age) {
    setAge(18)
  }

  if (!city) {
    setCity("Pupland")
  }

  if (!bio) {
    setBio("I love going for a walk with my frends and chasing cats at the park. woof wooffff")
  }

  if (!avatar) {
    setAvatar('https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg')
  }

  return (
    <section className="register-section">
      <div className="register-wrapper">
        <div>
          <FrontProfile name={name} age={age} address={city} bio={bio} profile_picture={avatar} treats={0} id={3}/>
        </div>

        <div>
          <BackProfile bio={bio} profile_picture={avatar} id={9}/>
        </div>
        <div className="register-form">
          <h2 className="intro-large sign-up"> Update Your Profile </h2>
          <form action="/" method="POST" onSubmit={(event) => {event.preventDefault(); }}>
            <div>
              {/* <!-- NAME --> */}
              <div>
                <label className="landing-p">Name</label>
                <input class="form sign-up" required onChange={handleChangeName}/>
              </div>

              {/* <!-- AGE --> */}
              <div class="form-group">
                <label className="landing-p">Age</label>
                <input class="form sign-up" required onChange={handleChangeAge}/>
              </div>

              {/* <!-- CITY --> */}
              <div class="form-group">
                <label className="landing-p">City</label>
                <input class="form sign-up"required onChange={handleChangeCity}/>
              </div>

              {/* <!-- BIO --> */}
              <div class="form-group">
                <label className="landing-p">Bio</label>
                <input class="form sign-up" required onChange={handleChangeBio}/>
              </div>

              {/* <!-- AVATAR --> */}
              <div class="form-group">
                <label className="landing-p">Avatar</label>
                <input class="form sign-up" required onChange={handleChangeAvatar}/>
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
