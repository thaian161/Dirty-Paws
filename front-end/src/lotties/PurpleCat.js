import Lottie from 'react-lottie';
import purplecat from './purple-cat.json';

const PurpleCat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: purplecat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={450} width={450} />
    </div>
  );
};

export default PurpleCat;
