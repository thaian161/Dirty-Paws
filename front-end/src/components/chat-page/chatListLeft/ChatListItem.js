import './chatListLeft.css';
import Avatar from './Avatar';

function ChatListItem() {
  return (
    <div className="chat-list-item">
      <Avatar />
      <div className="user-chat-content">
        <p className="info-chat-list-item"> Sexi Boi </p>
        <span className="activeTime"> 2 mins ago</span>
      </div>
    </div>
  );
}

export default ChatListItem;
