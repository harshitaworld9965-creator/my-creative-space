import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getAllWritings } from '@/lib/getWritings';

export default function WritingPage() {
  const writings = getAllWritings();

  const latest = writings[0];
  const older = writings.slice(1);

  return (
    <div className="min-h-screen bg-[#EEF4EF] p-4 md:p-8">
<div className="mx-auto max-w-[680px]">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 rounded-full bg-[#FAFBF9] px-4 py-2 text-sm text-[#3F4F46] border border-[#D6DED8]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <header className="mb-20">
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

        {/* Latest */}
        {latest && (
          <article className="mb-28">
            <h2 className="font-['Caveat'] text-3xl font-bold text-[#2F3E34] mb-3">
              {latest.title}
            </h2>
            <p className="text-sm text-[#6B7C72] mb-6">
              {latest.date} · {latest.time}
            </p>
            <div className="prose prose-neutral max-w-none text-[#3F4F46] leading-[1.75] whitespace-pre-line">
  {latest.content}
</div>

          </article>
        )}

        {/* Older */}
        <section className="space-y-14">
          {older.map(writing => (
            <article key={writing.slug}>
              <h3 className="font-['Caveat'] text-2xl text-[#2F3E34] mb-1">
                {writing.title}
              </h3>
              <p className="text-xs text-[#6B7C72] mb-3">
                {writing.date} · {writing.time}
              </p>
              <p className="text-[#3F4F46] whitespace-pre-line">
                {writing.content}
              </p>
            </article>
          ))}
        </section>

      </div>
    </div>
  );
}
