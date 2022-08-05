import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

import PurpleCat from './lotties/PurpleCat';

function App() {
  const [state, setState] = useState('default state');


  useEffect(() => {
      axios.get('/users')
      .then((res) => {
      setState(res.data[0]); //grab data with all[0].data
      console.log('after the axios request:  ', state);
    })
  }, [])



  return (
    <div className="App">
      <PurpleCat />
      <p>{state.name}</p>
      <p>{state.address}</p>

    </div>
  );
}

export default App;
