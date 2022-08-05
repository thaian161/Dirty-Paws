import './App.css';
import ChatBubble from './lotties/ChatBubble';

import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';

import ProfileCard from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <PurpleCat />
      <RainbowCat />
      <ChatBubble />

      <ProfileCard />
    </div>
  );
}

export default App;
