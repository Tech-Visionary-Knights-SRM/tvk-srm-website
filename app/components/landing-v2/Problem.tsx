export function Problem() {
  const effects = [
    {
      order: "First-order",
      title: "Task automation",
      desc: "AI already writes code, drafts legal documents, generates reports, and analyzes data faster than junior professionals. Entry-level tasks are vanishing.",
    },
    {
      order: "Second-order",
      title: "Role compression",
      desc: "Companies need fewer people per team. Middle-management layers shrink. One person with AI does what five did before — and hiring bars rise accordingly.",
    },
    {
      order: "Third-order",
      title: "Credential devaluation",
      desc: "When AI can pass exams and produce textbook-quality work, degrees alone stop signaling competence. Employers will look for proof of judgment, adaptability, and real output.",
    },
  ];

  return (
    <section id="problem" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          01 — The Problem
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          AI Is Rewriting the Rules of Work
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Students graduating between 2026 and 2030 will enter a job market
          fundamentally different from the one their curricula were designed
          for. The disruption isn't coming — it's here.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {effects.map((e) => (
            <div
              key={e.order}
              className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-emerald-400 mb-3 block">
                {e.order}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">
                {e.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-amber-900/40 bg-amber-950/10 rounded-lg p-8">
          <p className="text-amber-400 font-medium mb-2">The core question</p>
          <p className="text-gray-400 leading-relaxed">
            If the skills students are learning today can be replicated by AI
            tomorrow, what should they be learning instead? That's the question
            TEVIK SRM exists to answer — and act on.
          </p>
        </div>
      </div>
    </section>
  );
}
