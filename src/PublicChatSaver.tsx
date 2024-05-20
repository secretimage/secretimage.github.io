// PublicChatSaver.tsx
import { useState } from 'react'; // Removed 'React' since it's unused

const PublicChatSaver = () => {
  const [inputText, setInputText] = useState('');

  // Added type for the 'event' parameter
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const saveData = () => {
    const endpoint = `https://nice.runasp.net/Analytics/SaveAnalytics?key=publicchat&data=${encodeURIComponent(inputText)}`;
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
    .then(result => {
      console.log('Data saved:', result);
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={saveData}>
        Save Data
      </button>
    </div>
  );
};

export default PublicChatSaver;
