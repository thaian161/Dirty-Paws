import './App.css';
import ChatBubble from './lotties/ChatBubble';
import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';
import HumanCat from './lotties/HumanCat';
import SexyCat from './lotties/SexyCat';

import FrontProfile from './components/profile/FrontProfile';
import Nav from './components/nav-bar/Nav';
import LandingPage from './components/landing/LandingPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />

      <SexyCat/>
     

      <PurpleCat />
      <RainbowCat />
      <ChatBubble />

      <HumanCat/>

 

      <FrontProfile />
    </div>
  );
}

export default App;
