import './App.css';
import ChatBubble from './lotties/ChatBubble';
import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';
import HumanCat from './lotties/HumanCat';
import SexyCat from './lotties/SexyCat';

import EachProfileCard from './components/profile/EachProfileCard';
import Profile from './components/profile/Profile';
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

      <EachProfileCard />

      <Profile />
    </div>
  );
}

export default App;
