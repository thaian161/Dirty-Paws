import './LandingPage.css';
import HumanCat from '../../lotties/HumanCat';
import ChatBubble from '../../lotties/ChatBubble';
import PurpleCat from '../../lotties/PurpleCat';
import Animals from '../../lotties/Animals';
import SpaceDog from '../../lotties/SpaceDog';
import ChatLoveBubble from '../../lotties/ChatLoveBubble';

export default function LandingPage() {
  return (
    <body>
      <section className="home" id="home">
        <article>
          <div className="homeContent">
            <h3 className="intro-large"> Looking For Your Soulmate? </h3>
            <p className="intro-small"> Ready To Get Your Paws Dirty</p>
            <p>
              I need some dummy content to fill this section for the sake of my
              design halp halp halp halp halp halp halp halp halp halp halp halp
              halp halp halp halp halp halp
            </p>
            <a href="/#">
              <button className="land-btn">explore more</button>
            </a>
          </div>

          <div className="landing-animation-container">
            <div>
              <HumanCat />
            </div>
          </div>
        </article>
        <div className="chat-box">
          <ChatLoveBubble />
        </div>
      </section>
    </body>
  );
}
