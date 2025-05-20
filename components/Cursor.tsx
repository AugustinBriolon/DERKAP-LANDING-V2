import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrailingPosition = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(updateTrailingPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(updateTrailingPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[-1] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-xl"
      style={{
        left: `${trailingPosition.x}px`,
        top: `${trailingPosition.y}px`,
        background: 'radial-gradient(circle at center, #9747FF80 0%, transparent 100%)',
      }}
    />
  );
}
