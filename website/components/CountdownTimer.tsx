"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Set countdown to end of today (or 24 hours from first visit)
    const getEndTime = () => {
      const stored = localStorage.getItem("designora_countdown_end");
      if (stored) {
        const endTime = parseInt(stored);
        if (endTime > Date.now()) return endTime;
      }
      // Set new 24-hour countdown
      const endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("designora_countdown_end", endTime.toString());
      return endTime;
    };

    const endTime = getEndTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        // Reset timer
        localStorage.removeItem("designora_countdown_end");
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-surface-light border border-border rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center animate-pulse-glow">
        <span className="text-2xl sm:text-3xl font-bold text-primary">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-muted mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-3 sm:gap-4 justify-center">
      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className="text-2xl text-primary font-bold mt-[-20px]">:</span>
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl text-primary font-bold mt-[-20px]">:</span>
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
