import Lottie from 'react-lottie';
import humanCat from './human-cat.json';

const HumanCat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: humanCat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={520} width={520} />
    </div>
  );
};

export default HumanCat;
