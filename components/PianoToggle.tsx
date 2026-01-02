'use client';

import { useRef, useState } from 'react';
import { Music } from 'lucide-react';

export default function PianoToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.18;
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="mt-8 flex justify-start">
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-md border border-white/10 hover:bg-black/50"
      >
        <Music className="h-4 w-4 text-indigo-300" />
        {playing ? 'piano · on' : 'piano · off'}
      </button>

      <audio ref={audioRef} src="/audio/piano.mp3" />
    </div>
  );
}
