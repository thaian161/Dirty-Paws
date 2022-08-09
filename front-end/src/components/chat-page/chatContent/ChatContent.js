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
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input type="text" placeholder="Type a message here" />
          <button className="btnSendMsg" id="sendMsgBtn">
            ✈
          </button>
        </div>
      </div>
    </div>
  );
}
