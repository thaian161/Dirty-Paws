import './About.css';
import annBui from './images/annBui.png';
import Dan from './images/Dan.png';
import Dex from './images/Dex.png';

export default function About() {


  return (
    <div>
      <section className="home-about">
        <div className="about-wrapper">
          <div className="about-container">
            <div className="dev-wrapper">
              <div className="about-top">
                <img
                  className="about-pic"
                  src={annBui}
                  alt="front about dev-wrapper"
                />
              </div>
              <div className="content">
                <h2 className="about-name"> Ann Bui </h2>
                <p className="dev">Fullstack Web Developer</p>
              </div>
              <div className="about-bio">
                <p className="about__bio">
                  A front-end lover
                  <br />
                  Amateur UX/UI designer.
                  <br />I am passionate about designing and creating products
                  that are user-friendly and visually appealing.
                </p>
              </div>
              <div className="about-footer">
                <div className="city">
                  <p className="about-title">
                    <a href="https://github.com/thaian161">
                      <img
                        className="github"
                        src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">thaian161</p>
                </div>
                <div>
                  <p className="about-title">
                    <a href="https://www.linkedin.com/in/thaian161/">
                      <img
                        className="linkedIn"
                        src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">thaian161</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container">
            <div className="dev-wrapper">
              <div className="about-top">
                <img
                  className="about-pic"
                  src={Dan}
                  alt="front about dev-wrapper"
                />
              </div>
              <div className="content">
                <h2 className="about-name"> Dan Lindeblom </h2>
                <p className="dev">Fullstack Web Developer</p>
              </div>
              <div className="about-footer">
                <div className="city">
                  <p className="about-title">
                    <a href="https://github.com/DLindeblom">
                      <img
                        className="github"
                        src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">DLindeblom</p>
                </div>
                <div>
                  <p className="about-title">
                    <a href="https://www.linkedin.com/in/dan-lindeblom-6039a1233/">
                      <img
                        className="linkedIn"
                        src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">dan-lindeblom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container">
            <div className="dev-wrapper">
              <div className="about-top">
                <img
                  className="about-pic"
                  src={Dex}
                  alt="front about dev-wrapper"
                />
              </div>
              <div className="content">
                <h2 className="about-name"> Declan Davis </h2>
                <p className="dev">Fullstack Web Developer</p>
              </div>
              <div className="about-footer">
                <div className="city">
                  <p className="about-title">
                    <a href="https://github.com/DexTheFish">
                      <img
                        className="github"
                        src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">DexTheFish</p>
                </div>
                <div>
                  <p className="about-title">
                    <a href="https://www.linkedin.com/in/therealdeclandavis/">
                      <img
                        className="linkedIn"
                        src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                        alt="front about dev-wrapper"
                      />
                    </a>
                  </p>
                  <p className="dev">therealdeclandavis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
