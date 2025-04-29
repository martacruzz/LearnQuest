import React, { useState, useEffect } from "react";

function WeeklyProgressCircle({ weeklyProgress }) {
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(weeklyProgress);
    }, 100); // small delay to trigger ring animation
    return () => clearTimeout(timeout);
  }, [weeklyProgress]);

  useEffect(() => {
    let frame;
    const duration = 1000; // 1 second animation for the count
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      const value = Math.round(progressRatio * weeklyProgress);
      setDisplayedProgress(value);

      if (progressRatio < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [weeklyProgress]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="white"
          strokeWidth="8"
          fill="transparent"
          className="opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#22c55e"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress / 100)}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-300">
        {displayedProgress}%
      </div>
    </div>
  );
}


export default WeeklyProgressCircle;