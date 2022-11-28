import './About.css';

import Ann from './Ann.js';
import Dan from './Dan.js';
import Dex from './Dex.js';

export default function About(props) {
  return (
    <>
      <section className="home-about">
        <div className="about-wrapper">
          <Ann />
          <div className="about-container">
            <Dan />
          </div>
          <div className="about-container">
            <Dex />
          </div>
        </div>
      </section>
    </>
  );
}
