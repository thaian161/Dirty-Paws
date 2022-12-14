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
      <Lottie options={defaultOptions} height={800} width={800} style={{marginTop: '2rem'}}/>
    </div>
  );
};

export default RainbowCat;
