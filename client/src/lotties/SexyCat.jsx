import Lottie from 'react-lottie';
import sexyCat from './sexy-cat.json';

const SexyCat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sexyCat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={450}
        width={450}
      />
    </div>
  );
};

export default SexyCat;
