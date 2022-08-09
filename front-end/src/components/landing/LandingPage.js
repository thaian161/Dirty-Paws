import './LandingPage.css';
import chatbot from './images/chatbot.png';
import an from './images/an.png';

export default function LandingPage() {
  return (
    <body>
      <section className="home" id="home">
        <div className="homeContent">
          <h2 className="intro-large"> More Than Just A Paws </h2>
          <h3 className="intro-small"> It's Never Too Late To Fall In Love</h3>
          <p className="landing-p">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else. Finding a paws is a hug
            highlight, but with Dirty Paws...you are swiping right on this one.
            Dirty Paws - more than just a dating app. Find Your Paws Today
          </p>
          <br />
          
          <a href="/#">
            <button className="land-btn">Explore More</button>
          </a>
        </div>

        <div className="landing-animation-container">
          <img className="landing-pic" src={an} alt="" />
        </div>
      </section>
    </body>
  );
}
