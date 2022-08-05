import Lottie from 'react-lottie';
import animationData from './46864-lovely-cats.json';

const LovelyCat =()=>{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
