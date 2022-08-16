import './About.css';
import Dex from './images/Dex.png';


import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

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
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function About() {
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
        <img className="about-pic" src={Dex} alt="front about dev-wrapper" />
      </div>
      <div className="content">
        <h2 className="about-name"> Declan Davis </h2>
        <p className="dev">Fullstack Web Developer</p>
      </div>
      <div className="about-footer">
        <div className="city">
          <p className="about-title">
            <a href="https://github.com/DexTheFish">
              <img
                className="github"
                src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">DexTheFish</p>
        </div>
        <div>
          <p className="about-title">
            <a href="https://www.linkedin.com/in/therealdeclandavis/">
              <img
                className="linkedIn"
                src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">therealdeclandavis</p>
        </div>
      </div>
    </Container>
  );
}
