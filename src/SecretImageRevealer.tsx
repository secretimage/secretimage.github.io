// SecretImageRevealer.tsx
import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import './SecretImageRevealer.css'; // Import the CSS file for styling

const SecretImageRevealer: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isSecretRevealed, setIsSecretRevealed] = useState<boolean>(false);
  const knownSecret = 'opensesame'; // Replace with your actual known secret

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const checkSecret = () => {
    if (input === knownSecret) {
      setIsSecretRevealed(true);
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
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
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
