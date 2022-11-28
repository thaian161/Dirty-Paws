import './About.css';
import dex from './images/Dex.png';
import TeamMember from './TeamMember';

export default function Dex(props) {
  return (
    <div className="about-container">
      <TeamMember
        profilePicture={dex}
        email="dexthefish@gmail.com"
        teamMemberName="Declan Davis"
        jobTitle="Full Stack Developer"
        bio={
          <p>
            Cat lover and mathemagical wizard. Probably outside playing guitar
            or skateboarding around the city. Capable of building super epic web
            applications in the blink of an eye.
          </p>
        }
        gitHubURL="DexTheFish"
        gitHubUserName="DexTheFish"
        linkedInURL="therealdeclandavis"
        linkedInUserName="therealdeclandavis"
        yNumber={(x) => (x - window.innerWidth / 1.2) / 15} //hovering effect requires different number depending on the postion of the glass card
        sNumber={1.11}
      />
    </div>
  );
}
