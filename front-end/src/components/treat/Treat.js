import './Treat.css';
import { React, useState } from 'react';
import axios from 'axios';
import treatsound from './assets/treatsound.wav';

const arrTreatPics = [
  'https://cdn-icons-png.flaticon.com/512/877/877132.png',

  'https://cdn-icons-png.flaticon.com/512/784/784164.png',

  'https://cdn-icons-png.flaticon.com/512/1303/1303542.png',

  'https://cdn-icons-png.flaticon.com/512/3713/3713576.png',

  'https://cdn-icons-png.flaticon.com/512/1152/1152414.png?w=740&t=st=1660166877~exp=1660167477~hmac=9a4cc780d950df42beeb7c19c87167ac81b9d7e19b371d955acbcaadb9d4fc51',

  'https://cdn-icons-png.flaticon.com/512/1012/1012677.png',

  'https://cdn-icons-png.flaticon.com/512/1130/1130964.png',

  'https://cdn-icons-png.flaticon.com/512/877/877133.png?w=740&t=st=1660166939~exp=1660167539~hmac=c9864deaf307629255b5049da6825ca737db3e26ff92aeb407c6c6e3066232ac',

  'https://cdn-icons-png.flaticon.com/512/720/720898.png?w=740&t=st=1660167068~exp=1660167668~hmac=3737c9f1987b258d2ae838449f702a5132eaef7f2e3e29506a8959ad966f401e',

  'https://cdn-icons-png.flaticon.com/512/5793/5793514.png',

  'https://cdn-icons-png.flaticon.com/512/5976/5976253.png',

  'https://cdn-icons-png.flaticon.com/512/3169/3169657.png',

  'https://cdn-icons-png.flaticon.com/512/8269/8269439.png',

  'https://cdn-icons-png.flaticon.com/512/8242/8242536.png',

  'https://cdn-icons-png.flaticon.com/512/1390/1390264.png',

  'https://cdn-icons.flaticon.com/png/512/1650/premium/1650579.png?token=exp=1660841094~hmac=ecab561a8a30ed89daca8cd3ffdb8f9b',

  'https://cdn-icons-png.flaticon.com/512/5002/5002251.png',

  'https://cdn-icons-png.flaticon.com/512/5389/5389413.png',

  'https://cdn-icons-png.flaticon.com/512/1390/1390288.png',

  'https://cdn-icons-png.flaticon.com/512/3713/3713222.png',

  'https://cdn-icons-png.flaticon.com/512/2641/2641244.png',

  'https://cdn-icons-png.flaticon.com/512/4509/4509571.png',
];

function playTreatSound() {
  new Audio(treatsound).play();
}

export default function Treat() {
  const getRandomTreatPicture = () => {
    // choose a random index and use it to change treatPicture
    const randomTreatIndex = Math.floor(Math.random() * arrTreatPics.length);
    setTreatPicture(arrTreatPics[randomTreatIndex]);
  };
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const randomInterval = () => {
    let num = Math.floor(Math.random() * 8000) + 3000;
    return num;
  };

  const [hidden, setHidden] = useState(false);
  const [treats, setTreats] = useState(0);
  const [topState, setTopState] = useState(
    getRandomNumber(0.25 * window.innerHeight, 0.75 * window.innerHeight)
  );
  const [leftState, setLeftState] = useState(
    getRandomNumber(0.25 * window.innerWidth, 0.75 * window.innerWidth)
  );
  const [treatPicture, setTreatPicture] = useState(arrTreatPics[0]);

  const moveButton = () => {
    let randomTop = getRandomNumber(
      0.25 * window.innerHeight,
      0.75 * window.innerHeight
    );
    let randomLeft = getRandomNumber(
      0.25 * window.innerWidth,
      0.75 * window.innerWidth
    );
    setTopState(randomTop);
    setLeftState(randomLeft);
    getRandomTreatPicture();
  };

  const hideTreatHandler = () => {
    playTreatSound();
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
          onClick={hideTreatHandler}
        >
          <img className="treat-button" src={treatPicture} alt="treat" />
        </button>
      )}
    </>
  );
}
