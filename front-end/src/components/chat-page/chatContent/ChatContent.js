import Avatar from '../chatListLeft/Avatar';
import './chatContent.css';
import ChatContentItem from './ChatContentItem';

export default function ChatContent() {
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar />
            <p> Sexi Boiiii</p>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          <ChatContentItem />
        </div>

        <div className="chat__items">
          <ChatContentItem />
        </div>
        <div className="chat__items">
          <ChatContentItem />
        </div>

        <div className="chat__items">
          <ChatContentItem />
        </div>

        <div className="chat__items">
          <ChatContentItem />
        </div>

        <div className="chat__items">
          <ChatContentItem />
        </div>

        <div className="chat__items">
          <ChatContentItem />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input className="input-message" type="text" placeholder="Type a message here" />
          <button className="btnSendMsg" id="sendMsgBtn">
            <button className="search-btn">
              <img
                className="mes-icon senddd"
                src="https://cdn-icons-png.flaticon.com/512/6056/6056769.png"
                alt="send message"
              />
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
