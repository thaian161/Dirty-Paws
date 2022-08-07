import './LandingPage.css';
import HumanCat from '../../lotties/HumanCat';
// import ChatBubble from '../../lotties/ChatBubble';
// import PurpleCat from '../../lotties/PurpleCat';
// import Animals from '../../lotties/Animals';
// import SpaceDog from '../../lotties/SpaceDog';
// import ChatLoveBubble from '../../lotties/ChatLoveBubble';
import chatbot from './images/chatbot.png';

export default function LandingPage() {
  return (
    <body>
      <section className="home" id="home">
        <div className="landing-animation-container">
          <HumanCat />
        </div>
        
        <div className="homeContent">
          <h2 className="intro-large"> More Than Just A Paws </h2>
          <h3 className="intro-small"> It's Never Too Late To Fall In Love</h3>
          <p className="landing-p">
            Talking to another paws makes being single fun and rewarding. One
            day, someone will walk into your life and make you see why it never
            worked out with anyone else. Finding a paws is a hug highlight, but
            with Dirty Paws...you are swiping right on this one.
            <br />
            Dirty Paws - more than just a dating app. Find Your Paws Today
          </p>
          <a href="/#">
            <button className="land-btn">Explore More</button>
          </a>
        </div>
      </section>
      <div className="chat-box">
        <a href="/" className="logo-chatbot">
          <img src={chatbot} alt="" />
        </a>
      </div>
    </body>
  );
}
