export function ScoringSystem() {
  const metrics = [
    { name: "Velocity", weight: 30, desc: "Speed of delivery relative to scope and complexity" },
    { name: "Execution Quality", weight: 25, desc: "Code/design/deliverable quality, completeness, and polish" },
    { name: "Consistency", weight: 20, desc: "Hitting deadlines, daily/weekly output rhythm" },
    { name: "Collaboration", weight: 10, desc: "PR reviews, helping teammates, async communication" },
    { name: "Initiative", weight: 10, desc: "Identifying problems, proposing solutions, self-starting" },
    { name: "Growth", weight: 5, desc: "Skill improvement over time, learning new domains" },
  ];

  return (
    <section id="scoring" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          05 — Scoring System
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          100-Point Performance Index
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          Every member has a score. It's updated bi-weekly. It determines your
          tier, your stipend, and whether you stay. Fully transparent.
        </p>

        {/* Metric cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div
              key={m.name}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold">{m.name}</h3>
                <span className="text-2xl font-black text-emerald-400 font-mono leading-none">
                  {m.weight}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Score thresholds */}
        <div className="mt-12 border border-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Score Thresholds</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="border-l-2 border-red-500 pl-3">
              <span className="text-gray-500">Below 40</span>
              <p className="text-red-400 font-medium">Probation / Exit</p>
            </div>
            <div className="border-l-2 border-yellow-500 pl-3">
              <span className="text-gray-500">40 – 59</span>
              <p className="text-yellow-400 font-medium">Tier 1 — Builder</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3">
              <span className="text-gray-500">60 – 79</span>
              <p className="text-blue-400 font-medium">Tier 2 — IC</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-3">
              <span className="text-gray-500">80+</span>
              <p className="text-purple-400 font-medium">Tier 3+ — Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
