import React, { Component, useEffect, useState } from 'react';
import './chat-body.css';
import ChatList from '../chatListLeft/ChatList';
import ChatContent from '../chatContent/ChatContent';
import axios from 'axios';

export default function ChatBody() {
  const [userIds, setUserIds] = useState([]);


  const getMatchedUserIds = () => {
    axios.get('/matches/ids').then(res => {
      setUserIds(res.data);
    })
  };

  useEffect(() => {
    getMatchedUserIds();
  }, []);

  return (
    <div className="main__chatbody">
      <ChatList userIds={userIds}/>
      <ChatContent />
    </div>
  )
}

// export default class ChatBody extends Component {
//   render() {
//     return (
//       <div className="main__chatbody">
//         <ChatList />
//         <ChatContent />
//       </div>
//     );
//   }
// }
