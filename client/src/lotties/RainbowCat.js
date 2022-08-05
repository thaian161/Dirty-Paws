import Lottie from 'react-lottie';
import rainbowcat from './rainbow-cat.json';

const RainbowCat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rainbowcat,
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

export default RainbowCat;
