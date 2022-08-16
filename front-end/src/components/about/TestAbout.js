import React from 'react';
import profile from './images/annBui.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import './About.css';

const Container = styled(animated.div)`
  min-height: 32rem;
  max-height: 33rem;

  min-width: 20rem;
  max-width: 20rem;

  background-color: transparent;
  border-radius: 2rem;
  overflow: hidden;

  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.491);

  text-align: center;
`;

const StyledImg = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  padding: 0;
  height: 10rem;
  width: 10rem;
  border-radius: 15rem;
  border: solid 1px white;
  background-color: #4f7fbdeb;
`;

const StyledH2 = styled.h2`
  font-family: roboto mono;
  font-weight: 900;
  -webkit-text-stroke: 1px #204a80;
  text-shadow: #b5cae5 3px 3px;
  color: #406ca6;
  font-size: 2rem;
  font-weight: 700;
`;

const StyledP = styled.p`
  font-family: roboto;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #406ca6;
`;

const StyledH3 = styled.h3`
  font-family: Roboto Mono;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 900;
  color: #646464e7;
  -webkit-text-stroke: 0.3px #646464e7;
  line-height: 1.3rem;
  padding: 1rem;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GlassCard = () => {
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
      <StyledImg src={profile} />
      <StyledH2> Ann Bui</StyledH2>
      <StyledP>Fullstack Web Developer</StyledP>
      <StyledH3>
        A front-end lover
        <br />
        Amateur UX/UI designer.
        <br />I am passionate about designing and creating products that are
        user-friendly and visually appealing.
      </StyledH3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StyledImg
          className="github"
          src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
        />
        <StyledImg
          className="linkedIn"
          src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
        />
        <StyledP>thaian161</StyledP>
        <StyledP>thaian161</StyledP>
      </div>
    </Container>
  );
};

export default GlassCard;
