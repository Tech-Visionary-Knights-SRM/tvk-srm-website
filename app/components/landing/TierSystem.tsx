export function TierSystem() {
  const tiers = [
    {
      tier: 0,
      name: "Probation",
      stipend: "₹0",
      desc: "New inductees. Proving ground. No pay until you demonstrate consistent output over 4 weeks.",
      color: "bg-gray-800",
      accent: "text-gray-400",
      ring: "ring-gray-700",
    },
    {
      tier: 1,
      name: "Builder",
      stipend: "₹1k–3k/mo",
      desc: "You ship consistently. You hit deadlines. You've earned trust and a seat at the table.",
      color: "bg-gray-800",
      accent: "text-emerald-400",
      ring: "ring-emerald-900",
    },
    {
      tier: 2,
      name: "Individual Contributor",
      stipend: "₹3k–7k/mo",
      desc: "High-output operator. You own deliverables end-to-end. Others learn from your work.",
      color: "bg-gray-800",
      accent: "text-blue-400",
      ring: "ring-blue-900",
    },
    {
      tier: 3,
      name: "Pod Lead",
      stipend: "₹7k–15k/mo",
      desc: "You lead a pod of 3–5 people. You're responsible for their output, not just yours.",
      color: "bg-gray-800",
      accent: "text-purple-400",
      ring: "ring-purple-900",
    },
    {
      tier: 4,
      name: "Product Lead",
      stipend: "₹15k–20k/mo",
      desc: "You own an entire product or vertical. Strategy, execution, team — it's all on you.",
      color: "bg-gray-800",
      accent: "text-amber-400",
      ring: "ring-amber-900",
    },
  ];

  return (
    <section id="tiers" className="py-24 sm:py-32 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          04 — Tier System
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Progression Ladder
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          Promotions are data-driven, not seniority-based. Your performance
          score determines your tier. Move up or get moved out.
        </p>

        <div className="space-y-4">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className={`${t.color} ring-1 ${t.ring} rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8`}
            >
              <div className="flex items-center gap-4 sm:w-48 shrink-0">
                <span className={`text-3xl font-black ${t.accent} font-mono`}>
                  T{t.tier}
                </span>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className={`text-sm font-medium ${t.accent}`}>
                    {t.stipend}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
