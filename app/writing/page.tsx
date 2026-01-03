export default function Home() {
  return (
    <main className="relative mx-auto max-w-[680px] px-6 py-20">
      {/* subtle vertical guide */}
      <div className="absolute left-[-24px] top-0 h-full w-px bg-neutral-200/60" />

      {/* Opening line */}
      <h1 className="text-3xl font-normal leading-snug mb-16">
        stay a while. <span className="opacity-70">i’m thinking.</span>
      </h1>

      {/* Now block */}
      <section className="space-y-8 mb-24">
        <div>
          <p className="text-xs lowercase tracking-wide opacity-50 mb-1">
            thinking lately
          </p>
          <p>
            how systems shape behavior long before intention shows up
          </p>
        </div>

        <div>
          <p className="text-xs lowercase tracking-wide opacity-50 mb-1">
            currently reading
          </p>
          <p>
            <em>The Brothers Karamazov</em> — not for answers, but for endurance
          </p>
        </div>

        <div>
          <p className="text-xs lowercase tracking-wide opacity-50 mb-1">
            working on
          </p>
          <p>
            small, incomplete systems that still tell the truth
          </p>
        </div>

        <div>
          <p className="text-xs lowercase tracking-wide opacity-50 mb-1">
            something I keep returning to
          </p>
          <p>
            the discomfort of noticing patterns you can’t unsee
          </p>
        </div>
      </section>

      {/* Writing */}
      <section>
        <p className="text-xs lowercase tracking-wide opacity-50 mb-6">
          some things I’m writing through
        </p>

        <ul className="space-y-5">
          <li className="pb-3 border-b border-neutral-200/60 hover:opacity-60 transition">
            On noticing patterns too late
          </li>
          <li className="pb-3 border-b border-neutral-200/60 hover:opacity-60 transition">
            Systems that pretend to be neutral
          </li>
          <li className="pb-3 border-b border-neutral-200/60 hover:opacity-60 transition">
            Thinking in public without collapsing
          </li>
          <li className="hover:opacity-60 transition">
            Notes from unfinished work
          </li>
        </ul>
      </section>
    </main>
  );
}
