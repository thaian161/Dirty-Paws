import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';
import React, {useState} from 'react';
import axios from 'axios';

function ChatContentItem(props) {
  const [picture, setPicture] = useState(null);
  //we already have: sender_id, receiver_id
  // GET users/sender_id
  axios.get(`/users/${props.sender}`).then(res => {
    setPicture(res.data[0].profile_picture);
  })
  //want to have: props.profile_picture
  
  return (
    <div style={{ animationDelay: `0.8s` }} className="chat__item">
      <div className="chat__item__content">
        <div className="chat__msg">{props.content}</div>
        <div className="chat__meta">
          <span>16 mins ago</span>
        </div>
      </div>
      <Avatar picture={picture}/>
    </div>
  );
}

export default ChatContentItem;
