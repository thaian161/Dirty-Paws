import Lottie from 'react-lottie';
import spacedog from './space-dog.json';

const SpaceDog = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spacedog,
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

export default SpaceDog;
