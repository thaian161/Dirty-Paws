import { useEffect, useState } from 'react';
import './Chat.css';
import ChatBody from './chatBody/ChatBody';
import Loading from '../loading/Loading';

function Chat() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3800);
  // }, []);

  return (
    <>
     
      <div className="complete-chat-container">
        <div className="complete-chat-wrapper">
          <div className="__main">
            <ChatBody />
          </div>
        </div>
      </div>

      
        <Loading/>
      
    </>
  );
}

export default Chat;
