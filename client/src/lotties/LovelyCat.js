import Lottie from 'react-lottie';
import lovelycat from './46864-lovely-cats.json';

const LovelyCat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lovelycat,
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

export default LovelyCat;
