import './App.css';
import ChatBubble from './lotties/ChatBubble';

import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';

import EachProfileCard from './components/profile/EachProfileCard';

function App() {
  return (
    <div className="App">
      <PurpleCat />
      <RainbowCat />
      <ChatBubble />

      <EachProfileCard />
    </div>
  );
}

export default App;
