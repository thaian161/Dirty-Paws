import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PurpleCat from './lotties/PurpleCat';

function App() {
  const [state, setState] = useState('default state');
  
  const getRandomUser = function() {
    axios.get('/users/random')
      .then((res) => {
        setState(res.data); //grab data with all[0].data
        console.log('after the axios request:  ', state);
      });
  }
  

  useEffect(() => {
    getRandomUser();
  }, []);


  return (
    <div className="App">
      <PurpleCat />
      <button onClick={getRandomUser}>NO THANKS! gimme somebody new!</button>
      <p>{state[0].name}</p>
    </div>
  );
}

export default App;
