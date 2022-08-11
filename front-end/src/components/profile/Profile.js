import { useState, useEffect } from 'react';
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
  const [data, setData] = useState(fakeData);
  const [mode, setMode] = useState(PROFILE) // show Front/Back by default
  const [myProfile, setMyProfile] = useState(null)

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
      transition(PROFILE);
    });
  };

  const getMyProfile = () => {
    axios.get(`/myprofile`).then((res) => {
      console.log('This is my profile:   ', res.data);
      setMyProfile(res.data[0]);
    });
  };

  useEffect(() => {
     // useEffect will INTENTIONALLY render *twice*. it is not a problem.
     // thats why the console.log from getMyProfile shows up twice.
    getMyProfile();
    getNewUser();
  }, [])

  const swipeRight = () => {
    //new row, update row
    console.log('swiped right!');
    // we want to send the ID of the profile we're viewing
    console.log('the liked user has id:  ', data.id);
    const likedUserId = data.id;
    // GET /matches/likedUserId
    axios.get(`/matches/${likedUserId}`).then(res => {
      console.log('axios request gave us res:  ', res.data);
      if (res.data[0] === 'update row') {
        transition(MATCH);
      }
      if (res.data[0] === 'new row') {
        getNewUser();
      }
    })
  };

  const swipeLeft = () => {
    console.log('swiped left!');
    getNewUser();
  };
 
  const frontAndBack =
    <Carousel style={{height: '40rem', width:'27rem', backgroundColor: 'red'}} activeIndex={index} onSelect={handleSelect} slide={false}>
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
        {mode === MATCH && <MatchProfile {...data} myPicture={myProfile.profile_picture} getNewUser={getNewUser}/>}
      </div>
    </div>
  );
}

// to make the Carousel slide auto run, add interval={500} to CarouselItem tag
/*
PLAN TO IMPLEMENT TRANSITION IN SWIPERIGHT

*/