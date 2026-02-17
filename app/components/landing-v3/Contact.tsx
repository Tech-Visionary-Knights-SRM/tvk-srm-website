export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          10 — Next Steps
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Let's Talk
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
          We'd welcome the opportunity to discuss this proposal in detail —
          answer questions, refine the scope, and explore how TEVIK SRM can best
          serve the institution and its students.
        </p>
        <p className="text-gray-500 mb-10">
          Interested in advising, collaborating, or learning more? We'd love to
          hear from you.
        </p>

        <a
          href="mailto:club@techcora.in"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get in Touch
        </a>

        <p className="mt-6 text-sm text-gray-600">club@techcora.in</p>
      </div>

      <footer className="mt-24 border-t border-gray-800 pt-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span>Tech Visionary Knights SRM</span>
          <span>
            Sponsored by Techcora &middot; SRM Institute of Science and
            Technology
          </span>
        </div>
      </footer>
    </section>
  );
}
