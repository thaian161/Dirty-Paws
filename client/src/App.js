import './App.css';
import ChatBubble from './lotties/ChatBubble';

import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';

import EachProfileCard from './components/profile/EachProfileCard';
import Profile from './components/profile/Profile';
import Nav from './components/nav-bar/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <PurpleCat />
      <RainbowCat />
      <ChatBubble />

      <EachProfileCard />

      <Profile />
    </div>
  );
}

export default App;
