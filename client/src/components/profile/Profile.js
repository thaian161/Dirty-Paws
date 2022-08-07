import { Fragment, useState } from 'react';
import EachProfileCard from './EachProfileCard';
import TestCard from './TestCard';
import TestCard2 from './TestCard2';
import Carousel from 'react-bootstrap/Carousel';
import Nav from '../nav-bar/Nav';
import './Profile.css';

export default function Profile() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <Nav />
      <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
        <Carousel.Item>
          <EachProfileCard />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <TestCard />
        </Carousel.Item>
        <Carousel.Item>
          <TestCard2 />
        </Carousel.Item>

        <Carousel.Item>
          <EachProfileCard />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}
