import axios from 'axios';
import { useEffect, useState } from 'react';
import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';
import ChatContentItem from './ChatContentItem';

export default function ChatContent(props) {

  const [myUser, setMyUser] = useState({});
  const [newMessage, setNewMessage] = useState("")

  const getMyProfile = () => {
    axios.get('/users/1')
      .then(res => setMyUser(res.data[0]));
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  const sendMessage = () => {
    console.log("sending message: ", newMessage)
    axios.post(`/messages/${props.selected}`, {newMessage})
         .then((res) => console.log(res))
  }

  // props.messages is available, with all the logged-in user's messages
  // props.selected is available, with the 'selected' userid


  const getMessages = () => {
    const messages = [];
    for (const message of props.messages) {
      if (message.sender_id === props.selected || message.receiver_id === props.selected) {
        messages.push(message);
      }

    }
    return messages;
  };

  const messages = getMessages();

  const oneMessage = messages.map(message => {
    return (
      <div className="chat__items" key={message.id}>
        <ChatContentItem
          sender={message.sender_id}
          receiver={message.receiver_id}
          content={message.content}
          users={props.users}
        />
      </div>
    );
  });



  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar picture={myUser.profile_picture} />
            <p> {myUser.name}</p>
          </div>
        </div>
      </div>
      <div className="content__body">
        {oneMessage}
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <form onSubmit={event => {event.preventDefault()}}>
            <input className="input-message" type="text" placeholder="Type a message here" onChange={event => setNewMessage(event.target.value)}/>
          </form>
          <button className="btnSendMsg" id="sendMsgBtn">
            <button className="search-btn">
              <img
                className="mes-icon senddd"
                src="https://cdn-icons-png.flaticon.com/512/6056/6056769.png"
                alt="send message"
                onClick={sendMessage}
              />
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
