export function StudentOutcomes() {
  const outcomes = [
    {
      title: "Portfolio of real work",
      desc: "Members graduate with published research, shipped projects, and content they created — tangible proof of capability that goes far beyond coursework or certificates.",
    },
    {
      title: "AI-era skill set",
      desc: "Practical fluency with AI tools, systems thinking, cross-domain problem solving, and the judgment to know when and how to apply AI effectively in professional contexts.",
    },
    {
      title: "Industry-relevant experience",
      desc: "Sprint-based project work mirrors how modern teams operate. Members gain experience with real deadlines, collaboration, and iterative delivery.",
    },
    {
      title: "Internship & career pathways",
      desc: "Active members gain access to internship opportunities through Techcora, the club's industry sponsor — as well as a network of peers and mentors in the AI space.",
    },
    {
      title: "Research & publication credit",
      desc: "Members who contribute to the club's research output can co-author briefs and reports — valuable for higher studies and academic applications.",
    },
    {
      title: "Teaching & leadership experience",
      desc: "Members who build and deliver workshops develop communication and leadership skills that are difficult to acquire through coursework alone.",
    },
  ];

  return (
    <section id="outcomes" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          05 — Student Outcomes
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          What Members Walk Away With
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          TEVIK SRM is designed to produce measurable, career-relevant outcomes
          for every active member — not just participation certificates.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{o.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
