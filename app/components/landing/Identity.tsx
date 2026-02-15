export function Identity() {
  return (
    <section id="identity" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          01 — What This Is
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Not a Club. A Talent Forge.
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          XXX exists for one purpose: to identify raw potential, stress-test it
          under real conditions, upgrade skills at an accelerated pace, and
          retain the best operators SRM produces.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              The Pipeline
            </h3>
            <div className="space-y-4">
              {[
                { step: "Identify", desc: "Find the builders who ship, not just talk" },
                { step: "Stress-test", desc: "Real deadlines, real users, real pressure" },
                { step: "Upgrade", desc: "Structured skill acceleration across tracks" },
                { step: "Retain", desc: "Keep the best — give them reasons to stay" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-mono text-sm mt-0.5">
                    →
                  </span>
                  <div>
                    <span className="text-white font-medium">{item.step}</span>
                    <span className="text-gray-500"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What we're NOT */}
          <div className="border border-red-900/40 bg-red-950/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-6">
              What This is NOT
            </h3>
            <div className="space-y-3">
              {[
                "Not an events club that organizes fests",
                "Not a certificate-collecting society",
                "Not a hackathon participation group",
                "Not a place for attendance and resume padding",
                "Not run by committee or seniority",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-mono text-sm mt-0.5">
                    ✕
                  </span>
                  <span className="text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
