import './registration.css';

export default function Registration() {
  return (
    <section className="home-land" id="homee">
      <div className="landing-animation-container">
        <img
          className="landing-pic"
          src="https://i.pinimg.com/originals/89/ec/4e/89ec4e1d540d5b04bb5808632413be88.jpg"
          alt=""
        />
      </div>
      <div className="homeContent">
        <div>
          <h2 className="intro-large"> Create Your Profile </h2>
          <form action="/" method="POST">
            <div>
              <h3 className="intro-small">
                To start pawsing, fill out the form below:
              </h3>
            </div>
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
