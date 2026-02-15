export function ScoringSystem() {
  const metrics = [
    { name: "Execution Quality", weight: 30, desc: "Code/design/deliverable quality, completeness, and polish" },
    { name: "Consistency", weight: 20, desc: "Hitting deadlines, daily/weekly output rhythm" },
    { name: "Velocity", weight: 15, desc: "Speed of delivery relative to scope and complexity" },
    { name: "Collaboration", weight: 15, desc: "PR reviews, helping teammates, async communication" },
    { name: "Initiative", weight: 10, desc: "Identifying problems, proposing solutions, self-starting" },
    { name: "Growth", weight: 10, desc: "Skill improvement over time, learning new domains" },
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

        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.name} className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-white font-semibold w-48 sm:w-56 shrink-0">
                  {m.name}
                </span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${m.weight}%` }}
                  />
                </div>
                <span className="text-emerald-400 font-mono text-sm font-bold w-12 text-right">
                  {m.weight}%
                </span>
              </div>
              <p className="text-xs text-gray-500 pl-0 sm:pl-56 sm:ml-4">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-3">Score Thresholds</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Below 40</span>
              <p className="text-red-400 font-medium">Probation / Exit</p>
            </div>
            <div>
              <span className="text-gray-500">40–59</span>
              <p className="text-yellow-400 font-medium">Tier 1 — Builder</p>
            </div>
            <div>
              <span className="text-gray-500">60–79</span>
              <p className="text-blue-400 font-medium">Tier 2 — IC</p>
            </div>
            <div>
              <span className="text-gray-500">80+</span>
              <p className="text-purple-400 font-medium">Tier 3+ — Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
