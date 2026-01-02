'use client';

import { useState } from 'react';
import { Music, BookOpen, Code, Sparkles, Palette, Coffee, Moon } from 'lucide-react';

export default function Home() {
  const [activeCorner, setActiveCorner] = useState<string | null>(null);

  // Your current interests - UPDATE THESE!
  const currentInterests = {
    doodling: "character sketches from my morning coffee",
    writing: "poems about constellation myths",
    coding: "a generative art sketch with p5.js",
    watching: "Midnight Diner on Netflix",
    listening: "'Particle House' lofi playlist",
    reading: "The Midnight Library by Matt Haig",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cyan-50 p-4 md:p-8">
      
      {/* Playful background elements - like studio wall doodles */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
        {/* Doodle elements scattered */}
        <div className="absolute top-20 left-10 rotate-12 text-6xl">✎</div>
        <div className="absolute bottom-40 right-20 -rotate-6 text-5xl">♫</div>
        <div className="absolute top-1/3 right-1/4 text-4xl">✦</div>
        <div className="absolute bottom-1/4 left-1/3 rotate-45 text-3xl">○</div>
        
        {/* Gentle floating shapes */}
        <div className="absolute top-1/4 left-1/4 h-32 w-32 animate-float rounded-full border-4 border-dotted border-pink-300/40"></div>
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 animate-float-delayed rounded-3xl border-2 border-dashed border-cyan-300/40"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-6xl">
        
        {/* Studio Header - Like a bulletin board */}
        <div className="mb-12 mt-8 text-center">
          {/* Studio tape decoration */}
          <div className="mx-auto mb-6 h-6 w-32 rounded-full bg-gradient-to-r from-amber-200/80 via-rose-200/80 to-cyan-200/80 shadow-sm"></div>
          
          <div className="inline-block rounded-2xl bg-white/70 p-6 backdrop-blur-sm">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-600">
              · from my 3 am studio ·
            </p>
            
            <h1 className="mb-4 font-['Caveat'] text-6xl font-bold text-gray-800 md:text-8xl">
              Harshita
              <span className="block text-5xl md:text-7xl">
                Deswal
              </span>
            </h1>
            
            <div className="mx-auto mb-4 flex max-w-md items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300"></div>
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="font-mono text-sm text-gray-600">curious creator</span>
              <Sparkles className="h-5 w-5 text-amber-500" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300"></div>
            </div>
            
            <p className="mx-auto max-w-2xl text-lg italic text-gray-600">
              Currently exploring the joyful mess between 
              <span className="not-italic font-medium text-rose-500"> doodles & code</span>, 
              <span className="not-italic font-medium text-amber-500"> musings & music</span>. 
              Welcome to my midnight playground.
            </p>
          </div>
          
          {/* Studio time indicator */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
            <Moon className="h-4 w-4 text-indigo-500" />
            <span className="font-mono text-sm text-gray-600">Studio time: 3 AM</span>
            <Coffee className="h-4 w-4 text-amber-600" />
          </div>
        </div>

        {/* Interactive Studio Corners Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Doodle Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-300 ${activeCorner === 'doodle' ? 'border-rose-400 bg-rose-50/80 scale-[1.02]' : 'border-rose-300/60 bg-white/60 hover:border-rose-400'}`}
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
              Sketchbook snippets and visual experiments. 
              Currently drawing:
            </p>
            <div className="rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 p-4">
              <p className="font-medium text-rose-700">
                "{currentInterests.doodling}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm group-hover:shadow">
                peek at sketches →
              </span>
            </div>
          </div>

          {/* Musings Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-300 ${activeCorner === 'writing' ? 'border-amber-400 bg-amber-50/80 scale-[1.02]' : 'border-amber-300/60 bg-white/60 hover:border-amber-400'}`}
            onMouseEnter={() => setActiveCorner('writing')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/musings'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300 text-2xl shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Midnight Musings
            </h3>
            <p className="mb-4 text-gray-600">
              Half-formed thoughts and poetic fragments. 
              Currently writing about:
            </p>
            <div className="rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 p-4">
              <p className="font-medium text-amber-700">
                "{currentInterests.writing}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-amber-600 shadow-sm group-hover:shadow">
                read fragments →
              </span>
            </div>
          </div>

          {/* Code Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-300 ${activeCorner === 'code' ? 'border-cyan-400 bg-cyan-50/80 scale-[1.02]' : 'border-cyan-300/60 bg-white/60 hover:border-cyan-400'}`}
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
              Small experiments and creative coding. 
              Currently building:
            </p>
            <div className="rounded-xl bg-gradient-to-r from-cyan-100 to-blue-100 p-4">
              <p className="font-medium text-cyan-700">
                "{currentInterests.coding}"
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-cyan-600 shadow-sm group-hover:shadow">
                see experiments →
              </span>
            </div>
          </div>

          {/* Sounds & Screen Corner */}
          <div 
            className={`group relative cursor-pointer rounded-3xl border-3 border-dashed p-8 transition-all duration-300 ${activeCorner === 'media' ? 'border-violet-400 bg-violet-50/80 scale-[1.02]' : 'border-violet-300/60 bg-white/60 hover:border-violet-400'}`}
            onMouseEnter={() => setActiveCorner('media')}
            onMouseLeave={() => setActiveCorner(null)}
            onClick={() => window.location.href = '/current'}
          >
            <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-200 to-purple-300 text-2xl shadow-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 font-['Caveat'] text-4xl font-bold text-gray-800">
              Current Sounds
            </h3>
            <div className="space-y-4">
              <div className="rounded-xl bg-gradient-to-r from-violet-100 to-purple-100 p-4">
                <p className="mb-1 text-sm text-violet-600">On repeat:</p>
                <p className="font-medium text-violet-700">"{currentInterests.listening}"</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-fuchsia-100 to-pink-100 p-4">
                <p className="mb-1 text-sm text-fuchsia-600">Watching:</p>
                <p className="font-medium text-fuchsia-700">"{currentInterests.watching}"</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-indigo-100 to-blue-100 p-4">
                <p className="mb-1 text-sm text-indigo-600">Reading:</p>
                <p className="font-medium text-indigo-700">"{currentInterests.reading}"</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-600 shadow-sm group-hover:shadow">
                view playlist →
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Wonder Button */}
        <div className="mb-12 text-center">
          <button
            className="group relative mx-auto rounded-full border-2 border-dashed border-amber-400 bg-gradient-to-r from-amber-100/60 to-yellow-100/60 px-10 py-4 text-lg font-medium text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:border-solid hover:bg-gradient-to-r hover:from-amber-100 hover:to-yellow-100 hover:shadow-2xl"
            onClick={() => {
              // Add some playful interaction
              const corners = ['doodle', 'writing', 'code', 'media'];
              let i = 0;
              const interval = setInterval(() => {
                setActiveCorner(corners[i % corners.length]);
                i++;
              }, 200);
              setTimeout(() => {
                clearInterval(interval);
                setActiveCorner(null);
                alert('✨ Wonder activated! The studio is alive! ✨');
              }, 1000);
            }}
          >
            <span className="relative z-10">✨ Tap into wonder ✨</span>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>
          <p className="mt-3 text-sm text-gray-500">
            (Go ahead, click it—it's playful, I promise)
          </p>
        </div>

        {/* Studio Footer */}
        <div className="rounded-2xl bg-white/40 p-6 text-center backdrop-blur-sm">
          <p className="font-mono text-sm text-gray-600">
            This studio is always open. The kettle is always on.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="/log" className="text-sm text-rose-600 hover:underline">Daily Log</a>
            <a href="/about" className="text-sm text-amber-600 hover:underline">About This Studio</a>
            <a href="/contact" className="text-sm text-cyan-600 hover:underline">Send a Studio Note</a>
          </div>
        </div>

      </div>

      {/* Add CSS for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
}