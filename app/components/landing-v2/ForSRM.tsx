export function ForSRM() {
  const benefits = [
    {
      title: "Research Output",
      desc: "Original research on AI's impact on professional careers — publishable, citable, and directly relevant to higher education strategy.",
    },
    {
      title: "Student Employability",
      desc: "Graduates with demonstrable AI-era skills stand out in hiring. TVK members leave with portfolios of real work, not just coursework.",
    },
    {
      title: "Industry Partnerships",
      desc: "Our research and trained students create natural touchpoints with companies navigating the same AI transition — opening doors for SRM.",
    },
    {
      title: "Brand Positioning",
      desc: "SRM becomes known as an institution that doesn't just teach the old syllabus — it actively prepares students for what's next.",
    },
  ];

  return (
    <section id="for-srm" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          04 — For SRM
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Institutional Value
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          TEVIK SRM isn't just a student initiative — it creates tangible value
          for the institution and its broader mission.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {b.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
