import './App.css';


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
     

      <ChatList />

      <ChatContentItem />
      <ChatContent/>
      <ChatBody/>

      <Chat/> 
    </div>
  );
}

export default App;
