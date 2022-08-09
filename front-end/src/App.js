import './App.css';
import ChatBubble from './lotties/ChatBubble';
import PurpleCat from './lotties/PurpleCat';
import RainbowCat from './lotties/RainbowCat';
import HumanCat from './lotties/HumanCat';
import SexyCat from './lotties/SexyCat';
import Matchhh from './lotties/Matchhh.jsx';

import FrontProfile from './components/profile/FrontProfile';
import Profile from './components/profile/Profile';
import Nav from './components/nav-bar/Nav';
import LandingPage from './components/landing/LandingPage';
import BackProfile from './components/profile/BackProfile';
import MatchProfile from './components/profile/MatchProfile';
import ChatList from './components/chat-page/chatListLeft/ChatList';
import ChatContentItem from './components/chat-page/chatContent/ChatContentItem';
import ChatContent from './components/chat-page/chatContent/ChatContent';
import ChatBody from './components/chat-page/chatBody/ChatBody';
import Chat from './components/chat-page/Chat';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <SexyCat />
      <PurpleCat />
      <RainbowCat />
      <ChatBubble />
      <HumanCat />
      <Matchhh />
      <FrontProfile />
      <BackProfile />
      <MatchProfile />
      <Profile />

      <ChatList />

      <ChatContentItem />
      <ChatContent/>
      <ChatBody/>

      <Chat/> 
    </div>
  );
}

export default App;
