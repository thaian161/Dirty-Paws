import Lottie from 'react-lottie';
import humanCat from './human-cat.json';

const HumanCat = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: humanCat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={700} width={700} />
    </div>
  );
};

export default HumanCat;
