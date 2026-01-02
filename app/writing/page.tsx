'use client';

import { useEffect, useState } from 'react';
import { BookOpen, PenTool, Feather, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const STORAGE_KEY = 'midnight-musings-writings';

const initialWritings = [
  {
    id: 1,
    date: 'Tonight',
    time: '3:14 AM',
    title: 'The Quiet Hours',
    content: `The world sleeps, but my mind dances.

In these quiet hours, thoughts feel more honest.
Less edited. Less defended.

Maybe that’s why I return here.`,
  },
  {
    id: 2,
    date: 'Last Week',
    time: '2:30 AM',
    title: 'Coffee Stains',
    content:
      'A coffee stain on my notebook looked like a constellation. Maybe poems begin that way.',
  },
];

export default function WritingPage() {
  const [writings, setWritings] = useState<typeof initialWritings>([]);
  const [newWriting, setNewWriting] = useState('');
  const [isWriting, setIsWriting] = useState(false);

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setWritings(JSON.parse(stored));
    } else {
      setWritings(initialWritings);
    }
  }, []);

  // Save to localStorage whenever writings change
  useEffect(() => {
    if (writings.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(writings));
    }
  }, [writings]);

  const latest = writings[0];
  const older = writings.slice(1);

  const handleAddWriting = () => {
    if (!newWriting.trim()) return;

    const firstLine = newWriting.split('\n')[0].slice(0, 50);

    const newEntry = {
      id: Date.now(),
      date: 'Just now',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      title: firstLine || 'Untitled',
      content: newWriting,
    };

    setWritings([newEntry, ...writings]);
    setNewWriting('');
    setIsWriting(false);
  };

  return (
    <div className="min-h-screen bg-[#EEF4EF] p-4 md:p-8">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 rounded-full bg-[#FAFBF9] px-4 py-2 text-sm text-[#3F4F46] border border-[#D6DED8]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-[#D6DED8] p-3">
              <BookOpen className="h-7 w-7 text-[#2F3E34]" />
            </div>
            <h1 className="font-['Caveat'] text-5xl font-bold text-[#2F3E34]">
              Midnight Musings
            </h1>
          </div>
          <p className="italic text-[#3F4F46] max-w-xl">
            A place for half-formed thoughts, fragments, and quiet honesty.
          </p>
        </header>

        <section className="mb-20 bg-[#FAFBF9] border border-[#D6DED8] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <PenTool className="h-5 w-5 text-[#3F4F46]" />
            <h2 className="font-semibold text-[#2F3E34]">Write</h2>
          </div>

          {isWriting ? (
            <>
              <textarea
                value={newWriting}
                onChange={e => setNewWriting(e.target.value)}
                placeholder="Write without cleaning it up."
                className="w-full h-40 rounded-xl border border-[#D6DED8] p-4 text-[#2F3E34] placeholder-[#6B7C72] focus:outline-none focus:ring-2 focus:ring-[#B8C6BE]"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setIsWriting(false)}
                  className="text-sm text-[#6B7C72]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddWriting}
                  className="rounded-full bg-[#2F3E34] px-5 py-2 text-sm text-white"
                >
                  Publish
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setIsWriting(true)}
              className="w-full rounded-xl border border-dashed border-[#D6DED8] p-8 text-[#6B7C72] hover:bg-[#F3F6F3]"
            >
              Click to write something…
            </button>
          )}
        </section>

        {latest && (
          <article className="mb-24">
            <h2 className="font-['Caveat'] text-3xl font-bold text-[#2F3E34] mb-3">
              {latest.title}
            </h2>
            <p className="text-sm text-[#6B7C72] mb-6">
              {latest.date} · {latest.time}
            </p>
            <div className="text-[#3F4F46] leading-relaxed whitespace-pre-line">
              {latest.content}
            </div>
          </article>
        )}

        <section className="space-y-12">
          {older.map(w => (
            <article key={w.id}>
              <h3 className="font-['Caveat'] text-2xl text-[#2F3E34] mb-1">
                {w.title}
              </h3>
              <p className="text-xs text-[#6B7C72] mb-3">
                {w.date} · {w.time}
              </p>
              <p className="text-[#3F4F46] whitespace-pre-line">
                {w.content}
              </p>
            </article>
          ))}
        </section>

      </div>

      <button
        onClick={() => setIsWriting(true)}
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-[#2F3E34] text-white flex items-center justify-center shadow-lg"
      >
        <Feather />
      </button>
    </div>
  );
}
