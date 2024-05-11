// SecretImageRevealer.tsx
import React, { useState } from 'react';
import './SecretImageRevealer.css'; // Import the CSS file for styling

const images = [
  '/IMG_6791.png',
  '/IMG_6792.png',
  '/IMG_6793.png',
  '/IMG_7778.png',
  '/IMG_7794.png',
  '/IMG_7795.png',
  '/IMG_7796.png',
  '/IMG_7797.png',
  '/IMG_7798.png',
  '/IMG_8060.png',
  '/IMG_8061.png',
  '/IMG_8062.png',
];

const SecretImageRevealer: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isSecretRevealed, setIsSecretRevealed] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const knownSecret = 'opensesame'; // Replace with your actual known secret

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const checkSecret = () => {
    if (input === knownSecret) {
      setIsSecretRevealed(true);
      // Pick a random image from the array
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
    } else {
      setIsSecretRevealed(false);
    }
  };

  return (
    <div className="container">
      <label htmlFor="sharedSecret" className="secret-label">
        What did Ali Baba say to open the door (no spaces all lower case)?
      </label>
      <input
        id="sharedSecret"
        name="sharedSecret"
        type="text"
        className="secret-input"
        value={input}
        onChange={handleInputChange}
        onBlur={checkSecret}
        onKeyUp={checkSecret}
      />
      {isSecretRevealed && (
        <div className="image-container">
          <a href={selectedImage} target="_blank" rel="noopener noreferrer">
            <img src={selectedImage} className="logo" alt="Secret Image" />
          </a>
        </div>
      )}
      
      {!isSecretRevealed && (
        <div className="image-container">
            <p>Did you enter a password? Please check if it is correct.</p>
        </div>
      )}
    </div>
  );
};

export default SecretImageRevealer;
