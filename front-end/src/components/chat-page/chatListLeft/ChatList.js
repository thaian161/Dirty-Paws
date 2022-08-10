import ChatListItem from './ChatListItem';

function ChatList(props) {

  console.log("chatlist props: ", props)
  const userIds = props.userIds;

  const chatListItemArray = userIds.map(id => {
    return <ChatListItem id={id}/>
  })


  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        <h2 className="chatlist__heading"> Messages</h2>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search" required />
          <button className="search-btn">
            <img
              className="mes-icon"
              src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
              alt="search icon"
            />
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {chatListItemArray}
      </div>
    </div>
  );
}

export default ChatList;

// FAKE DATA Object

// allChatUsers = [
//   {
//     image:
//       'https://img.freepik.com/free-vector/cute-dog-bites-bone-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3743.jpg?w=740&t=st=1659775375~exp=1659775975~hmac=bf9c8ab42957127b945b39543036609169019f89d2ba2ccbb1962eaddc600c95',
//     id: 1,
//     name: 'Dex',
//     isOnline: true,
//   },
//   {
//     image:
//       'https://img.freepik.com/free-vector/cute-bulldog-eating-cake-cartoon-vector-illustration-animal-food-concept-isolated-vector-flat-cartoon-style_138676-1923.jpg?w=740&t=st=1659775411~exp=1659776011~hmac=1195698ebba046eb5c2c923b7646a5fa22bdfe9b6a62e2ce6fb45f161b30e6d8',
//     id: 2,
//     name: 'Mia',
//     isOnline: false,
//   },
//   {
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
//     id: 3,
//     name: 'Hamaad Dejesus',
//     active: false,
//     isOnline: false,
//   },
//   {
//     image:
//       'https://img.freepik.com/free-vector/cute-corgi-dog-sleeping-pillow-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4244.jpg?w=740&t=st=1659775491~exp=1659776091~hmac=cb36f6ec0a74a0f4fed34498fa1b98151b51ac4f9e1e64471a7d1b787b19678a',
//     id: 4,
//     name: 'Ann',
//     isOnline: true,
//   },
//   {
//     image:
//       'https://img.freepik.com/free-vector/cute-corgi-running-cartoon-illustration_138676-2052.jpg?w=740&t=st=1659775519~exp=1659776119~hmac=e23bd0fe691177c20d1668dcc39d2ad4c2980d93bc6f6219f0852e8edce1fdac',
//     id: 5,
//     name: 'Dan',
//     isOnline: false,
//   },
//   {
//     image:
//       'https://img.freepik.com/free-vector/cute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg?w=740&t=st=1659775605~exp=1659776205~hmac=6f3bb6a1a1509077f8e40c45851645e41de731de89084b0f753e24c45be50e98',
//     id: 6,
//     name: 'Sexy Boi',
//     isOnline: true,
//   },
// ];
