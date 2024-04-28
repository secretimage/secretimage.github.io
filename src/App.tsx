// App.tsx
import React from 'react';
import Counter from './Counter'; // Import the Counter component
import SecretImageRevealer from './SecretImageRevealer'; // Import the new component
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter /> {/* Use the Counter component */}
      <SecretImageRevealer /> {/* Use the SecretImageRevealer component */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
