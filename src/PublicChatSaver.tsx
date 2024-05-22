import { useState, useEffect } from 'react';

// Define a type for the analytics data
type AnalyticsData = {
  id: number;
  dataKey: string;
  data: string;
  referer: string;
  ipAddress: string;
  createdAt: string;
};

const PublicChatSaver = () => {
  const [inputText, setInputText] = useState('');
  // Initialize analyticsData with the correct type
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  // Define fetchAnalyticsData outside of useEffect
  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch('https://nice.runasp.net/Analytics/GetAnalyticsData?key=publicchat');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: AnalyticsData = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  // Call fetchAnalyticsData when the component mounts
  useEffect(() => {
    fetchAnalyticsData();
    saveVisitData();
  }, []);

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
      // Fetch and update analytics data after saving
      fetchAnalyticsData();
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
  };

  const saveVisitData = () => {
    const formattedTime = getCurrentTimeString();
    const endpoint = `https://nice.runasp.net/Analytics/SaveAnalytics?key=visit${formattedTime}&data=${formattedTime}`;
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={saveData}>
        Save Data
      </button>
      {analyticsData && (
        <div>
          <p><strong>ID:</strong> {analyticsData.id}</p>
          <p><strong>Key:</strong> {analyticsData.dataKey}</p>
          <p><strong>Data:</strong> {analyticsData.data}</p>
          <p><strong>Referer:</strong> {analyticsData.referer}</p>
          <p><strong>IP Address:</strong> {analyticsData.ipAddress}</p>
          <p><strong>Created At:</strong> {analyticsData.createdAt}</p>
        </div>
      )}
    </div>
  );
};

export default PublicChatSaver;
