"use client";

const navLinks = [
  { label: "about", href: "/#about" },
  { label: "videos", href: "/videos" },
  { label: "photography", href: "/photography" },
  { label: "contact", href: "/#contact" },
];

const stats = [
  {
    title: "120M+ lifetime views",
    caption: "Over 1.7 million views on TikTok — noticed by REI, Barstool Sports, Meshki, Simple Mills",
  },
  { title: "250K engaged audience", caption: "Authentic reach grown through consistent posts" },
  { title: "35% avg watch-through", caption: "Hooky storytelling keeps viewers watching" },
  { title: "Brands & collabs", caption: "Open to partnerships that fit the vibe" },
];

function PhoneFrame() {
  return (
    <div className="relative w-full h-full rounded-[2.2rem] border-[6px] border-[#2c2c2c] bg-black shadow-2xl overflow-hidden">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-[#1f1f1f]" />
      <div className="absolute top-4 right-5 w-10 h-1 rounded-full bg-[#1f1f1f]" />
      <div className="absolute inset-6 rounded-[1.8rem] bg-gradient-to-b from-[#0f0f0f] via-[#050505] to-black" />
    </div>
  );
}

export default function VideosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <header className="w-full px-6 md:px-10 pt-6 pb-6 mb-10 md:pb-8 md:mb-14">
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

      <section className="w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-12 md:space-y-14">
            {stats.map((item) => (
              <div
                key={item.title}
                className="grid md:grid-cols-[1.05fr_1fr] items-center md:justify-items-center gap-4 md:gap-8"
              >
                <div className="flex justify-center">
                  <div className="w-60 h-[520px] md:w-72 md:h-[620px]">
                    <PhoneFrame />
                  </div>
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#12456c]">
                    {item.title}
                  </p>
                  <p className="text-xl md:text-2xl text-[#5b92d4] handwritten md:font-normal">
                    {item.caption}
                  </p>
                </div>
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
