'use client';

import { useState, useEffect, useRef } from 'react';
import { Music, Coffee, Moon } from 'lucide-react';

/* ---------- studio time ---------- */
function getFormattedTime() {
  return new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

/* ---------- Piano ambience ---------- */
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
        className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-md border border-white/10 hover:bg-black/50"
      >
        <Music className="h-4 w-4 text-indigo-300" />
        {playing ? 'piano · on' : 'piano · off'}
      </button>

      <audio ref={audioRef} src="/audio/piano.mp3" />
    </div>
  );
}

/* ---------- Home ---------- */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setMounted(true);
    setTime(getFormattedTime());

    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      {/* Night background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/night-sky.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-indigo-950/70 to-black/90" />

      <div className="mx-auto max-w-6xl text-center">

        {/* Header */}
        <div className="mb-20 mt-10">
          <div className="inline-block rounded-3xl bg-black/40 p-8 backdrop-blur-xl border border-white/10">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-indigo-300">
              · from my late-night studio ·
            </p>

            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold md:text-8xl">
              Harshita
            </h1>

            <p className="mx-auto max-w-2xl text-lg italic text-white/80">
              A place where ideas rest, wander, and sometimes take shape —
              through words, attention, and quiet persistence.
            </p>
          </div>

          {/* Studio time */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-6 py-3 backdrop-blur-md border border-white/10">
            <Moon className="h-5 w-5 text-indigo-300" />
            <span className="font-mono text-sm text-white/80">
              Studio time:{' '}
              <span className="text-indigo-200">
                {mounted ? time : '—'}
              </span>
            </span>
            <Coffee className="h-5 w-5 text-amber-300" />
          </div>

          <PianoToggle />
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Corner
            title="Midnight Musings"
            subtitle="Essays, fragments, long thoughts written slowly."
            href="/writing"
          />
          <Corner
            title="Current Inspirations"
            subtitle="Books, ideas, questions, and things I’m orbiting."
            href="/current"
          />
          <Corner
            title="About"
            subtitle="A small note about this space and how it’s used."
            href="/about"
          />
        </div>
      </div>
    </div>
  );
}

function Corner({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <div
      onClick={() => (window.location.href = href)}
      className="cursor-pointer rounded-3xl bg-black/40 p-8 backdrop-blur-xl border border-white/10 hover:bg-black/50 transition text-left"
    >
      <h3 className="font-['Caveat'] text-3xl font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-white/70 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
