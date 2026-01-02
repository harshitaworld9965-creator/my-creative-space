'use client';

import { useState, useEffect } from 'react';
import {
  Music,
  BookOpen,
  Code,
  Sparkles,
  Palette,
  Coffee,
  Moon,
} from 'lucide-react';

/* -------- real, calm studio time -------- */
const getFormattedTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
};

export default function Home() {
  const [studioTime, setStudioTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setStudioTime(getFormattedTime());
    }, 60000); // update once per minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/studio-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-amber-50/70 to-rose-50/80" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 mt-10 text-center">
          <div className="mx-auto mb-6 h-6 w-40 rounded-full bg-gradient-to-r from-amber-200/60 via-rose-200/60 to-cyan-200/60" />

          <div className="inline-block rounded-3xl bg-white/70 p-8 backdrop-blur-lg shadow-xl">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-700">
              · from my late-night studio ·
            </p>

            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold text-gray-800 md:text-8xl">
              Harshita
              <span className="block text-5xl md:text-7xl">Deswal</span>
            </h1>

            <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300/60" />
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="font-mono text-sm text-gray-600">
                a cozy, curious studio
              </span>
              <Sparkles className="h-5 w-5 text-amber-500" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300/60" />
            </div>

            <p className="mx-auto max-w-2xl text-lg italic text-gray-700">
              This is a place where ideas rest, wander, and occasionally take
              shape — through words, sketches, experiments, and quiet attention.
            </p>
          </div>

          {/* Studio time */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/60 px-6 py-3 backdrop-blur-sm shadow-md">
            <Moon className="h-5 w-5 text-indigo-600" />
            <span className="font-mono text-sm text-gray-700">
              Studio time:{' '}
              <span className="text-indigo-600">{studioTime}</span>
            </span>
            <Coffee className="h-5 w-5 text-amber-700" />
          </div>

          {/* Quiet navigation */}
          <div className="mt-6 flex justify-center gap-6">
            <a href="/writing" className="text-sm text-purple-700 hover:underline">
              Midnight Musings
            </a>
            <a href="/now" className="text-sm text-cyan-700 hover:underline">
              Now
            </a>
            <a href="/about" className="text-sm text-amber-700 hover:underline">
              About
            </a>
          </div>
        </div>

        {/* Studio Corners */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">

          {/* Doodles */}
          <div
            className="cursor-pointer rounded-3xl border-3 border-dashed border-rose-300/60 bg-white/90 p-8 backdrop-blur-lg shadow-lg"
            onClick={() => (window.location.href = '/doodles')}
          >
            <div className="mb-4 flex items-center gap-3">
              <Palette className="h-6 w-6 text-rose-600" />
              <h3 className="font-['Caveat'] text-4xl font-bold text-gray-800">
                Doodle Wall
              </h3>
            </div>
            <p className="text-gray-600">
              This corner is for thinking with the hands — sketches,
              half-formed shapes, and visual daydreams that don’t need words yet.
            </p>
          </div>

          {/* Writing */}
          <div
            className="cursor-pointer rounded-3xl border-3 border-dashed border-amber-300/60 bg-white/90 p-8 backdrop-blur-lg shadow-lg"
            onClick={() => (window.location.href = '/writing')}
          >
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-amber-600" />
              <h3 className="font-['Caveat'] text-4xl font-bold text-gray-800">
                Midnight Musings
              </h3>
            </div>
            <p className="text-gray-600">
              Long thoughts, short fragments, and essays written slowly —
              usually when the world is quiet enough to listen back.
            </p>
          </div>

          {/* Code */}
          <div
            className="cursor-pointer rounded-3xl border-3 border-dashed border-cyan-300/60 bg-white/90 p-8 backdrop-blur-lg shadow-lg"
            onClick={() => (window.location.href = '/code')}
          >
            <div className="mb-4 flex items-center gap-3">
              <Code className="h-6 w-6 text-cyan-600" />
              <h3 className="font-['Caveat'] text-4xl font-bold text-gray-800">
                Code Playground
              </h3>
            </div>
            <p className="text-gray-600">
              A space for playful experiments, systems thinking,
              and learning by building — without pressure to finish.
            </p>
          </div>

          {/* Media */}
          <div
            className="cursor-pointer rounded-3xl border-3 border-dashed border-violet-300/60 bg-white/90 p-8 backdrop-blur-lg shadow-lg"
            onClick={() => (window.location.href = '/current')}
          >
            <div className="mb-4 flex items-center gap-3">
              <Music className="h-6 w-6 text-violet-600" />
              <h3 className="font-['Caveat'] text-4xl font-bold text-gray-800">
                Current Inspirations
              </h3>
            </div>
            <p className="text-gray-600">
              The books, music, films, and ideas that quietly shape
              what happens in the studio — even when they’re not visible yet.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="rounded-3xl bg-white/70 p-8 text-center backdrop-blur-lg shadow-xl">
          <p className="mb-3 font-['Caveat'] text-3xl text-gray-800">
            The studio is always open
          </p>
          <p className="mx-auto max-w-2xl font-mono text-sm text-gray-600">
            Some things are finished, some are mid-gesture.
            You’re welcome to sit, wander, or return later.
          </p>
        </div>
      </div>

      {/* custom border width */}
      <style jsx global>{`
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
}
