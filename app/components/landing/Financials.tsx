export function Financials() {
  const budget = [
    { item: "Member Stipends (all tiers)", amount: "₹4,00,000", pct: 50 },
    { item: "Tools & Infrastructure", amount: "₹1,20,000", pct: 15 },
    { item: "Cloud & Hosting", amount: "₹80,000", pct: 10 },
    { item: "Events & Demo Days", amount: "₹60,000", pct: 7.5 },
    { item: "Training & Resources", amount: "₹60,000", pct: 7.5 },
    { item: "Emergency / Buffer", amount: "₹80,000", pct: 10 },
  ];

  const revenue = [
    { source: "Client Projects & Prototypes", desc: "Paid work from startups, local businesses, and SRM-affiliated projects" },
    { source: "Micro SaaS Revenue", desc: "Products built by pods that generate recurring revenue" },
    { source: "Institutional Sponsorship", desc: "SRM department funding and tech company partnerships" },
    { source: "Member Contributions", desc: "Optional, only at Tier 2+ for access to premium tools/resources" },
  ];

  return (
    <section id="financials" className="py-24 sm:py-32 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          08 — Financial Transparency
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Where the Money Goes
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          Every rupee is tracked and published monthly. No black boxes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Budget breakdown */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Year 1 Budget (~₹8,00,000)
            </h3>
            <div className="space-y-4">
              {budget.map((b) => (
                <div key={b.item}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">{b.item}</span>
                    <span className="text-sm text-white font-mono">
                      {b.amount}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500/70 rounded-full"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue sources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              How It Scales
            </h3>
            <div className="space-y-4">
              {revenue.map((r) => (
                <div
                  key={r.source}
                  className="border border-gray-800 rounded-lg p-4"
                >
                  <p className="text-white font-medium mb-1">{r.source}</p>
                  <p className="text-sm text-gray-500">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-emerald-900/40 bg-emerald-950/20 rounded-lg p-4">
              <p className="text-sm text-emerald-400 font-medium mb-1">
                Goal: Self-sustaining by Month 18
              </p>
              <p className="text-xs text-gray-500">
                Client revenue + SaaS products should cover 80%+ of operating
                costs, reducing dependency on sponsorships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
