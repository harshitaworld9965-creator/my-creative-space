import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PianoToggle from '@/components/PianoToggle';
import { getAllWritings } from '@/lib/getWritings';

export default function WritingPage() {
  const writings = getAllWritings();
  const latest = writings[0];
  const older = writings.slice(1);

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">

      {/* Night sky background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/night-sky.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-indigo-950/70 to-black/90" />

      <div className="mx-auto max-w-[680px]">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 border border-white/10 backdrop-blur-md hover:bg-black/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="rounded-xl bg-black/40 p-3 backdrop-blur-md border border-white/10">
              <BookOpen className="h-7 w-7 text-indigo-300" />
            </div>
            <h1 className="font-['Caveat'] text-5xl font-bold text-white">
              Midnight Musings
            </h1>
          </div>

          <p className="italic text-white/70 max-w-xl">
            A place for half-formed thoughts, fragments, and quiet honesty.
          </p>

          {/* Piano ambience */}
          <PianoToggle />
        </header>

        {/* Latest */}
        {latest && (
          <article className="mb-32">
            <h2 className="font-['Caveat'] text-3xl font-bold text-white mb-3">
              {latest.title}
            </h2>
            <p className="text-sm text-white/50 mb-8 tracking-wide">
              {latest.date} · {latest.time}
            </p>

            <div className="prose prose-invert max-w-none leading-[1.85] whitespace-pre-line text-white/85">
              {latest.content}
            </div>
          </article>
        )}

        {/* Older */}
        <section className="space-y-16">
          {older.map(writing => (
            <article key={writing.slug}>
              <h3 className="font-['Caveat'] text-2xl text-white mb-2">
                {writing.title}
              </h3>
              <p className="text-xs text-white/50 mb-4 tracking-wide">
                {writing.date} · {writing.time}
              </p>
              <p className="text-white/75 leading-relaxed whitespace-pre-line">
                {writing.content}
              </p>
            </article>
          ))}
        </section>

      </div>
    </div>
  );
}
