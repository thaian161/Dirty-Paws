import Lottie from 'react-lottie';
import chatbubble from './chat-bubble.json';

const ChatBubble = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chatbubble,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default ChatBubble;
