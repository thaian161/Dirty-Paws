import React, { useEffect, useState } from 'react';
import './chat-body.css';
import ChatList from '../chatListLeft/ChatList';
import ChatContent from '../chatContent/ChatContent';
import axios from 'axios';

export default function ChatBody() {
  const [state, setState] = useState({
    users: [],
    messages: [], 
    matches: []
  })
  const [userIds, setUserIds] = useState([]);
  const [selected, setSelected] = useState(null)


  const getMatchedUserIds = () => {
    axios.get('/matches/ids').then(res => {
      setUserIds(res.data);
    })
  };

  useEffect(() => {
    getMatchedUserIds();
  }, []);

  // const checkTheLengthAndMaybeSetState = function...
  const getMessagesFromDatabase = () => {
    console.log("inside getMessagesFromDatabase");
    axios.get('/messages').then((res) => setState(prev => ({...prev, messages: res.data})))
    // axios.get('/messages').then((res) => checkTheLengthAndMaybeSetState(oldLength)))
    console.log("got data from getMessages")
    // AUTOSCROLL: ~~NOTE~~ unfortunately, because this is tied to setInterval, it is difficult to manually scroll up. This function should check whether axios changed messages.length before attempting to set state.
    var element = document.getElementsByClassName("content__body")[0];
    element.scrollTop = element.scrollHeight;
  }
  const getMessagesEveryFewSeconds = () => {
    console.log('refreshing the messages!');
    setInterval(getMessagesFromDatabase, 2000);
  }


  useEffect(() => {
    console.log("inside the useEffect:    ");
    getMessagesFromDatabase();
    getMessagesEveryFewSeconds();
  }, [])

  const getStateFromDatabase = () => {
    Promise.all([
      axios.get('/users'), 
      axios.get('/matches')
    ]).then((all) => {
      setState(prev => ({...prev, users: all[0].data, matches: all[1].data}))
    })
  }

  useEffect(() => {
    getStateFromDatabase();
  }, [])

  return (
    <div className="main__chatbody">
      <ChatList userIds={userIds} users={state.users} setSelected={setSelected}/>
      <ChatContent getMessagesFromDatabase={getMessagesFromDatabase} getStateFromDatabase={getStateFromDatabase} userIds={userIds} messages={state.messages} selected={selected} users={state.users}/>
    </div>
  )
}
