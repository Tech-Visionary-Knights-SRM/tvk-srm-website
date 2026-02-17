export function WhatWeDo() {
  const pillars = [
    {
      number: "01",
      title: "Research AI Capabilities & Effects",
      desc: "We study what AI can and can't do today, how fast it's improving, and what that means for specific professions. Our research focuses on real-world displacement patterns — not hype, not fear.",
      items: [
        "Track AI capability benchmarks across domains",
        "Analyze job-market shifts and hiring-pattern changes",
        "Publish internal research briefs for members",
      ],
    },
    {
      number: "02",
      title: "Identify Valuable Post-AI Skills",
      desc: "Not all skills degrade equally. We map which competencies remain uniquely human, which become more valuable with AI augmentation, and which are being automated away.",
      items: [
        "Systems thinking and complex problem decomposition",
        "AI-tool fluency and prompt engineering",
        "Cross-domain judgment and ethical reasoning",
      ],
    },
    {
      number: "03",
      title: "Build Curricula & Content",
      desc: "Research without action is academic. We turn our findings into learning paths, workshops, content series, and hands-on projects that students can use to build real, demonstrable skills.",
      items: [
        "Structured learning paths for each track",
        "Workshops and hands-on project sprints",
        "Content series for broader student distribution",
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
          Three Pillars
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Everything TEVIK SRM does falls into three interconnected areas of
          work.
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
