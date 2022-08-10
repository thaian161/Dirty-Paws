import './chatListLeft.css';
import Avatar from './Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ChatListItem(props) {
  // idea: pass a prop 'selected' to indicate which chat item is selected and make the className depend on whether selected === props.userID
  const [user, setUser] = useState("")
  console.log("props passed to chatlistitem: ",props )
  const getUserInfo = () => {
    axios.get(`/users/${props.id}`)
         .then((res) => setUser(res.data[0]))
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const activeTime = (max) => {
    return (Math.floor(Math.random() * max) + " mins ago");
  }
  // console.log("chat list item : ", props.users)

  
  return (
    <div className="chat-list-item" onClick={() => props.setSelected(user.id)}>
      <Avatar picture={user.profile_picture}/>
      <div className="user-chat-content">
        <p className="info-chat-list-item">{user.name || "sexy boii"}</p>
        <span className="activeTime">{activeTime(60)}, user ID: {user.id}</span>
      </div>
    </div>
  );
}

export default ChatListItem;
