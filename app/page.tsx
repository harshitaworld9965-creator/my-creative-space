'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Music,
  BookOpen,
  Code,
  Palette,
  Coffee,
  Moon,
} from 'lucide-react';

/* -------- real studio time (hydration-safe) -------- */
const getFormattedTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
};

/* -------- Mini Game: Doodle Drift -------- */
function DoodleDrift() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const hue = useRef(Math.random() * 360);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;

    return () => window.removeEventListener('resize', resize);
  }, []);

  const draw = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = `hsla(${hue.current}, 60%, 65%, 0.4)`;

    if (!lastPoint.current) {
      lastPoint.current = { x, y };
      return;
    }

    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPoint.current = { x, y };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing) return;
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    draw(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className="rounded-3xl bg-white/80 p-6 backdrop-blur-lg shadow-lg">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-500">
        a small thing to play with
      </p>

      <canvas
        ref={canvasRef}
        className="h-40 w-full rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 touch-none"
        onPointerDown={() => {
          setIsDrawing(true);
          lastPoint.current = null;
        }}
        onPointerUp={() => {
          setIsDrawing(false);
          lastPoint.current = null;
        }}
        onPointerLeave={() => {
          setIsDrawing(false);
          lastPoint.current = null;
        }}
        onPointerMove={handlePointerMove}
      />

      <p className="mt-3 text-sm italic text-gray-600">
        No goal. Just let your hand wander.
      </p>
    </div>
  );
}

/* -------- Piano Ambience Toggle -------- */
function PianoToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.22; // softer than rain
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm shadow hover:bg-white/80"
      >
        <Music className="h-4 w-4 text-indigo-600" />
        {playing ? 'piano · on' : 'piano · off'}
      </button>

      <audio ref={audioRef} src="/audio/piano.mp3" />
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [studioTime, setStudioTime] = useState('');

  useEffect(() => {
    setMounted(true);
    setStudioTime(getFormattedTime());

    const interval = setInterval(() => {
      setStudioTime(getFormattedTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-amber-50/70 to-rose-50/80" />

      <div className="mx-auto max-w-6xl text-center">

        {/* Header */}
        <div className="mb-16 mt-10">
          <div className="inline-block rounded-3xl bg-white/80 p-8 backdrop-blur-lg shadow-xl">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-700">
              · from my late-night studio ·
            </p>

            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold text-gray-800 md:text-8xl">
  Harshita
</h1>

            <p className="mx-auto max-w-2xl text-lg italic text-gray-700">
              A place where ideas rest, wander, and sometimes take shape —
              through words, sketches, experiments, and quiet attention.
            </p>
          </div>

          {/* Studio Time */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/60 px-6 py-3 backdrop-blur-sm shadow-md">
            <Moon className="h-5 w-5 text-indigo-600" />
            <span className="font-mono text-sm text-gray-700">
              Studio time:{' '}
              <span className="text-indigo-600">
                {mounted ? studioTime : '—'}
              </span>
            </span>
            <Coffee className="h-5 w-5 text-amber-700" />
          </div>

          {/* Piano ambience */}
          <PianoToggle />
        </div>

        {/* Mini Game */}
        <div className="mb-20 mx-auto max-w-2xl">
          <DoodleDrift />
        </div>

        {/* Corners */}
        <div className="grid gap-8 md:grid-cols-2">
          <Corner href="/doodles" title="Doodle Wall" />
          <Corner href="/writing" title="Midnight Musings" />
          <Corner href="/code" title="Code Playground" />
          <Corner href="/current" title="Current Inspirations" />
        </div>
      </div>
    </div>
  );
}

/* -------- Reusable Corner -------- */
function Corner({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div
      onClick={() => (window.location.href = href)}
      className="cursor-pointer rounded-3xl bg-white/90 p-8 shadow-lg"
    >
      <h3 className="font-['Caveat'] text-4xl font-bold text-gray-800">
        {title}
      </h3>
    </div>
  );
}
