import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classNames from "classnames";

function ChatContentItem(props) {
  const [picture, setPicture] = useState(null);
  //we already have: sender_id, receiver_id
  // GET users/sender_id

  const scrollDown = () => { //function that scrolls down chat content on new message
    var element = document.getElementsByClassName("content__body")[0];
    element.scrollTop = element.scrollHeight;
  }

  useEffect(() => {
    axios.get(`/users/${props.sender}`).then(res => {
      setPicture(res.data[0].profile_picture);
      console.log("from chat content item")
    })
    scrollDown()
  }, [])



  //want to have: props.profile_picture

  /* ====NOTE==== add className incoming_chat_left to div className="chat__item" for incoming messages LEFT SIDE  

      It should look like this:
  <div className="chat__item incoming_chat_left">
  */
  const chatItemClass = classNames("chat__item", {
    incoming_chat_left: (props.myUser.id !== props.sender) 
  })




  return (
    <div style={{ animationDelay: `0.8s` }} className={chatItemClass}>
      <div className="chat__item__content">
        <div className="chat__msg">{props.content}</div>
        <div className="chat__meta">
          <span>{props.time || 16} mins ago</span>
        </div>
      </div>
      <Avatar picture={picture} />
    </div>
  );
}

export default ChatContentItem;
