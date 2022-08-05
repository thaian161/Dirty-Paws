import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

import PurpleCat from './lotties/PurpleCat';

function App() {
  const [state, setState] = useState('default state');


  useEffect(() => {
    Promise.all(
      [axios.get('/users/1')]
      ).then((all) => {
      setState(prev => all[0].data); //grab data with all[0].data
      console.log('after the axios request:  ', state);
    })
  }, [])



  return (
    <div className="App">
      <PurpleCat />
    </div>
  );
}

export default App;
