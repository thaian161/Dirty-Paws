import chatbot from './images/chatbot.png';
import './ChatBubble.css';

export default function ChatBubble() {
  return (
    <div className="chat-box">
      <a href="/messages" className="logo-chatbot">
        <img src={chatbot} alt="" />
      </a>
    </div>
  );
}
