'use client';

import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';

export default function DoodleWall() {
  return (
    <div className="min-h-screen bg-[#EEF4EF] p-4 md:p-8">
      <div className="mx-auto max-w-[680px]">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-green-100 p-3">
              <Palette className="h-6 w-6 text-green-700" />
            </div>
            <h1 className="font-['Caveat'] text-5xl font-bold text-gray-800">
              Doodle Wall
            </h1>
          </div>

          <p className="italic text-gray-600 max-w-xl">
            A place for lines, shapes, unfinished drawings,
            and thinking with the hands.
          </p>
        </header>

        {/* Placeholder */}
        <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
          The wall is empty for now.
          <br />
          Doodles will appear here.
        </div>

      </div>
    </div>
  );
}
