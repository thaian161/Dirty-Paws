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
      <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  );
};

export default HumanCat;
