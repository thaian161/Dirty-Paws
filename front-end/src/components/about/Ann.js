import annBui from './images/annBui.png';
import './About.css';
import TeamMember from './TeamMember';

export default function Ann(props) {
  return (
    <div className="about-container">
      <TeamMember
        profilePicture={annBui}
        teamMemberName="Ann Bui"
        jobTitle="Full Stack Developer"
        bio="A front-end lover, Amateur UX/UI designer.I am passionate about designing and creating products that are user-friendly and visually appealing."
        gitHubURL="thaian161"
        gitHubUserName="thaian161"
        linkedInURL="thaian161"
        linkedInUserName="thaian161"
      />
    </div>
  );
}
