import './Treat.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function Treat() {
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const moveButton = () => {
    console.log('inside moveButton');
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
      console.log('updating the div position');
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

  console.log('setting the state for Treat:  ');
  const [hidden, setHidden] = useState(false);
  const [treats, setTreats] = useState(0);
  const [topState, setTopState] = useState(200);
  const [leftState, setLeftState] = useState(200);
  console.log(leftState);

  const useHideButton = () => {
    // setTreats(treats + 1);

    axios.get('users/treats/1'); // update treats in database
    // should these two be chained? Actually, maybe we can grab the treat from the first axios.get by adjusting the route's query to end with RETURNING
    axios.get('/users/1').then((res) => {
      setTreats(res.data[0].treats + 1);
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
      {!hidden && (
        <button
          className="treat"
          style={{
            top: `${topState}px`,
            left: `${leftState}px`,
            position: 'absolute',
          }}
          onClick={useHideButton}
        >
          <img
            className="treat-button"
            src="https://cdn-icons-png.flaticon.com/512/5793/5793514.png"
            alt="treat"
          />
        </button>
      )}
    </>
  );
}
/*
Array of treat img:

https://cdn-icons-png.flaticon.com/512/4787/4787142.png

https://cdn-icons-png.flaticon.com/512/877/877132.png

https://cdn-icons-png.flaticon.com/512/784/784164.png

https://cdn-icons-png.flaticon.com/512/1303/1303542.png

https://cdn-icons-png.flaticon.com/512/3713/3713576.png

https://cdn-icons-png.flaticon.com/512/1152/1152414.png?w=740&t=st=1660166877~exp=1660167477~hmac=9a4cc780d950df42beeb7c19c87167ac81b9d7e19b371d955acbcaadb9d4fc51

https://cdn-icons-png.flaticon.com/512/1012/1012677.png

https://cdn-icons-png.flaticon.com/512/1130/1130964.png

https://cdn-icons-png.flaticon.com/512/877/877133.png?w=740&t=st=1660166939~exp=1660167539~hmac=c9864deaf307629255b5049da6825ca737db3e26ff92aeb407c6c6e3066232ac

https://cdn-icons-png.flaticon.com/512/877/877132.png?w=740&t=st=1660166963~exp=1660167563~hmac=c247710597e9f376201e86357d2d9d2abed5936d531f4f36f469a9bb8070422f

https://cdn-icons-png.flaticon.com/512/720/720898.png?w=740&t=st=1660167068~exp=1660167668~hmac=3737c9f1987b258d2ae838449f702a5132eaef7f2e3e29506a8959ad966f401e

https://cdn-icons-png.flaticon.com/512/5793/5793514.png

*/
