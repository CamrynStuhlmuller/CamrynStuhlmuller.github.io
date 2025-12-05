"use client";

const socials = [
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M19.4 7.8c-1.4-.2-2.6-.8-3.7-1.7v7.8c0 3.7-3 6.6-6.7 6.6A6.7 6.7 0 0 1 2.4 14 6.7 6.7 0 0 1 7.6 7v3.4c-.8.5-1.4 1.4-1.4 2.4 0 1.6 1.3 2.9 3 2.9 1.6 0 3-1.3 3-3V2.5h3c.2 1.6 1.4 2.9 3 3.1v2.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.6"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" className="fill-current stroke-none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <rect x="3" y="9" width="3.2" height="11" rx="0.6" />
      <rect x="9" y="9" width="3.2" height="11" rx="0.6" />
      <path d="M9 11.7c0-2 1.6-3.7 3.7-3.7 1.2 0 2 .4 2.6 1.1V9h3.2v11h-3.2v-6c0-1.3-.7-2.1-1.7-2.1-1 0-1.6.8-1.6 2.1v6H9v-11z" />
      <circle cx="4.6" cy="5.2" r="1.6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <header className="w-full px-4 md:px-6 pt-6 pb-8 mb-16 md:mb-20 bg-[var(--background)]">
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

      <section className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 px-4 md:px-6 pb-16 lg:pb-20 max-w-7xl mx-auto w-full" id="home">
        <div className="flex-1">
          <div className="max-w-xl space-y-5">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-[#103a66]">
                Camryn
                <br />
                Stuhlmuller
              </h1>
              <p className="text-lg md:text-xl text-[#1f3556] font-semibold">
                Philadelphia, PA &nbsp; | &nbsp; camrynstuhlmuller@gmail.com
              </p>
            </div>

            <div className="h-[1px] bg-[#1f3556] opacity-60" />

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-extrabold text-[#3f8cd6]">
                Photographer &amp; Content Creator
              </p>
              <p className="handwritten text-2xl text-[#2a4f7d]">
                travel + food + lifestyle
              </p>
            </div>

            <div className="flex items-center gap-5 pt-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#103a66] hover:text-[var(--accent)] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-center w-full">
          <div className="relative w-full max-w-[23rem] aspect-[3/4] rotate-2 overflow-hidden shadow-2xl border-4 border-white transition-transform duration-[1500ms] ease-out hover:scale-[1.12]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f7fafc] via-[#d6e7fb] to-[#c1d8f8]" />
            <div className="relative z-10 flex items-center justify-center h-full text-[#1f3556] font-semibold">
              Photo placeholder
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full bg-[#0f4b74] text-[#d5e7fa] px-6 md:px-10 lg:px-16 py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="handwritten text-4xl md:text-5xl text-[#a8c7f1]">Hi there!</h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-lg md:text-xl leading-relaxed font-crimson">
            <p className="md:pr-6">
              I&apos;ve always had an eye for detail and aesthetics and have been capturing the beauty of life
              through photography since I was 13.
              <br />
              <br />
              From travel and food to nature and everyday moments, I&apos;m drawn to the details that make life special.
            </p>
            <p className="md:pl-6">
              I&apos;ve expanded from photography into video and content creation, where I share authentic experiences and
              connect with a like-minded community.
              <br />
              <br />
              I&apos;m always seeking projects that align with my interests and am open to collaborating with brands and
              creators of all sizes!
            </p>
          </div>
          <div className="flex justify-end">
            <p className="handwritten text-2xl text-[#a8c7f1]">have a look around :)</p>
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
