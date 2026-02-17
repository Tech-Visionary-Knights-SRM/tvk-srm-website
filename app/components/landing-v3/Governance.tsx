export function Governance() {
  const items = [
    {
      title: "Elected student leadership",
      desc: "Club leads are elected annually by active members. Any member in good standing can stand for election regardless of year, department, or track.",
    },
    {
      title: "Open membership",
      desc: "Membership is open to students across all departments and years at SRM. There are no CGPA requirements or departmental restrictions.",
    },
    {
      title: "Transparent use of funds",
      desc: "All sponsorship funding and expenditures are documented and visible to members. Quarterly financial summaries are shared with the faculty advisor.",
    },
    {
      title: "Open educational output",
      desc: "All research, learning materials, and curricula produced by the club remain open and accessible. Educational content is not commercialized.",
    },
    {
      title: "Annual review cycle",
      desc: "Each academic year includes leadership elections, sponsorship renewal, a public retrospective of the club's work, and updated goals for the next term.",
    },
    {
      title: "Code of conduct",
      desc: "All members are bound by a code of conduct aligned with SRM's student policies. The club maintains a respectful, inclusive, and academically honest environment.",
    },
  ];

  return (
    <section id="governance" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          08 — Governance
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Structure & Accountability
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          TEVIK SRM is designed to be self-governing, transparent, and aligned
          with SRM's institutional values.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
