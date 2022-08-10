import './chatListLeft.css';
import Avatar from './Avatar';

function ChatListItem(props) {
  // idea: pass a prop 'selected' to indicate which chat item is selected and make the className depend on whether selected === props.userID
  const activeTime = (max) => {
    return (Math.floor(Math.random() * max) + " mins ago");
  }
  return (
    <div className="chat-list-item">
      <Avatar picture={props.picture}/>
      <div className="user-chat-content">
        <p className="info-chat-list-item">{props.name || "sexy boii"}</p>
        <span className="activeTime">{activeTime(60)}, user ID: {props.id}</span>
      </div>
    </div>
  );
}

export default ChatListItem;
