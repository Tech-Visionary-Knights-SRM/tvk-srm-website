export function Incentives() {
  const incentives = [
    {
      title: "Founder Track",
      desc: "Top performers get mentored on launching their own startup. Access to pitch coaching, market research support, and potential seed-stage connections.",
      icon: "🚀",
    },
    {
      title: "Direct Hiring Pipeline",
      desc: "Partner companies and startups hire directly from our Tier 3+ members. No applications — they come to you.",
      icon: "💼",
    },
    {
      title: "Revenue Share",
      desc: "When a product you built generates revenue, you get a cut. The pod that ships it shares in the upside.",
      icon: "📈",
    },
    {
      title: "Strategy Sessions",
      desc: "Monthly 1-on-1s with industry operators, founders, and senior engineers. Not motivational talks — tactical advice.",
      icon: "🧠",
    },
    {
      title: "Tool & Resource Access",
      desc: "Premium subscriptions, cloud credits, design tools, and AI APIs — all covered for active members.",
      icon: "🔧",
    },
    {
      title: "Alumni Network",
      desc: "Once you've been Tier 2+, you're in the network forever. Job referrals, project collaborations, and founder introductions.",
      icon: "🌐",
    },
  ];

  return (
    <section id="incentives" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          09 — Beyond the Stipend
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Incentives Beyond Money
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          The stipend is table stakes. The real value is what the system builds
          around you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incentives.map((item) => (
            <div
              key={item.title}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
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
