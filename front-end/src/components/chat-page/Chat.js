import { useEffect, useState } from 'react';
import './Chat.css';
import ChatBody from './chatBody/ChatBody';

import RainbowCat from '../../lotties/RainbowCat';

function Chat() {
  const [showFlyingCat, setFlyingCat] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setFlyingCat(false);
    }, 10000);
  }, []);

  return (
    <>
      <div className="complete-chat-container">
        <div className="complete-chat-wrapper">
          {showFlyingCat ? (
            <div className="flyingCat">
              <RainbowCat />
            </div>
          ) : (
            <></>
          )}

          <div className="__main">
            <ChatBody />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
