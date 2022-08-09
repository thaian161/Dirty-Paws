import './Chat.css';
import ChatBody from './chatBody/ChatBody';

function Chat() {
  return (
    <div className="complete-chat-container">
      <div className="complete-chat-wrapper">
        <div className="__main">
          <ChatBody />
        </div>
      </div>
    </div>
  );
}

export default Chat;
