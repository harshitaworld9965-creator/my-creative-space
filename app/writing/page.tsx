'use client';

import { useState } from 'react';
import { BookOpen, PenTool, Quote, Feather, Moon, Coffee, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Sample writings - REPLACE THESE WITH YOUR ACTUAL WRITINGS
const initialWritings = [
  {
    id: 1,
    date: 'Tonight',
    time: '3:14 AM',
    title: 'The Quiet Hours',
    content: `The world sleeps, but my mind dances. In these quiet hours, thoughts feel more honest, more raw. The darkness isn't empty—it's full of possibilities waiting for daylight.`,
    mood: '🌙',
    tags: ['reflection', 'night thoughts'],
    wordCount: 42,
  },
  {
    id: 2,
    date: 'Last Week',
    time: '2:30 AM',
    title: 'Coffee Stains & Poem Drafts',
    content: `Found a coffee stain on my notebook that looks like a constellation. Maybe that's how poems are born—from accidental beauty we try to name.`,
    mood: '☕',
    tags: ['poetry', 'coffee', 'accidents'],
    wordCount: 28,
  },
  {
    id: 3,
    date: 'This Month',
    time: '4:00 AM',
    title: 'Conversations with the Moon',
    content: `Me: "Why do you only show your full self once a month?"
    Moon: "Why do you only write when you think no one's watching?"`,
    mood: '✨',
    tags: ['dialogue', 'moon', 'questions'],
    wordCount: 22,
  },
  {
    id: 4,
    date: 'Ongoing',
    time: 'Various',
    title: 'Fragments Collection',
    content: `- The sound of rain typing secrets on the window.
    - Old books smell like someone else's memories.
    - My cat understands poetry better than most people.`,
    mood: '📝',
    tags: ['fragments', 'collection', 'daily'],
    wordCount: 24,
  },
];

export default function WritingPage() {
  const [writings, setWritings] = useState(initialWritings);
  const [newWriting, setNewWriting] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(writings.flatMap(w => w.tags)));

  const filteredWritings = selectedTags.length > 0
    ? writings.filter(writing => 
        writing.tags.some(tag => selectedTags.includes(tag))
      )
    : writings;

  const handleAddWriting = () => {
    if (newWriting.trim() === '') return;
    
    const newEntry = {
      id: writings.length + 1,
      date: 'Just now',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      title: 'Fresh Thought',
      content: newWriting,
      mood: ['🌙', '✨', '☕', '📝', '🎈'][Math.floor(Math.random() * 5)],
      tags: ['fresh'],
      wordCount: newWriting.split(' ').length,
    };
    
    setWritings([newEntry, ...writings]);
    setNewWriting('');
    setIsWriting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-violet-50/20 to-purple-50/40 p-4 md:p-8">
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Soft gradient washes */}
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-200/20 to-blue-200/20 blur-3xl"></div>
        
        {/* Floating text elements */}
        <div className="absolute top-1/4 left-10 rotate-12 font-['Caveat'] text-6xl opacity-5">once</div>
        <div className="absolute bottom-1/3 right-10 -rotate-6 font-['Caveat'] text-5xl opacity-5">upon</div>
        <div className="absolute top-1/2 left-1/3 font-['Caveat'] text-4xl opacity-5">a thought</div>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-4xl">
        
        {/* Back to Studio Button */}
        <Link 
          href="/" 
          className="group mb-8 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Studio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-3 shadow-lg">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h1 className="font-['Caveat'] text-5xl md:text-6xl font-bold text-gray-800">
                  Midnight Musings
                </h1>
                <p className="font-mono text-sm text-gray-600">
                  Where thoughts go to breathe
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-sm shadow-lg">
              <Moon className="h-4 w-4 text-indigo-600" />
              <span className="font-mono text-sm text-gray-700">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl italic">
            A collection of half-formed thoughts, poetic fragments, and late-night realizations.
            Nothing polished—just honest words in their pajamas.
          </p>
        </div>

        {/* Quick Write Section */}
        <div className="mb-12">
          <div className={`rounded-2xl bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg shadow-2xl p-6 transition-all ${isWriting ? 'ring-2 ring-purple-300' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <PenTool className="h-5 w-5 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">
                {isWriting ? 'Your Thought...' : 'Capture a Thought'}
              </h2>
            </div>
            
            {isWriting ? (
              <div className="space-y-4">
                <textarea
                  value={newWriting}
                  onChange={(e) => setNewWriting(e.target.value)}
                  placeholder="What's on your mind? It doesn't have to be perfect..."
                  className="w-full h-40 rounded-xl border-2 border-dashed border-purple-300/50 bg-white/50 p-4 text-gray-700 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                  autoFocus
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setIsWriting(false)}
                    className="rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddWriting}
                    disabled={newWriting.trim() === ''}
                    className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Feather className="h-4 w-4" />
                      Save Thought
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsWriting(true)}
                className="w-full rounded-xl border-3 border-dashed border-purple-300/50 bg-gradient-to-r from-purple-50/50 to-pink-50/50 p-8 text-center transition-all hover:border-purple-400/70 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-lg"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-purple-200 to-pink-200 p-3">
                    <Feather className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-gray-600">
                    Click here to add a midnight thought...
                  </p>
                  <p className="text-sm text-gray-500">
                    (No editing, no pressure—just raw thought)
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <h3 className="font-medium text-gray-700">Filter by mood:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTags([])}
                className={`rounded-full px-4 py-1.5 text-sm transition-all ${selectedTags.length === 0 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow' : 'bg-white/70 text-gray-600 hover:bg-white/90'}`}
              >
                All thoughts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(selectedTags.filter(t => t !== tag));
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                  className={`rounded-full px-4 py-1.5 text-sm transition-all ${selectedTags.includes(tag) ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow' : 'bg-white/70 text-gray-600 hover:bg-white/90'}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Writings Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Quote className="h-5 w-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Collected Thoughts ({filteredWritings.length})
              </h2>
            </div>
            <div className="hidden md:block font-mono text-sm text-gray-500">
              Latest first
            </div>
          </div>

          {filteredWritings.length === 0 ? (
            <div className="rounded-2xl bg-gradient-to-br from-white/60 to-white/40 p-12 text-center backdrop-blur-lg">
              <div className="mb-4 text-4xl">📝</div>
              <p className="text-gray-600">No thoughts match these filters...</p>
              <button 
                onClick={() => setSelectedTags([])}
                className="mt-4 text-sm text-purple-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredWritings.map((writing) => (
                <div
                  key={writing.id}
                  className="group rounded-2xl bg-gradient-to-br from-white/80 to-white/50 p-6 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl hover:scale-[1.002]"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{writing.mood}</div>
                      <div>
                        <h3 className="font-['Caveat'] text-2xl font-bold text-gray-800">
                          {writing.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-gray-500">
                            {writing.date} • {writing.time}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="font-mono text-xs text-gray-500">
                            {writing.wordCount} words
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5 text-gray-400 hover:text-rose-500 transition-colors" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {writing.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {writing.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-purple-100/50 to-pink-100/50 px-3 py-1 text-xs text-purple-700 backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Writing Prompt */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/80 p-8 backdrop-blur-lg shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-gradient-to-r from-indigo-200 to-blue-200 p-2">
              <Sparkles className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Tonight's Writing Prompt</h3>
          </div>
          <div className="mb-4">
            <p className="text-lg italic text-gray-700">
              "Describe the silence between 3 AM and 4 AM. What does it sound like? What does it want to tell you?"
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Feeling stuck? Start with this...
            </p>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all">
              Use This Prompt
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="rounded-2xl bg-gradient-to-br from-white/60 to-white/40 p-6 text-center backdrop-blur-lg shadow-xl">
          <p className="font-['Caveat'] text-2xl text-gray-800 mb-2">
            The page is never full
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            This space grows with you. Come back whenever you need to 
            whisper a thought to the moon or share a secret with the stars.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <button className="text-sm text-purple-600 hover:underline transition-all">
              Export Thoughts
            </button>
            <button className="text-sm text-purple-600 hover:underline transition-all">
              View Archive
            </button>
            <button className="text-sm text-purple-600 hover:underline transition-all">
              Writing Stats
            </button>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsWriting(true)}
        className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50"
      >
        <Feather className="h-6 w-6" />
      </button>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .writing-card {
          animation: fade-in-up 0.6s ease-out forwards;
          animation-delay: calc(var(--order) * 0.1s);
        }
      `}</style>
    </div>
  );
}