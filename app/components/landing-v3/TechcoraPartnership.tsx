export function TechcoraPartnership() {
  const provides = [
    "Operational funding for club activities, events, and infrastructure",
    "Mentorship access from working professionals in AI and software",
    "Cloud credits, development tools, and technical infrastructure",
    "Internship interview opportunities for active club members",
  ];

  const doesNot = [
    "Techcora does not control the club's research direction or conclusions",
    "Techcora does not decide club membership or leadership elections",
    "Techcora does not own educational content or research produced by the club",
    "Membership does not obligate students to work for or with Techcora",
  ];

  return (
    <section id="partnership" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          06 — Industry Partnership
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Techcora Partnership
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          TEVIK SRM is sponsored by Techcora, a technology company whose mission
          is to contribute to India's technical leadership. This partnership
          provides the club with resources and industry access while maintaining
          full academic independence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              What Techcora provides
            </h3>
            <div className="space-y-4">
              {provides.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-mono text-sm mt-0.5">
                    →
                  </span>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Boundaries of the partnership
            </h3>
            <div className="space-y-4">
              {doesNot.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-gray-600 font-mono text-sm mt-0.5">
                    —
                  </span>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border border-gray-800 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-white mb-3">
            Why this alignment works
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Techcora's mission — contributing to India's technical excellence —
            directly aligns with TEVIK SRM's goal of preparing students for the
            AI era. The company benefits from access to well-prepared talent;
            the club benefits from funding, mentorship, and industry context.
            Both parties benefit from a transparent, well-defined relationship
            that creates value for SRM's student community.
          </p>
        </div>
      </div>
    </section>
  );
}
