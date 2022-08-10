import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';

function ChatContentItem(props) {
  //want to have: props.profile_picture
  return (
    <div style={{ animationDelay: `0.8s` }} className="chat__item">
      <div className="chat__item__content">
        <div className="chat__msg">{props.content}</div>
        <div className="chat__meta">
          <span>16 mins ago</span>
        </div>
      </div>
      <Avatar />
    </div>
  );
}

export default ChatContentItem;
