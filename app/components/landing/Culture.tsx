export function Culture() {
  const rules = [
    {
      rule: "Deadlines are non-negotiable",
      detail:
        "Miss a deadline without prior communication = automatic score deduction. Two misses in a sprint = probation review.",
    },
    {
      rule: "No attendance tracking",
      detail:
        "We don't care when or where you work. We only care that the work ships on time and meets quality bars.",
    },
    {
      rule: "Output is the only metric",
      detail:
        "No points for showing up. No points for effort. No points for enthusiasm. Only shipped work counts.",
    },
    {
      rule: "Data-driven promotions",
      detail:
        "Your score determines your tier. No politics, no favoritism. The spreadsheet doesn't lie.",
    },
    {
      rule: "Radical transparency",
      detail:
        "All scores are visible to all members. All budgets are public. All decisions are documented.",
    },
    {
      rule: "No hierarchy of ego",
      detail:
        "A Tier 1 builder can challenge a Tier 4 lead's decision — with evidence. The best argument wins.",
    },
    {
      rule: "Default to async",
      detail:
        "Meetings are expensive. Write it down first. Meet only when text isn't enough.",
    },
    {
      rule: "Exit with dignity",
      detail:
        "If you're removed, you'll know exactly why (your score) and you'll get a clean handoff period.",
    },
  ];

  return (
    <section id="culture" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          07 — Culture & Rules
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Non-Negotiables
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          These aren't guidelines. They're the operating system. Everyone —
          including leadership — is bound by them.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {rules.map((r) => (
            <div
              key={r.rule}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{r.rule}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
