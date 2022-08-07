import Lottie from 'react-lottie';
import animals from './animals.json';

const Animals = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animals,
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

export default Animals;
