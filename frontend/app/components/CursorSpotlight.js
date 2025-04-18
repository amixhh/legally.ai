'use client';

import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const updateCursor = (e) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  if (!isHydrated) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ 
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, 
          rgba(172, 203, 238, 0.4), 
          rgba(172, 203, 238, 0.2) 20%,
          rgba(172, 203, 238, 0.1) 35%,
          transparent 60%
        )`,
        transition: 'background 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    />
  );
} 