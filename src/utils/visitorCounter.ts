
import { useState, useEffect } from 'react';

// Function to get, increment and store visitor count in localStorage
export const useVisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    let newCount = 1;
    
    if (storedCount) {
      newCount = parseInt(storedCount) + 1;
    }
    
    // Update localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
    
    // Send analytics event
    console.log('New visitor count:', newCount);
  }, []);

  return count;
};
