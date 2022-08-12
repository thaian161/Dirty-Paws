import axios from 'axios';
import { useEffect, useState } from 'react';
import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';
import ChatContentItem from './ChatContentItem';

export default function ChatContent(props) {
  const [myUser, setMyUser] = useState({});
  const [newMessage, setNewMessage] = useState('');

  const getMyProfile = () => {
    console.log(props.messages)
    axios.get(`/users/myuser`).then((res) => setMyUser(res.data[0]));
  };

  useEffect(() => {
    console.log('in the useEffect! get my profile');
    getMyProfile();
  }, []);

  const sendMessage = () => {
    // 1. update db with the new message:
    console.log('sending message: ', newMessage);
    axios.post(`/messages/${props.selected}`, { newMessage }).then(() => {
      // 2. clear the form:
      setNewMessage('');
      // 3. call the function that produced the messages in the first place
      props.getMessagesFromDatabase();
      
    });
  };



  
  // props.messages is available, with all the logged-in user's messages
  // props.selected is available, with the 'selected' userid

  const getMessages = () => {
    // filter messages to selected conversation
    const messages = [];
    for (const message of props.messages) {
      if (
        message.sender_id === props.selected ||
        message.receiver_id === props.selected
      ) {
        messages.push(message);
      }
    }
    return messages;
  };

  const messages = getMessages(); // turn this into state!!

  const oneMessage = messages.map((message, messageIndex) => { // make an array of ChatContentItems
    return (
      <div className="chat__items" key={message.id}>
        <ChatContentItem
          time ={ messages.length - messageIndex}
          sender={message.sender_id}
          receiver={message.receiver_id}
          content={message.content}
          myUser={myUser}
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
      <div className="content__body">{oneMessage}</div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <form
            className="input-message"
            onSubmit={(event) => { event.preventDefault(); sendMessage(); }}
          >
            <input
              className="input-message"
              type="text"
              value={newMessage}
              placeholder="Type a message here"
              onInput={(event) => setNewMessage(event.target.value)}
            />
          </form>
          <button className="btnSendMsg" id="sendMsgBtn">
            <button className="search-btn search">
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
