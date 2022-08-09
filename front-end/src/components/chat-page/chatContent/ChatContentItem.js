import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';

function ChatContentItem() {
  return (
    <div style={{ animationDelay: `0.8s` }} className="chat__item">
      <div className="chat__item__content">
        <div className="chat__msg">Hello there, nice to meet youuuu</div>
        <div className="chat__meta">
          <span>16 mins ago</span>
        </div>
      </div>
      <Avatar />
    </div>
  );
}

export default ChatContentItem;
