export function WhatWeDo() {
  const pillars = [
    {
      number: "01",
      title: "Research AI Capabilities & Effects",
      desc: "We study what AI can and cannot do today, how rapidly it is improving, and what that means for specific professions and industries. Our research focuses on real-world displacement patterns — grounded in data, not hype.",
      items: [
        "Track AI capability benchmarks across professional domains",
        "Analyze job-market shifts and evolving hiring patterns",
        "Produce research briefs and reports for members and faculty",
      ],
    },
    {
      number: "02",
      title: "Identify Valuable Post-AI Skills",
      desc: "Not all skills degrade equally under AI pressure. We map which competencies remain uniquely human, which become more valuable with AI augmentation, and which are being automated away.",
      items: [
        "Systems thinking and complex problem decomposition",
        "AI-tool fluency and human-AI collaboration",
        "Cross-domain judgment, ethical reasoning, and communication",
      ],
    },
    {
      number: "03",
      title: "Build Curricula & Learning Content",
      desc: "Research without action is incomplete. We turn our findings into structured learning paths, workshops, content series, and hands-on projects that students can use to build real, demonstrable skills.",
      items: [
        "Structured learning paths for each focus track",
        "Hands-on workshops and project-based sprints",
        "Open content series for distribution across SRM",
      ],
    },
  ];

  return (
    <section id="what-we-do" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          03 — What We Do
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Three Pillars of Work
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Everything TEVIK SRM does falls into three interconnected areas —
          research informs skill identification, which informs curriculum
          development.
        </p>

        <div className="space-y-8">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl font-black text-gray-800 shrink-0">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <div className="space-y-2">
                    {p.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-sm mt-0.5">
                          →
                        </span>
                        <span className="text-sm text-gray-500">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
