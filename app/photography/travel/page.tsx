"use client";

import Link from "next/link";

const placeholders = Array.from({ length: 12 }).map((_, idx) => ({
  title: `Travel shot ${idx + 1}`,
}));

export default function TravelPhotographyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <header className="w-full px-6 md:px-10 pt-6 pb-8 mb-10">
        <div className="max-w-7xl mx-auto flex items-center gap-6 justify-between">
          <span className="handwritten text-2xl text-[#1f3556]">@cammstuhl</span>
          <nav className="flex-1 flex items-center justify-center gap-12 handwritten text-2xl text-[#1f3556]">
            <Link href="/#about" className="hover:text-[var(--accent)] transition-colors">about</Link>
            <Link href="/videos" className="hover:text-[var(--accent)] transition-colors">videos</Link>
            <div className="relative group">
              <Link
                href="/photography"
                className="hover:text-[var(--accent)] transition-colors"
              >
                photography
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:flex group-focus-within:flex flex-col gap-2 bg-[#bcd6f3] text-[#1f3556] px-4 py-3 rounded-xl shadow-lg">
                <Link href="/photography/travel" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">travel</Link>
                <Link href="/photography/food" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">food</Link>
              </div>
            </div>
            <Link href="/#contact" className="hover:text-[var(--accent)] transition-colors">contact</Link>
          </nav>
          <span className="hidden md:block w-20" />
        </div>
      </header>

      <section className="w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center space-y-2">
            <p className="handwritten text-4xl md:text-5xl text-[var(--accent)]">travel</p>
            <p className="text-4xl md:text-5xl font-extrabold text-[#12456c]">Photography</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {placeholders.map((item) => (
              <div
                key={item.title}
                className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#d6e7fb] via-[#c2daf5] to-[#a9c8ec] flex items-center justify-center text-[#12456c] font-semibold"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#6aa5d8] text-[#0f3f6a] px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="handwritten text-xl">@ cammstuhl</span>
          <span className="text-sm font-semibold">© Camryn Stuhlmuller</span>
        </div>
      </footer>
    </main>
  );
}
