import { useEffect, useState } from 'react';

export function useVisitCounter() {
  const [count, setCount] = useState<number>(() => {
    const stored = localStorage.getItem('visitCount');
    return stored ? parseInt(stored, 10) : 0;
  });

  useEffect(() => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('visitCount', newCount.toString());
  }, []);

  return count;
}
