export function Mission() {
  return (
    <section id="mission" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          02 — Mission & Vision
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
          Why We Exist
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              Every SRM student graduates with deep, demonstrable technical
              expertise that remains valuable in an AI-augmented world — not
              because they can outperform AI on routine tasks, but because they
              know how to think, build, and lead alongside it.
            </p>
          </div>

          <div className="border border-emerald-900/40 bg-emerald-950/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Mission
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              TEVIK SRM researches how AI is transforming professional work,
              identifies the skills and knowledge that will remain uniquely
              valuable, and translates that research into actionable curricula,
              content, and learning experiences for students.
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Research AI's impact on white-collar careers",
                "Map the skills that stay valuable post-AI",
                "Build curricula and content to teach those skills",
                "Distribute at scale across SRM's student body",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-mono text-sm mt-0.5">
                    →
                  </span>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
