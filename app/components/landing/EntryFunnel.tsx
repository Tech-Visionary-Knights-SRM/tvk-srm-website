export function EntryFunnel() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Open Challenge",
      duration: "2 weeks",
      cut: "70% eliminated",
      desc: "A public challenge open to all SRM students. No interviews, no resumes. You submit work — code, designs, strategies, or systems — and it speaks for itself.",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/20",
    },
    {
      phase: "Phase 2",
      title: "Execution Month",
      duration: "4 weeks",
      cut: "30% eliminated",
      desc: "Survivors enter a month of real project sprints. You'll work on actual deliverables with deadlines. We measure output quality, consistency, and collaboration under pressure.",
      color: "text-orange-400",
      borderColor: "border-orange-400/20",
    },
    {
      phase: "Phase 3",
      title: "Core Induction",
      duration: "Final selection",
      cut: "15–25 members",
      desc: "The final cohort. You've proven you can ship. Now you get access to the full system — tracks, tiers, compensation, and real product work.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/20",
    },
  ];

  return (
    <section id="entry" className="py-24 sm:py-32 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          02 — Entry Funnel
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          3-Phase Selection
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          We don't pick members from interviews. We run them through a gauntlet.
          Only the ones who ship survive.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`border ${p.borderColor} rounded-lg p-8 bg-gray-950/50`}
            >
              <p className={`text-xs uppercase tracking-widest ${p.color} mb-2`}>
                {p.phase}
              </p>
              <h3 className="text-2xl font-bold text-white mb-1">{p.title}</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-500">{p.duration}</span>
                <span className="text-sm text-gray-600">|</span>
                <span className={`text-sm font-medium ${p.color}`}>
                  {p.cut}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            ~300 applicants → ~90 survive Phase 1 → ~30 survive Phase 2 →{" "}
            <span className="text-white font-medium">15–25 inducted</span>
          </p>
        </div>
      </div>
    </section>
  );
}
