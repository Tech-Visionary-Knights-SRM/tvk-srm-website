export function Outcomes() {
  const timeline = [
    { month: "Month 0–2", event: "Selection & onboarding", detail: "300 apply → 30 survive the gauntlet" },
    { month: "Month 3–6", event: "First products ship", detail: "2–3 micro SaaS or client projects live" },
    { month: "Month 7–12", event: "Revenue generation begins", detail: "First paying customers, initial client contracts" },
    { month: "Month 13–18", event: "System scales", detail: "Second cohort inducted, Tier 3+ members lead pods" },
    { month: "Month 19–24", event: "Self-sustaining operation", detail: "80%+ costs covered by revenue, 5–8 exceptional operators produced" },
  ];

  return (
    <section id="outcomes" className="py-24 sm:py-32 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          10 — 24-Month Outcome
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          The Expected Trajectory
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          This isn't a hope. It's a plan with numbers.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {[
            { number: "300+", label: "Applicants per cycle" },
            { number: "~30", label: "Survive selection" },
            { number: "5–8", label: "Exceptional per year" },
            { number: "24mo", label: "To full self-sufficiency" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gray-800" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={t.month} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 w-8 sm:w-16 shrink-0 flex justify-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 ${
                      i === timeline.length - 1
                        ? "bg-emerald-400"
                        : "bg-gray-700"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-emerald-400 font-mono text-sm mb-1">
                    {t.month}
                  </p>
                  <p className="text-white font-semibold mb-1">{t.event}</p>
                  <p className="text-sm text-gray-500">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
