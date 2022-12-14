import './chatListLeft.css';
import Avatar from './Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

function ChatListItem(props) {
  // idea: pass a prop 'selected' to indicate which chat item is selected and make the className depend on whether selected === props.userID
  const [user, setUser] = useState('');
  const getUserInfo = () => {
    axios.get(`/users/${props.id}`).then((res) => setUser(res.data[0]));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const activeTime = () => {
    // temporarily, we steal the user.id to assign each user an "active X minutes ago"
    //return (Math.floor(Math.random() * 20) + " mins ago");
    return user.id + ' mins ago';
  };
  // console.log("chat list item : ", props.users)

  // add class SELLECTED to chat-list-item once it gets selected
  const chatListItemClass = classNames('chat-list-item', {
    sellected: props.id === props.selected
  });
  //the className thing did not work yet :"(
  return (
    <div className={chatListItemClass} onClick={() => props.setSelected(user.id)}>
      <Avatar picture={user.profile_picture} />
      <div className="user-chat-content">
        <p className="info-chat-list-item">{user.name || 'sexy boii'}</p>
        <span className="activeTime">{activeTime()}</span>
      </div>
    </div>
  );
}

export default ChatListItem;
