'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CreativeButtonProps {
  text: string;
}

export default function CreativeButton({ text }: CreativeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      <ArrowRight
        className={`h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`}
      />
      
      {/* Animated background effect */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`}
      />
    </button>
  );
}