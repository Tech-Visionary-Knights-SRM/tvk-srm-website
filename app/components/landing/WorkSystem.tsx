export function WorkSystem() {
  return (
    <section id="work" className="py-24 sm:py-32 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          06 — Work System
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          What You Actually Work On
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          No mock projects. No tutorials. You build things that ship to real
          users or real clients.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Project types */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Project Types
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Micro SaaS Products",
                  desc: "Small, focused tools built end-to-end by a pod",
                },
                {
                  title: "AI Workflows & Automations",
                  desc: "LLM-powered tools, agents, and internal systems",
                },
                {
                  title: "Client Prototypes",
                  desc: "Paid or partnership-based builds for external stakeholders",
                },
                {
                  title: "Internal Tooling",
                  desc: "Systems that make the club itself run better",
                },
                {
                  title: "Open Source Contributions",
                  desc: "Strategic contributions to high-visibility projects",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-800 rounded-lg p-4"
                >
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Daily & Sprint Rhythm
            </h3>
            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-medium mb-4">Daily Blocks</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Focus work block
                    </span>
                    <span className="text-emerald-400 font-mono">
                      1.5–2 hrs
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Async standup (text update)
                    </span>
                    <span className="text-emerald-400 font-mono">5 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      PR reviews / feedback
                    </span>
                    <span className="text-emerald-400 font-mono">
                      15–30 min
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-medium mb-4">Sprint Cadence</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sprint length</span>
                    <span className="text-emerald-400 font-mono">2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sprint planning</span>
                    <span className="text-emerald-400 font-mono">Monday</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Demo day</span>
                    <span className="text-emerald-400 font-mono">
                      Every other Friday
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Retrospective</span>
                    <span className="text-emerald-400 font-mono">
                      Post-demo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
