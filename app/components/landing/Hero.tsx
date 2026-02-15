export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          SRM Institute of Science and Technology
        </p>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6">
          XXX
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald-400 tracking-wide mb-8">
          Build. Ship. Lead.
        </p>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          An execution-driven talent forge where the top 1% of student builders
          get stress-tested, leveled up, and deployed on real products.
        </p>

        <a
          href="#identity"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
        >
          Scroll to learn more
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
