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
  console.log(selected)


  const getMatchedUserIds = () => {
    axios.get('/matches/ids').then(res => {
      setUserIds(res.data);
    })
  };

  useEffect(() => {
    getMatchedUserIds();
  }, []);

  useEffect(() => {
    Promise.all([
      axios.get('/users'), 
      axios.get('/messages'), 
      axios.get('/matches')
    ]).then((all) => {
      setState(prev => ({...prev, users: all[0].data, messages: all[1].data, matches: all[2].data}))
    })
  }, [])  

  return (
    <div className="main__chatbody">
      <ChatList userIds={userIds} users={state.users} setSelected={setSelected}/>
      <ChatContent userIds={userIds} messages={state.messages} selected={selected} users={state.users}/>
    </div>
  )
}
