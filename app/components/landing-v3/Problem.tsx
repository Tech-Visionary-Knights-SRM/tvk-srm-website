export function Problem() {
  const effects = [
    {
      order: "First-order",
      title: "Task automation",
      desc: "AI systems already write code, draft legal documents, generate reports, and analyze datasets faster than junior professionals. Entry-level tasks — the traditional training ground for graduates — are being automated.",
    },
    {
      order: "Second-order",
      title: "Role compression",
      desc: "Teams shrink as AI augments individual output. Companies hire fewer people at higher skill bars. The gap between 'has a degree' and 'can do the job' widens.",
    },
    {
      order: "Third-order",
      title: "Credential devaluation",
      desc: "When AI can pass professional exams and produce textbook-quality work, degrees alone stop signaling competence. Employers increasingly look for demonstrated judgment, adaptability, and real project output.",
    },
  ];

  return (
    <section id="problem" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          01 — The Problem
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          The Graduate Employment Landscape Is Shifting
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Students graduating between 2026 and 2030 will enter a job market
          fundamentally different from the one current curricula were designed
          for. AI is not a future threat — it is a present transformation that
          higher education must address.
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
          <p className="text-amber-400 font-medium mb-2">
            The institutional question
          </p>
          <p className="text-gray-400 leading-relaxed">
            If the skills students are learning today can be replicated by AI
            tomorrow, what should institutions be doing to prepare them? TEVIK
            SRM exists to research that question — and act on the answers.
          </p>
        </div>
      </div>
    </section>
  );
}
