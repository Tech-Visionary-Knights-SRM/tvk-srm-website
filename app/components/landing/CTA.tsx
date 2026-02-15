export function CTA() {
  return (
    <section id="apply" className="py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          11 — Apply
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Think You Can Survive?
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
          We don't want your resume. We want to see what you can build. The next
          open challenge will be announced soon.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold rounded-lg transition-colors text-lg"
          >
            Join the Waitlist
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-colors"
          >
            View Past Challenges
          </a>
        </div>

        <p className="text-xs text-gray-600">
          Applications open at the start of each semester. Follow our channels
          to get notified.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            XXX — SRM Institute of Science and Technology
          </p>
          <p className="text-xs text-gray-700">
            Built by the club, for the club.
          </p>
        </div>
      </div>
    </section>
  );
}
