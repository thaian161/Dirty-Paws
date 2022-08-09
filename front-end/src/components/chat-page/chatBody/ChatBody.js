import React, { Component } from 'react';
import './chat-body.css';
import ChatList from '../chatListLeft/ChatList';
import ChatContent from '../chatContent/ChatContent';

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
    );
  }
}
