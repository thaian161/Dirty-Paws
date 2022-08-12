import React, { useEffect, useState } from 'react';
import './chat-body.css';
import ChatList from '../chatListLeft/ChatList';
import ChatContent from '../chatContent/ChatContent';
import axios from 'axios';

export default function ChatBody() {
  
  const [state, setState] = useState({
    messages: []
  })
  const [userIds, setUserIds] = useState([]);
  const [selected, setSelected] = useState(null)
  const [messagesLength, setMessagesLength] = useState(0)


  const getMatchedUserIds = () => { // gets array of logged in users matches
    axios.get('/matches/ids').then(res => {
      setUserIds(res.data);
    })
  };
  
  const scrollDown = () => { //function that scrolls down chat content on new message
    var element = document.getElementsByClassName("content__body")[0];
    element.scrollTop = element.scrollHeight;
  }

  const checkMessagesLength = (res, length) => { // compares the messagesLength to the length of data and updates state if different
    console.log("data:", res.data.length, "messagesLength:  ", length)
    
    if (res.data.length > length) {
      return setMessagesLength(res.data.length),
      setState(prev => ({...prev, messages: res.data}))
    } 
      
    console.log("nothing to update!")
  }

  const getMessagesFromDatabase = () => { //axios call to the database then call to checkMessagesLength after the response
    axios.get('/messages')
         .then((res) => checkMessagesLength(res, messagesLength))
  }
  
  useEffect(() => { // call to getMatchedUserIds
    getMatchedUserIds();
  }, []);

  useEffect(() => { // call to getMessagesFromDatabase, and scrolldown; gets called each time messagesLength is updated
    getMessagesFromDatabase();
    scrollDown()
    const interval = setInterval(() => {
      getMessagesFromDatabase()
    }, 2000)

    return () => clearInterval(interval)
  }, [messagesLength])


  return (
    <div className="main__chatbody">
      <ChatList userIds={userIds} users={state.users} setSelected={setSelected}/>
      <ChatContent getMessagesFromDatabase={getMessagesFromDatabase} userIds={userIds} messages={state.messages} selected={selected} scrollDown={scrollDown} />
    </div>
  )
}
