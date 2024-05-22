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
    const formattedTime = getCurrentTimeString();
    saveData(`attemptedPassword${formattedTime}`, input);
    if (input === knownSecret) {
      setIsSecretRevealed(true);
      // Pick a random image from the array
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
    } else {
      setIsSecretRevealed(false);
    }
  };

  const saveData = (key: string, data: string) => {
    const endpoint = `https://nice.runasp.net/Analytics/SaveAnalytics?key=${encodeURIComponent(key)}&data=${encodeURIComponent(data)}`;
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
  };
  
  const getCurrentTimeString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
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
