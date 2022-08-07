import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PurpleCat from './lotties/PurpleCat';

function App() {
  const [state, setState] = useState('default state');
  
  const getRandomUser = function() {
    axios.get('/users/random')
      .then((res) => {
        setState(res.data[0]); //grab data with all[0].data
        console.log('after the axios request:  ', state);
      });
  }
  const sendLikeToUser = function() {
    console.log('click click');
  };
  

  useEffect(() => {
    getRandomUser();
  }, []);


  return (
    <div className="App">
      <PurpleCat />
      <button onClick={getRandomUser}>NO THANKS! gimme somebody new!</button>
      <button onClick={sendLikeToUser}>YES PLEASE! I would love to talk to them!</button>
          {Object.values(state).map(x => <p>{x}</p>)}
    </div>
  );
}

export default App;
