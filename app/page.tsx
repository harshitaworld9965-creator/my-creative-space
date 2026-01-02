'use client';

import { useState, useEffect } from 'react';
import { Music, BookOpen, Code, Sparkles, Palette, Coffee, Moon } from 'lucide-react';

export default function Home() {
  const [activeCorner, setActiveCorner] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState('3 AM');

  // Simulate studio time passing
  useEffect(() => {
    const times = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM'];
    let index = 2;
    const interval = setInterval(() => {
      index = (index + 1) % times.length;
      setTimeOfDay(times[index]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Your current interests - UPDATE THESE with your actual interests!
  const currentInterests = {
    doodling: "whimsical creatures in my sketchbook",
    writing: "short stories about magical realism",
    coding: "an interactive starry night animation",
    watching: "Studio Ghibli movies for the 100th time",
    listening: "'Coffee Shop Radio' lofi playlist",
    reading: "The Night Circus by Erin Morgenstern",
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      
      {/* Studio Background with Your Image */}
      <div className="fixed inset-0 -z-10">
        {/* Your studio background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/studio-bg.jpg)',
          }}
        ></div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-amber-50/70 to-rose-50/80"></div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Floating studio elements */}
        <div className="absolute top-20 left-10 animate-float-slow text-5xl opacity-30">✎</div>
        <div className="absolute bottom-40 right-20 animate-float-delayed text-4xl opacity-30">♫</div>
        <div className="absolute top-1/3 right-1/4 animate-pulse text-3xl opacity-20">✦</div>
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-6xl">
        
        {/* Studio Header */}
        <div className="mb-12 mt-8 text-center">
          {/* Washi tape decoration */}
          <div className="mx-auto mb-6 h-6 w-40 rounded-full bg-gradient-to-r from-amber-200/60 via-rose-200/60 to-cyan-200/60 shadow-sm backdrop-blur-sm"></div>
          
          <div className="inline-block rounded-3xl bg-white/70 p-8 backdrop-blur-lg shadow-2xl">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-700">
              · from my 3 am studio ·
            </p>
            
            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold text-gray-800 md:text-8xl">
              Harshita
              <span className="block text-5xl md:text-7xl">
                Deswal
              </span>
            </h1>
            
            <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300/60"></div>
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="font-mono text-sm text-gray-600">curious creator</span>
              <Sparkles className="h-5 w-5 text-amber-500" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300/60"></div>
            </div>
            
            <p className="mx-auto max-w-2xl text-lg italic text-gray-700">
              Welcome to my midnight playground—where 
              <span className="not-italic font-medium text-rose-600"> doodles</span>, 
              <span className="not-italic font-medium text-amber-600"> code</span>, and 
              <span className="not-italic font-medium text-cyan-600"> curiosity</span> 
              {` `}collide in the quiet hours.
            </p>
          </div>
          
          {/* Studio time indicator */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/60 px-6 py-3 backdrop-blur-sm shadow-lg">
            <Moon className="h-5 w-5 text-indigo-600 animate-pulse" />
            <span className="font-mono text-sm font-medium text-gray-700">
              Studio time: <span className="text-indigo-600">{timeOfDay}</span>
            </span>
            <Coffee className="h-5 w-5 text-amber-700" />
          </div>

          {/* QUICK NAVIGATION - ADDED HERE */}
          <div className="mt-6 flex justify-center gap-6">
            <a href="/writing" className="text-sm font-medium text-purple-600 hover:text-purple-800 hover:underline transition-all">
              Midnight Musings
            </a>
            <a href="/log" className="text-sm font-medium text-rose-600 hover:text-rose-800 hover:underline transition-all">
              Daily Log
            </a>
            <a href="/now" className="text-sm font-medium text-cyan-600 hover:text-cyan-800 hover:underline transition-all">
              Now Page
            </a>
            <a href="/about" className="text-sm font-medium text-amber-600 hover:text-amber-800 hover:underline transition-all">
              About
            </a>
          </div>
        </div>

        {/* Interactive Studio Corners Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Doodle Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-500 ${activeCorner === 'doodle' ? 'border-rose-400 bg-rose-50/90 scale-[1.02] shadow-xl' : 'border-rose-300/60 bg-white/90 hover:border-rose-400 hover:shadow-xl'} backdrop-blur-lg shadow-lg`}
            onMouseEnter={() => setActiveCorner('doodle')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/doodles'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-200 to-pink-300 text-2xl shadow-lg">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Doodle Wall
            </h3>
            <p className="mb-4 text-gray-600">
              Sketchbook snippets, half-drawn ideas, and visual daydreams.
            </p>
            <div className="rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 p-4 border border-rose-200/50">
              <p className="mb-1 text-sm font-medium text-rose-600">Currently drawing:</p>
              <p className="text-rose-700">
                "{currentInterests.doodling}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-2 text-sm font-medium text-rose-700 shadow-sm group-hover:from-rose-200 group-hover:to-pink-200 group-hover:shadow transition-all">
                peek at sketches →
              </span>
            </div>
          </div>

          {/* Writing Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-500 ${activeCorner === 'writing' ? 'border-amber-400 bg-amber-50/90 scale-[1.02] shadow-xl' : 'border-amber-300/60 bg-white/90 hover:border-amber-400 hover:shadow-xl'} backdrop-blur-lg shadow-lg`}
            onMouseEnter={() => setActiveCorner('writing')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/writing'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300 text-2xl shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Midnight Musings
            </h3>
            <p className="mb-4 text-gray-600">
              Half-formed thoughts, poetic fragments, and story beginnings.
            </p>
            <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 border border-amber-200/50">
              <p className="mb-1 text-sm font-medium text-amber-600">Currently writing:</p>
              <p className="text-amber-700">
                "{currentInterests.writing}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm group-hover:from-amber-200 group-hover:to-orange-200 group-hover:shadow transition-all">
                read fragments →
              </span>
            </div>
          </div>

          {/* Code Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-500 ${activeCorner === 'code' ? 'border-cyan-400 bg-cyan-50/90 scale-[1.02] shadow-xl' : 'border-cyan-300/60 bg-white/90 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg shadow-lg`}
            onMouseEnter={() => setActiveCorner('code')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/code'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-300 text-2xl shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Code Playground
            </h3>
            <p className="mb-4 text-gray-600">
              Interactive experiments, creative coding, and digital tinkering.
            </p>
            <div className="rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 p-4 border border-cyan-200/50">
              <p className="mb-1 text-sm font-medium text-cyan-600">Currently building:</p>
              <p className="text-cyan-700">
                "{currentInterests.coding}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm group-hover:from-cyan-200 group-hover:to-blue-200 group-hover:shadow transition-all">
                see experiments →
              </span>
            </div>
          </div>

          {/* Media Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-500 ${activeCorner === 'media' ? 'border-violet-400 bg-violet-50/90 scale-[1.02] shadow-xl' : 'border-violet-300/60 bg-white/90 hover:border-violet-400 hover:shadow-xl'} backdrop-blur-lg shadow-lg`}
            onMouseEnter={() => setActiveCorner('media')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/current'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-200 to-purple-300 text-2xl shadow-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Current Inspirations
            </h3>
            <div className="space-y-4">
              <div className="rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 p-4 border border-violet-200/50">
                <p className="mb-1 text-sm font-medium text-violet-600">On repeat:</p>
                <p className="text-violet-700">"{currentInterests.listening}"</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-fuchsia-50 to-pink-50 p-4 border border-fuchsia-200/50">
                <p className="mb-1 text-sm font-medium text-fuchsia-600">Watching:</p>
                <p className="text-fuchsia-700">"{currentInterests.watching}"</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 p-4 border border-indigo-200/50">
                <p className="mb-1 text-sm font-medium text-indigo-600">Reading:</p>
                <p className="text-indigo-700">"{currentInterests.reading}"</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm group-hover:from-violet-200 group-hover:to-purple-200 group-hover:shadow transition-all">
                view playlist →
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Studio Button */}
        <div className="mb-12 text-center">
          <button
            className="group relative mx-auto rounded-full border-3 border-dashed border-amber-400 bg-gradient-to-r from-amber-100/90 to-yellow-100/90 px-12 py-5 text-xl font-medium text-gray-800 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:border-solid hover:bg-gradient-to-r hover:from-amber-100 hover:to-yellow-100 hover:shadow-3xl hover:scale-105"
            onClick={() => {
              const corners = ['doodle', 'writing', 'code', 'media'];
              let i = 0;
              const interval = setInterval(() => {
                setActiveCorner(corners[i % corners.length]);
                i++;
              }, 150);
              setTimeout(() => {
                clearInterval(interval);
                setActiveCorner(null);
              }, 1200);
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="h-5 w-5 group-hover:animate-spin" />
              Explore the studio
              <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-400/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:via-amber-400/20"></div>
          </button>
          <p className="mt-4 text-sm text-gray-600 font-mono">
            (Pssst... try hovering over the corners too!)
          </p>
        </div>

        {/* Studio Footer - WITH UPDATED NAVIGATION */}
        <div className="rounded-3xl bg-white/70 p-8 text-center backdrop-blur-lg shadow-2xl">
          <p className="font-['Caveat'] text-3xl text-gray-800 mb-4">
            The studio is always open
          </p>
          <p className="font-mono text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            This is a living space—always evolving, always welcoming. 
            The kettle is on, the notebooks are open, and the ideas are brewing.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="/writing" className="text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline transition-all">
              Midnight Musings
            </a>
            <a href="/log" className="text-sm font-medium text-rose-600 hover:text-rose-700 hover:underline transition-all">
              Daily Studio Log
            </a>
            <a href="/about" className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline transition-all">
              About This Studio
            </a>
            <a href="/contact" className="text-sm font-medium text-cyan-600 hover:text-cyan-700 hover:underline transition-all">
              Send a Studio Note
            </a>
            <a href="/now" className="text-sm font-medium text-violet-600 hover:text-violet-700 hover:underline transition-all">
              What I'm Doing Now
            </a>
          </div>
        </div>

      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 0.5; }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-25px) rotate(-8deg); opacity: 0.5; }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite 2s;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
}