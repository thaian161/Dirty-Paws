import { useState } from 'react';
import FrontProfile from './FrontProfile';
import BackProfile from './BackProfile';
import MatchProfile from './MatchProfile';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './FrontProfile.css';
import "./Profile.css"
const fakeData = {
  id: 2,
  name: 'Sleepy Head',
  bio: 'I love going for a walk with my frends and chasing cats at the park',
  treats: 7,
  profile_picture:
    'https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg',
  age: 26,
  address: 'Toronto',
};


export default function Profile() {
  const [PROFILE, MATCH] = ["SHOW", "MATCH"]
  
  const [index, setIndex] = useState(0);
  const [data, setData  ] = useState(fakeData);
  const [mode, setMode  ] = useState(PROFILE) // show Front/Back by default
  
  
  const transition = (mode) => {
    setMode(mode);
  }

  const handleSelect = (selectedIndex, e) => {
    //
    setIndex(selectedIndex);
  };
  const getNewUser = () => {
    axios.get('/users/random').then((res) => {
      console.log('received data from axios request: ', res.data[0]);
      setData(res.data[0]);
    });
  };

  const swipeRight = () => {
    console.log('swiped right!');
    // we want to send the ID of the profile we're viewing
    console.log('the liked user has id:  ',data.id);
    const likedUserId = data.id;
    // GET /matches/likedUserId
    axios.get(`/matches/${likedUserId}`).then(res => {
      console.log('axios request gave us res:  ', res.data);
      transition(MATCH);
    })
    // the transition should only happen if a match is 'completed'. UPDATE THE ROUTE so that res.data is convenient
    getNewUser();
  };

  const swipeLeft = () => {
    console.log('swiped left!');
    getNewUser();
  };

  const frontAndBack =         
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <FrontProfile {...data} swipeLeft={swipeLeft} swipeRight={swipeRight} />
      </Carousel.Item>
      <Carousel.Item>
        <BackProfile {...data} />
      </Carousel.Item>
    </Carousel>


  return (
    <div className="complete-profile-container">
      <div className="complete-profile-wrapper">
        {mode === PROFILE && frontAndBack}
        {mode === MATCH && <MatchProfile />}
      </div>
    </div>
  );
}

// to make the Carousel slide auto run, add interval={500} to CarouselItem tag
  /* 
 PLAN TO IMPLEMENT TRANSITION IN SWIPERIGHT

*/