import './LandingPage.css';
import an from './images/an.png';

export default function LandingPage() {
  return (
    <section className="home-land" id="homee">
      <div className="homeContent">
        <h2 className="intro-large"> More Than Just A Paws </h2>
        <h3 className="intro-small"> It's Never Too Late To Fall In Love</h3>
        <p className="landing-p">
          One day, someone will walk into your life and make you see why it
          never worked out with anyone else. Finding a paws is a hug highlight,
          with Dirty Paws,you are swiping right on this one. Dirty Paws; more
          than just a dating app. Find Your Paws Today
        </p>
        <br />
        <br />

        <a href="/pawsss">
          <button className="land-btn">Explore More</button>
        </a>
      </div>

      <div className="landing-animation-container">
        <img className="landing-pic" src={an} alt="" />
      </div>
    </section>
  );
}
