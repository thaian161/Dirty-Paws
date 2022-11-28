import annBui from './images/annBui.png';
import './About.css';
import TeamMember from './TeamMember';

export default function Ann(props) {
  return (
    <div className="about-container">
      <TeamMember
        profilePicture={annBui}
        email="hello.annbui@gmail.com"
        teamMemberName="Ann Bui"
        jobTitle="Full Stack Developer"
        bio={
          <p>
            A front-end lover
            <br />
            Amateur UX/UI designer.
            <br />I am passionate about
            <br />
            designing and creating products
            <br />
            that are user-friendly
            <br />
            and visually appealing.
          </p>
        }
        gitHubURL="thaian161"
        gitHubUserName="thaian161"
        linkedInURL="thaian161"
        linkedInUserName="thaian161"
        yNumber={(x) => (x - window.innerWidth / 1 / 4) / 20} //hovering effect requires different number depending on the postion of the glass card
        sNumber={1.1}
      />
    </div>
  );
}
