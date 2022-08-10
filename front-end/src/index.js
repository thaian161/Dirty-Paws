import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './components/landing/LandingPage';
import Profile from './components/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav-bar/Nav';
import Chat from './components/chat-page/Chat';
import ChatBubble from './components/chat-bubble/ChatBubble';
import FrontProfile from './components/profile/FrontProfile';
import BackProfile from './components/profile/BackProfile';
import MatchProfile from './components/profile/MatchProfile';

import Treat from './components/treat/Treat';

import RainbowCat from './lotties/RainbowCat';
import Loading from './components/loading/Loading';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* DO NOT REMOVE Nav COMPONENT FROM HERE */}
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/messages" element={<Chat />} />

        {/* testing purposed */}
        <Route path="/test" element={<Loading />} />
        <Route path="/front" element={<FrontProfile />} />
        <Route path="/back" element={<BackProfile />} />
        <Route path="/match" element={<MatchProfile />} />

        <Route path="testing-treat" element={<Treat />} />



      </Routes>
      {/* DO NOT REMOVE ChatBubble COMPONENT FROM HERE */}
      <ChatBubble />
      <Treat />
    </BrowserRouter>
  </React.StrictMode>
);
