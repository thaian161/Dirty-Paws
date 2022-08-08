import { useState } from 'react';
import FrontProfile from './FrontProfile';
import BackProfile from './BackProfile';

import Carousel from 'react-bootstrap/Carousel';

import './FrontProfile.css';

const fakeData = {
  name: "Sleepy Head",
  bio: "I love going for a walk with my frends and chasing cats at the park",
  treats: 7,
  profile_picture: "https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg",
  age: 26,
  address: "Toronto"
}

export default function Profile() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(fakeData);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <FrontProfile {...data}/>
      </Carousel.Item>
      <Carousel.Item >
        <BackProfile {...data}/>
      </Carousel.Item>
    </Carousel>
  );
}

// to make the Carousel slide auto run, add interval={500} to CarouselItem tag