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

/* -------- real studio time -------- */
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
  const hue = useRef(220); // fixed cool hue for night theme
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

    ctx.strokeStyle = `hsla(${hue.current}, 70%, 75%, 0.35)`;

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
    <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl shadow-lg border border-white/10">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/60">
        a small thing to play with
      </p>

      <canvas
        ref={canvasRef}
        className="h-40 w-full rounded-xl bg-gradient-to-br from-indigo-900/40 to-slate-900/40 touch-none"
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

      <p className="mt-3 text-sm italic text-white/60">
        No goal. Just let your hand wander.
      </p>
    </div>
  );
}

/* -------- Piano ambience -------- */
function PianoToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md border border-white/20 hover:bg-white/20"
      >
        <Music className="h-4 w-4 text-indigo-300" />
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
    <div className="min-h-screen p-4 md:p-8 text-white">
      {/* Night sky background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/night-sky.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-indigo-950/70 to-black/90" />

      <div className="mx-auto max-w-6xl text-center">

        {/* Header */}
        <div className="mb-16 mt-10">
          <div className="inline-block rounded-3xl bg-black/40 p-8 backdrop-blur-xl shadow-xl border border-white/10">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-indigo-300">
              · from my late-night studio ·
            </p>

            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold md:text-8xl">
              Harshita
            </h1>

            <p className="mx-auto max-w-2xl text-lg italic text-white/80">
              A place where ideas rest, wander, and sometimes take shape —
              through words, sketches, experiments, and quiet attention.
            </p>
          </div>

          {/* Studio Time */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-6 py-3 backdrop-blur-md border border-white/10">
            <Moon className="h-5 w-5 text-indigo-300" />
            <span className="font-mono text-sm text-white/80">
              Studio time:{' '}
              <span className="text-indigo-200">
                {mounted ? studioTime : '—'}
              </span>
            </span>
            <Coffee className="h-5 w-5 text-amber-300" />
          </div>

          <PianoToggle />
        </div>

        {/* Mini Game */}
        <div className="mb-20 mx-auto max-w-2xl">
          <DoodleDrift />
        </div>

        {/* Corners */}
        <div className="grid gap-8 md:grid-cols-2">
          <Corner title="Doodle Wall" href="/doodles" />
          <Corner title="Midnight Musings" href="/writing" />
          <Corner title="Code Playground" href="/code" />
          <Corner title="Current Inspirations" href="/current" />
        </div>
      </div>
    </div>
  );
}

function Corner({ title, href }: { title: string; href: string }) {
  return (
    <div
      onClick={() => (window.location.href = href)}
      className="cursor-pointer rounded-3xl bg-black/40 p-8 backdrop-blur-xl border border-white/10 hover:bg-black/50 transition"
    >
      <h3 className="font-['Caveat'] text-4xl font-bold text-white">
        {title}
      </h3>
    </div>
  );
}
