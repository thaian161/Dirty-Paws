import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

export default function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* -----FRONT CARD---- */}
      <div>
        Front Front Front
        <button onClick={handleClick}>Click to flip</button>
      </div>

      {/* -----BACK CARD---- */}
      <div>
        Back Back Back
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
}
