import './chatContent.css';
import Avatar from '../chatListLeft/Avatar';
import ChatContentItem from './ChatContentItem';

export default function ChatContent() {
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" />
            <p>Sexi Boi</p>
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
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            // INPUT also go with onChange and Value
            // onChange={}
            // value={}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <img className="mes-icon"
              src="https://cdn-icons-png.flaticon.com/512/8016/8016417.png"
              alt="send message icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
