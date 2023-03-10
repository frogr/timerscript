import React, { useState, useEffect } from 'react';

interface TimerProps {
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>Time Left: {formatTime(timeLeft)}</h2>
    </div>
  );
};

export default Timer;