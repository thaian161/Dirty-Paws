import './Treat.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function Treat() {


  function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

  }

  const moveButton = () => {
    console.log("inside moveButton");
    // collect all the divs
    let divs = document.getElementsByClassName('treat');
    // get window width and height
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    console.log(divs.length);
    for (let i = 0; i < divs.length; i++) {

      // shortcut! the current div in the list
      let thisDiv = divs[i];

      // get random numbers for each element
      let randomTop = getRandomNumber(300, winHeight);
      let randomLeft = getRandomNumber(300, winWidth);

      // update top and left position
      console.log("updating the div position");
      // thisDiv.style.top = "800px";
      // thisDiv.style.left = randomLeft + "px";
      setTopState(randomTop);
      setLeftState(randomLeft);
    }

  };

  const randomInterval = () => {

    let num = Math.floor(Math.random() * 5000) + 1000;

    return num;
  };

  let treatCount;

  console.log("setting the state for Treat:  ");
  const [hidden, setHidden] = useState(false);
  const [treats, setTreats] = useState(0);
  const [topState, setTopState] = useState(200);
  const [leftState, setLeftState] = useState(200);
  console.log(leftState);

  const useHideButton = () => {

    // setTreats(treats + 1);

    axios.get('users/treats/1') // update treats in database
    // should these two be chained? Actually, maybe we can grab the treat from the first axios.get by adjusting the route's query to end with RETURNING
    axios.get('/users/1').then((res) => {
      
      setTreats(res.data[0].treats + 1)
    });


    moveButton();
    setHidden(true);

    const timer = setTimeout(() => {
      setHidden(false);
    }, randomInterval());

    return () => clearTimeout(timer);

  };

  return (
    <>
      {!hidden && <button className='treat' style={{top:`${topState}px`, left:`${leftState}px`, position:'absolute'}} onClick={useHideButton}>I'm a treat!</button>}
    </>
  );
}