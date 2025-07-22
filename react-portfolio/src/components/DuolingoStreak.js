import React, { useEffect, useState } from 'react';

export default function DuolingoStreak() {
  const baseStreak = 1381; // ← Set this to today’s streak
  const [streak, setStreak] = useState(baseStreak);

  useEffect(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const storedStreak = localStorage.getItem('duoStreak');
    const lastUpdate = localStorage.getItem('duoStreakLastUpdate');

    if (storedStreak && lastUpdate) {
      const last = new Date(lastUpdate);
      const lastDay = new Date(last.getFullYear(), last.getMonth(), last.getDate());
      const daysPassed = Math.floor((today - lastDay) / (1000 * 60 * 60 * 24));

      if (daysPassed > 0) {
        const newStreak = parseInt(storedStreak) + daysPassed;
        setStreak(newStreak);
        localStorage.setItem('duoStreak', newStreak);
        localStorage.setItem('duoStreakLastUpdate', today.toISOString());
      } else {
        setStreak(parseInt(storedStreak));
      }
    } else {
      // If no record exists, initialize at 1381
      localStorage.setItem('duoStreak', baseStreak);
      localStorage.setItem('duoStreakLastUpdate', today.toISOString());
      setStreak(baseStreak);
    }
  }, []);

  return <>{streak}</>;
}
