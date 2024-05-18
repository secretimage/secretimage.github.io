// ReferralDataFetcher.tsx
import React, { useState, useEffect } from 'react';

const ReferralDataFetcher: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://nice.runasp.net/Analytics/ReferralUrl')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Referral Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReferralDataFetcher;
