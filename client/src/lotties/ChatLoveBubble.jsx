import Lottie from 'react-lottie';
import chatlovebubble from './chat-love.json';

const ChatLoveBubble = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chatlovebubble,
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

export default ChatLoveBubble;
