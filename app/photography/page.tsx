"use client";

const navLinks = [
  { label: "about", href: "/#about" },
  { label: "videos", href: "/videos" },
  { label: "photography", href: "/photography" },
  { label: "contact", href: "/#contact" },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <header className="w-full px-6 md:px-10 pt-6 pb-8 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto flex items-center gap-6 justify-between">
          <span className="handwritten text-2xl text-[#1f3556]">@cammstuhl</span>
          <nav className="flex-1 flex items-center justify-center gap-12 handwritten text-2xl text-[#1f3556]">
            <a href="/#about" className="hover:text-[var(--accent)] transition-colors">about</a>
            <a href="/videos" className="hover:text-[var(--accent)] transition-colors">videos</a>
            <div className="relative group">
              <a
                href="/photography"
                className="hover:text-[var(--accent)] transition-colors"
              >
                photography
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:flex group-focus-within:flex flex-col gap-2 bg-[#bcd6f3] text-[#1f3556] px-4 py-3 rounded-xl shadow-lg">
                <a href="/photography/travel" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">travel</a>
                <a href="/photography/food" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">food</a>
              </div>
            </div>
            <a href="/#contact" className="hover:text-[var(--accent)] transition-colors">contact</a>
          </nav>
          <span className="hidden md:block w-20" />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 px-6 md:px-10 lg:px-16 pb-16 md:pb-20 space-y-6">
        <p className="handwritten text-5xl md:text-6xl text-[#12456c]">photography</p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-3xl md:text-4xl font-extrabold text-[#12456c]">
          <a
            href="/photography/travel"
            className="text-[var(--accent)] hover:underline underline-offset-4"
          >
            travel
          </a>
          <span className="hidden md:inline text-[#12456c]">/</span>
          <a
            href="/photography/food"
            className="text-[#12456c] hover:underline underline-offset-4"
          >
            food
          </a>
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
