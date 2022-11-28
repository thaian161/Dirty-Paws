import './About.css';

import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
  min-height: 32rem;
  max-height: 33rem;

  min-width: 20rem;
  max-width: 20rem;

  border-radius: 1.5rem;
  overflow: hidden;

  margin: 1rem;
  background-color: #fffdfdaa;

  text-align: center;
`;

function TeamMember({
  profilePicture,
  email,
  teamMemberName,
  jobTitle,
  bio,
  gitHubURL,
  gitHubUserName,
  linkedInURL,
  linkedInUserName,
  yNumber,
  sNumber,
}) {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 40,
    yNumber(x),
    sNumber,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <div className="about-top">
        <img
          className="about-pic"
          src={profilePicture}
          alt="front about dev-wrapper"
        />
      </div>
      <div className="content">
        <a href={`mailto: ${email}`}>
          <h2 className="about-name">{teamMemberName} </h2>
          <p className="dev">{jobTitle}</p>
        </a>
      </div>
      <div className="about-bio">
        <p className="about__bio">{bio}</p>
      </div>
      <div className="about-footer ann">
        <div className="city">
          <p className="about-title">
            <a href={`https://github.com/${gitHubURL}`}>
              <img
                className="github"
                src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">{gitHubUserName}</p>
        </div>
        <div>
          <p className="about-title">
            <a href={`https://www.linkedin.com/in/${linkedInURL}`}>
              <img
                className="linkedIn"
                src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">{linkedInUserName}</p>
        </div>
      </div>
    </Container>
  );
}

export default TeamMember;
