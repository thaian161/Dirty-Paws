import './About.css';
import dan from './images/Dan.png';
import TeamMember from './TeamMember';

export default function Dan(props) {
  return (
    <div className="about-container">
      <TeamMember
        profilePicture={dan}
        email="drdlindeblom@gmail.com"
        teamMemberName="Dan Lindeblom"
        jobTitle="Full Stack Developer"
        bio={
          <p>
            Sports fanatic who has a passion for coding. Loves working with data
            and statistics.
            <br />
            Wishes he could design an app that would help the Leafs win the Cup
          </p>
        }
        gitHubURL="DLindeblom"
        gitHubUserName="DLindeblom"
        linkedInURL="dan-lindeblom-6039a1233/"
        linkedInUserName="dan-lindeblom"
        yNumber={(x) => (x - window.innerWidth / 2) / 20} //hovering effect requires different number depending on the postion of the glass card
        sNumber={1.1}
      />
    </div>
  );
}
