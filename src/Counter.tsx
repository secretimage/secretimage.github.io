// Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Counter;
