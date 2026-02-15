export function Tracks() {
  const tracks = [
    {
      name: "Engineering",
      icon: "⚙",
      color: "border-blue-500/30",
      accent: "text-blue-400",
      disciplines: [
        "Full-stack Development",
        "AI/ML Engineering",
        "DevOps & Infrastructure",
        "Mobile Development",
        "Systems Programming",
      ],
    },
    {
      name: "Product",
      icon: "◇",
      color: "border-purple-500/30",
      accent: "text-purple-400",
      disciplines: [
        "Product Management",
        "UX Research & Design",
        "Data Analytics",
        "User Testing",
        "Roadmap Strategy",
      ],
    },
    {
      name: "Growth & Business",
      icon: "△",
      color: "border-amber-500/30",
      accent: "text-amber-400",
      disciplines: [
        "Growth Hacking",
        "Content & SEO",
        "Sales & Outreach",
        "Market Research",
        "Partnership Development",
      ],
    },
    {
      name: "Systems & Ops",
      icon: "□",
      color: "border-emerald-500/30",
      accent: "text-emerald-400",
      disciplines: [
        "Process Design",
        "Project Management",
        "Documentation & SOPs",
        "Quality Assurance",
        "Internal Tooling",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          03 — Tracks
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          4 Specialization Verticals
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          Every member picks a primary track. You go deep, not wide. Mastery
          over generalism.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.name}
              className={`border ${track.color} rounded-lg p-8 bg-gray-950/30`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl ${track.accent}`}>{track.icon}</span>
                <h3 className="text-xl font-bold text-white">{track.name}</h3>
              </div>
              <div className="space-y-2">
                {track.disciplines.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="text-sm text-gray-400">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
