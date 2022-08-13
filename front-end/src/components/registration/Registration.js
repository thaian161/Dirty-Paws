import './registration.css';
import FrontProfile from '../../components/profile/FrontProfile';
import BackProfile from '../../components/profile/BackProfile';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Registration() {
  //update page title when show case Registration component
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [city, setCity] = useState()
  const [bio, setBio] = useState()
  const [avatar, setAvatar] = useState()
  const [user, setUser] = useState({})
  
  const getUserFromDatabase = () => {
    axios.get('/myprofile').then(res => {
      setUser(res.data[0]);
      setName(res.data[0].name);
      setAge(res.data[0].age);
      setCity(res.data[0].address);
      setBio(res.data[0].bio);
      setAvatar(res.data[0].profile_picture);
    })
  };
  
  useEffect(() => {
    document.title = 'Update My Profile';
    getUserFromDatabase();
  }, []);

  const handleFormSubmit = (event) => { // update database, update user, reset form
    event.preventDefault();
    axios.post('/users/edit', {name, age, city, bio, avatar, id: user.id}).then((res) => {
      setUser(res.data[0]);
      document.getElementsByClassName("profile-form")[0].reset();      
    })

  }

  const handleChangeName = (event) => {
    setName(event.target.value || user.name)
  }
  const handleChangeAge = (event) => {
    setAge(event.target.value || user.age)
  }
  const handleChangeCity = (event) => {
    setCity(event.target.value || user.address)
  }
  const handleChangeBio = (event) => {
    setBio(event.target.value || user.bio)
  }
  const handleChangeAvatar= (event) => {
    setAvatar(event.target.value || user.profile_picture)
  }

  return (
    <section className="register-section">
      <div className="register-wrapper">
        <div>
          <FrontProfile name={name} age={age} address={city} bio={bio} profile_picture={avatar} treats={user.treats} id={user.id}/>
        </div>

        <div>
          <BackProfile bio={bio} profile_picture={avatar} id={user.id || 9}/>
        </div>
        <div className="register-form">
          <h2 className="intro-large sign-up"> Update Your Profile </h2>
          <form className="profile-form" onSubmit={(event) => {handleFormSubmit(event)}}>
            <div>
              {/* <!-- NAME --> */}
              <div>
                <label className="landing-p">Name</label>
                <input className="form sign-up" onChange={handleChangeName}/>
              </div>

              {/* <!-- AGE --> */}
              <div class="form-group">
                <label className="landing-p">Age</label>
                <input className="form sign-up" onChange={handleChangeAge}/>
              </div>

              {/* <!-- CITY --> */}
              <div class="form-group">
                <label className="landing-p">City</label>
                <input className="form sign-up" onChange={handleChangeCity}/>
              </div>

              {/* <!-- BIO --> */}
              <div class="form-group">
                <label className="landing-p">Bio</label>
                <input className="form sign-up" onChange={handleChangeBio}/>
              </div>

              {/* <!-- AVATAR --> */}
              <div class="form-group">
                <label className="landing-p">Avatar</label>
                <input className="form sign-up" onChange={handleChangeAvatar}/>
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
