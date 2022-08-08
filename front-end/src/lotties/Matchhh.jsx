import Lottie from 'react-lottie';
import matchhh from './matchhh.json';

const Matchhh = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: matchhh,
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

export default Matchhh;
