import { Sparkles, Palette, Zap, MousePointerClick } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CreativeButton from '@/components/CreativeButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">CREATIVE PLAYGROUND</span>
          </div>
          
          <h1 className="mb-6 font-serif text-7xl font-bold tracking-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Harshita
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            This is my digital garden—a messy, evolving space for thoughts, 
            experiments, and things that spark joy. Nothing corporate here.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-purple-400/50">
            <Palette className="mb-4 h-12 w-12 text-purple-400" />
            <h2 className="mb-3 text-2xl font-bold">Visual Experiments</h2>
            <p className="mb-6 text-gray-300">Generative art, CSS weirdness, interactive toys.</p>
            <CreativeButton text="Peek Inside" />
          </div>
          
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-cyan-400/50">
            <Zap className="mb-4 h-12 w-12 text-cyan-400" />
            <h2 className="mb-3 text-2xl font-bold">Daily Log</h2>
            <p className="mb-6 text-gray-300">What I'm building, learning, failing at, fascinated by.</p>
            <CreativeButton text="Read Updates" />
          </div>
        </div>

        {/* Interactive Hint */}
        <div className="fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <MousePointerClick className="h-4 w-4" />
          <span className="text-sm">Everything is clickable. Play around.</span>
        </div>
      </main>
    </div>
  );
}