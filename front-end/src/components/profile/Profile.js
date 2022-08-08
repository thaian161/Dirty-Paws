import { useState } from 'react';
import FrontProfile from './FrontProfile';
import BackProfile from './BackProfile';

import Carousel from 'react-bootstrap/Carousel';

import './FrontProfile.css';

export default function Profile() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <FrontProfile />
      </Carousel.Item>
      <Carousel.Item >
        <BackProfile />
      </Carousel.Item>
      <Carousel.Item>
        <FrontProfile />
      </Carousel.Item>

      <Carousel.Item>
        <FrontProfile />
      </Carousel.Item>
    </Carousel>
  );
}

// to make the Carousel slide auto run, add interval={500} to CarouselItem tag