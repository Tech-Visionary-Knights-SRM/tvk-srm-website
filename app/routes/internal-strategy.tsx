import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TEVIK SRM — Internal Strategy Document" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function InternalStrategy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="border border-amber-900/40 bg-amber-950/10 rounded-lg p-6 mb-16">
          <p className="text-amber-400 font-medium mb-1">
            Internal document — not linked anywhere
          </p>
          <p className="text-sm text-gray-500">
            This page contains the full strategic model for TEVIK SRM including
            talent pipeline, commercialization, and the two-layer structure. It
            is not indexed by search engines and is not linked from the public
            site.
          </p>
        </div>

        {/* ---- Two-Layer Model ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            01 — Core Structure
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Two-Layer Model
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            TEVIK SRM operates as two distinct but connected layers. This
            separation keeps the university-facing club clean and independently
            valuable, while creating a structured path for commercial work under
            Techcora.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Layer 1 — The Club (TEVIK SRM)
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                University-registered student club. All output is open and
                educational. This is the public face.
              </p>
              <div className="space-y-3">
                {[
                  "Research, learning, skill-building, content, workshops",
                  "All output is open — research briefs, learning materials, workshop content",
                  "Led by elected student leads (Techcora interns can run for election like anyone)",
                  "Funded by Techcora as a named sponsor",
                  "No IP complications — everything is open/educational",
                  "Faculty advisor provides institutional bridge",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-0.5">
                      →
                    </span>
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">
                Layer 2 — The Build Program (Techcora)
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Separate from the club formally. Recruited from it. Operates
                under Techcora's banner with clear contributor agreements.
              </p>
              <div className="space-y-3">
                {[
                  "When a club project shows commercial potential, Techcora offers to take it into this program",
                  "Members who join sign a contributor agreement",
                  "They get: stipend / internship letter / rev-share (defined per project)",
                  "Techcora gets: IP ownership, right to commercialize",
                  "Participation is fully voluntary — club members can stay in Layer 1 forever",
                  "Code lives under Techcora repos, business runs under Techcora entity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber-400 font-mono text-sm mt-0.5">
                      →
                    </span>
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border border-gray-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Why two layers?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The club stays university-friendly with zero IP ambiguity. The
              build program gives ambitious members a real commercial path with
              fair compensation. Techcora gets IP and a talent pipeline. The
              separation means the club can survive even if the build program
              changes or Techcora pivots — and vice versa.
            </p>
          </div>
        </section>

        {/* ---- Talent Pipeline ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            02 — Talent Pipeline
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            From Club Member to Techcora Team
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            The club is a natural top-of-funnel for Techcora's hiring. Members
            self-select for curiosity, AI interest, and builder mentality — and
            the club gives months of observable work before any hiring decision.
          </p>

          <div className="space-y-6">
            {[
              {
                stage: "Stage 1 — Club member",
                desc: "Student joins TEVIK SRM through the open onboarding process. Works on research, content, or projects within their chosen track. All work is educational and open.",
                outcome:
                  "Techcora observes: work quality, thinking, collaboration, initiative.",
              },
              {
                stage: "Stage 2 — Build program contributor",
                desc: "When a member shows strong output and interest, they're invited to join a Techcora build-program project. They sign a contributor agreement and receive a stipend or internship letter.",
                outcome:
                  "Techcora evaluates: ability to ship, work under real constraints, own a piece of a product.",
              },
              {
                stage: "Stage 3 — Internship",
                desc: "High-performing build-program contributors are offered formal Techcora internships. They work on company products with the team, with a clear path to a full-time offer.",
                outcome:
                  "Techcora decides: cultural fit, long-term potential, role alignment.",
              },
              {
                stage: "Stage 4 — Full-time hire",
                desc: "After a successful internship, the offer is straightforward. By this point, both sides have 6-12+ months of real working history together.",
                outcome:
                  "Result: zero-risk hire with deep mutual context. No interview theater.",
              },
            ].map((s) => (
              <div
                key={s.stage}
                className="border border-gray-800 rounded-lg p-8"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.stage}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {s.desc}
                </p>
                <p className="text-sm text-gray-600 italic">{s.outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-gray-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Key principle
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Each stage is opt-in. A member can stay in Stage 1 forever and
              still get full value from the club. There is no pressure to move
              to Stage 2, 3, or 4. The pipeline works because it's genuinely
              good for both sides — not because it's coerced.
            </p>
          </div>
        </section>

        {/* ---- Commercialization ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            03 — Commercialization
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            How Products Get Built & Monetized
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Products built in the Techcora build program are owned by Techcora
            and commercialized under the Techcora banner. Revenue flows through
            Techcora's accounts. Contributors are compensated according to their
            agreements.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                The flow
              </h3>
              <div className="space-y-3">
                {[
                  "Club project shows commercial potential (identified by members or Techcora)",
                  "Techcora proposes moving it into the build program",
                  "Interested members sign contributor agreements and join",
                  "Development continues under Techcora repos with Techcora tooling",
                  "Product is launched under Techcora's brand and entity",
                  "Revenue is managed by Techcora; contributors receive agreed compensation",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                IP ownership rules
              </h3>
              <div className="space-y-3">
                {[
                  "Club (Layer 1) output: open, no IP restrictions, belongs to no one / everyone",
                  "Build program (Layer 2) output: owned by Techcora per contributor agreement",
                  "Work done by members outside the club and build program: entirely theirs",
                  "The contributor agreement ONLY covers work done within the build program scope",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gray-600 font-mono text-sm mt-0.5">
                      —
                    </span>
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Contributor Agreement ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            04 — Contributor Agreement
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Members Sign (Layer 2 Only)
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Before anyone writes commercial code under Techcora, they sign a
            short contributor agreement. This should be drafted by a lawyer. Key
            terms to include:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "IP assignment",
                desc: "Work done in the build program belongs to Techcora. Clearly scoped — only covers work within the program, not everything a member ever creates.",
              },
              {
                title: "Compensation",
                desc: "What the contributor receives: internship certificate, stipend, revenue share percentage, job-offer pathway — defined per project or per contributor.",
              },
              {
                title: "Exit terms",
                desc: "If a contributor leaves mid-project, their existing contributions stay with Techcora. No clawbacks on compensation already earned. Clean departure.",
              },
              {
                title: "Non-compete scope",
                desc: "Keep narrow or skip entirely. Aggressive non-competes will scare off the best people. A narrow non-solicitation clause is usually sufficient.",
              },
              {
                title: "Duration",
                desc: "Agreement covers a specific project or time period. Contributors re-confirm or exit at natural checkpoints (semester boundaries, project completion).",
              },
              {
                title: "Transparency",
                desc: "The agreement itself should be readable and short (1-2 pages). No legalese traps. Members should feel comfortable showing it to their parents.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Decision Rights ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            05 — Decision Rights
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Who Decides What
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Clear decision rights prevent conflicts. Every member should know
            who makes which decisions and why.
          </p>

          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-gray-400 font-medium">
                    Decision
                  </th>
                  <th className="text-left p-4 text-gray-400 font-medium">
                    Who decides
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Club events, workshops, content topics",
                    "Club leads (elected)",
                  ],
                  ["Club membership and onboarding", "Club leads"],
                  [
                    "Research direction and conclusions",
                    "Club leads + members",
                  ],
                  [
                    "Which projects move to build program",
                    "Techcora + club leads jointly",
                  ],
                  [
                    "Commercial direction of build-program projects",
                    "Techcora",
                  ],
                  [
                    "How sponsorship money is spent on club",
                    "Club leads (quarterly transparency)",
                  ],
                  ["Internship and job offers", "Techcora"],
                  [
                    "Contributor agreement terms",
                    "Techcora (with legal review)",
                  ],
                ].map(([decision, who]) => (
                  <tr
                    key={decision}
                    className="border-b border-gray-800/50 hover:bg-gray-900/30"
                  >
                    <td className="p-4 text-gray-400">{decision}</td>
                    <td className="p-4 text-white">{who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---- Commitments & Contingencies ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            06 — Commitments & Contingencies
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Techcora Commits To & What-If Scenarios
          </h2>

          <div className="space-y-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Techcora's commitments (written, visible to all members)
              </h3>
              <div className="space-y-3">
                {[
                  "Fund club operations at a defined amount per semester",
                  "Provide mentorship access from working professionals",
                  "Provide infrastructure — cloud credits, tools, development environments",
                  "Offer internship interviews (not guaranteed positions) to active members",
                  "Not pressure club leads on research conclusions or content direction",
                  "Allow club to use Techcora's name; reference the club's work publicly",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-0.5">
                      →
                    </span>
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                What-if scenarios
              </h3>
              <div className="space-y-6">
                {[
                  {
                    q: "What if Techcora stops funding?",
                    a: "Club continues independently with university support. Club keeps all open-source work, research, and content. Techcora keeps build-program IP.",
                  },
                  {
                    q: "What if a club lead disagrees with Techcora's direction?",
                    a: "On club matters, club leads have final say. On build-program matters, Techcora has final say. If someone doesn't want to work on a Techcora project, they don't join that build program.",
                  },
                  {
                    q: "What if a member builds something great independently?",
                    a: "It's theirs. The contributor agreement only covers work done within the Techcora build program — not everything a member ever creates.",
                  },
                  {
                    q: "What if the club wants to commercialize something without Techcora?",
                    a: "Layer 1 output is open and educational — it doesn't get commercialized. If members want to build something commercial outside the build program, they do it on their own, unrelated to the club.",
                  },
                ].map((item) => (
                  <div key={item.q}>
                    <p className="text-white font-medium mb-1">{item.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Annual Reset ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            07 — Annual Reset
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Yearly Checkpoint
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Every academic year includes a structured reset to prevent
            institutional rot and give everyone a natural checkpoint.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Leadership elections",
                desc: "New elections for club leads. Incumbent Techcora interns can re-run but are not guaranteed seats.",
              },
              {
                title: "Sponsorship renewal",
                desc: "Techcora sponsorship is renewed (or not) with updated terms for the new academic year.",
              },
              {
                title: "Contributor re-confirmation",
                desc: "Existing build-program contributors re-confirm their participation or exit cleanly.",
              },
              {
                title: "Public retrospective",
                desc: "Published summary of what the club did, what went to the build program, what members received, and goals for the next year.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-gray-800 pt-8 text-sm text-gray-600 text-center">
          TEVIK SRM — Internal Strategy Document — Not for public distribution
        </footer>
      </div>
    </div>
  );
}
