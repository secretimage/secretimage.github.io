// ReferralDataFetcher.tsx
import React, { useState, useEffect } from 'react';

const ReferralDataFetcher: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://nice.runasp.net/Analytics/ReferralUrl')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Use text() instead of json()
      })
      .then(text => setData(text)) // The response is a string
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Referral Data:</h2>
          <pre>{data}</pre> {/* Display the string data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReferralDataFetcher;
