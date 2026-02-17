import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TEVIK SRM — Core Directives" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function InternalDirectives() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="border border-red-900/40 bg-red-950/10 rounded-lg p-6 mb-16">
          <p className="text-red-400 font-bold text-lg mb-1">
            Core Directives — Read this first. Read this often.
          </p>
          <p className="text-sm text-gray-500">
            This document defines what we do, how fast we move, and how we know
            we're winning. If your work doesn't connect to something on this
            page, stop doing it.
          </p>
        </div>

        {/* ---- The Mission ---- */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">The Mission</h2>
          <div className="border border-gray-800 rounded-lg p-8">
            <p
              className="text-white font-bold leading-tight"
              style={{ fontSize: 28 }}
            >
              Make SRM students the most AI-ready graduates in India within 12
              months.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Not "raise awareness." Not "host events." Not "build a community."
              Make students demonstrably more prepared for AI-era careers than
              students at any other institution in the country. Everything we do
              is measured against this.
            </p>
          </div>
        </section>

        {/* ---- Core Assumptions ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            01 — Core Assumptions
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            What We Believe Is True
          </h2>
          <p className="text-gray-500 mb-10">
            These are not opinions. These are the premises we operate on. If any
            of these are wrong, our strategy is wrong. Challenge them with
            evidence, not feelings.
          </p>

          <div className="space-y-4">
            {[
              {
                assumption: "AI is automating entry-level white-collar work right now",
                implication:
                  "Students graduating with only textbook skills will struggle to find employment at the level they expect. The window to prepare them is closing.",
              },
              {
                assumption: "Universities cannot update curricula fast enough",
                implication:
                  "The institutional approval cycle for curriculum changes is 1-3 years. AI capabilities change in weeks. Someone has to bridge this gap. That's us.",
              },
              {
                assumption: "Most students don't know this is happening",
                implication:
                  "They're optimizing for grades in a system that's being made obsolete. They need to be shown the problem before they'll care about the solution.",
              },
              {
                assumption: "Skills, not credentials, will determine employability",
                implication:
                  "A portfolio of real AI-augmented work beats a degree certificate. We need to help students build the portfolio, not collect more certificates.",
              },
              {
                assumption: "A small, fast team can outperform a large, slow institution",
                implication:
                  "We don't need permission to teach. We need to be so useful that the institution adopts what we build. Prove it works first, standardize later.",
              },
            ].map((a) => (
              <div
                key={a.assumption}
                className="border border-gray-800 rounded-lg p-6"
              >
                <p className="text-white font-semibold mb-2">{a.assumption}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {a.implication}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- The Only Metric ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            02 — Success Metrics
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            How We Know We're Winning
          </h2>

          <div className="border border-emerald-900/40 bg-emerald-950/10 rounded-lg p-8 mb-8">
            <p className="text-emerald-400 font-bold text-xl mb-2">
              Primary metric
            </p>
            <p className="text-white text-2xl font-bold">
              Students reached per month with skills their classes didn't teach
              them.
            </p>
            <p className="text-gray-500 mt-3 text-sm">
              This is the number. Put it on a dashboard. Review it every week.
              Every decision should move this number up.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-6">
            Supporting metrics
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                metric: "Workshop attendance rate",
                target: "80%+ of registered show up",
                why: "If people register but don't show, the content isn't compelling enough or the scheduling is wrong.",
              },
              {
                metric: "Content pieces shipped per month",
                target: "8+ (research briefs, videos, guides, workshops)",
                why: "Output velocity. If we're not shipping, we're not learning what works.",
              },
              {
                metric: "Repeat attendance",
                target: "50%+ attend more than one session",
                why: "If they come back, we're useful. If they don't, we're wasting their time.",
              },
              {
                metric: "YouTube views per video (first 7 days)",
                target: "500+ within SRM student population",
                why: "Measures reach beyond physical attendance. Content should spread.",
              },
              {
                metric: "Research-to-curriculum conversion time",
                target: "Under 14 days",
                why: "A research finding should become a teachable workshop within 2 weeks. Not next semester. Not next month.",
              },
              {
                metric: "Active contributing members",
                target: "25+ producing output every sprint",
                why: "Below this, we're a friend group. Above this, we're an organization that can sustain itself.",
              },
              {
                metric: "Student skill demonstrations",
                target: "100+ students with published AI-augmented project work by month 12",
                why: "The ultimate proof. Students who can show real work, not just talk about AI.",
              },
              {
                metric: "Faculty engagement",
                target: "3+ faculty actively referencing or using our materials",
                why: "Institutional adoption. If faculty use our content, we've bridged the gap.",
              },
            ].map((m) => (
              <div
                key={m.metric}
                className="border border-gray-800 rounded-lg p-6"
              >
                <p className="text-white font-semibold mb-1">{m.metric}</p>
                <p className="text-emerald-400 text-sm font-medium mb-2">
                  Target: {m.target}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {m.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- 12-Month Plan ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            03 — 12-Month Execution Plan
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Timeline
          </h2>
          <p className="text-gray-500 mb-10">
            Deadlines are set at the 50th percentile — the point where you think
            "this is tight but doable if nothing goes wrong." That's the
            deadline. Not the optimistic case. Not the comfortable case. The
            "probably possible" case. If you hit 70% of these on time, we're
            moving fast enough.
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Phase 1 — Foundation
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Weeks 1–3
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Goal: Club exists, team is assembled, first output is shipped.
              </p>
              <div className="space-y-3">
                {[
                  { task: "University registration complete", deadline: "Day 7" },
                  { task: "Core team of 8-10 assembled across 4 tracks", deadline: "Day 10" },
                  { task: "All accounts created (YouTube, GitHub, Discord, socials)", deadline: "Day 5" },
                  { task: "First research brief published internally: 'What can AI do today?'", deadline: "Day 14" },
                  { task: "First workshop delivered to 30+ students", deadline: "Day 21" },
                  { task: "First YouTube video published", deadline: "Day 21" },
                  { task: "Website live with faculty-pitch content", deadline: "Day 7" },
                ].map((t) => (
                  <div
                    key={t.task}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-mono text-sm mt-0.5">
                        □
                      </span>
                      <span className="text-sm text-gray-400">{t.task}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono shrink-0">
                      {t.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Phase 2 — Prove It Works
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Weeks 4–8
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Goal: Consistent output cadence. Students are showing up
                repeatedly. Content is spreading.
              </p>
              <div className="space-y-3">
                {[
                  { task: "Weekly workshop cadence established (every week, no exceptions)", deadline: "Week 4" },
                  { task: "4+ YouTube videos published, measuring what gets views", deadline: "Week 6" },
                  { task: "100 unique students reached through workshops + content", deadline: "Week 6" },
                  { task: "Second research brief: 'Which skills survive AI?'", deadline: "Week 5" },
                  { task: "First structured learning path published (any track)", deadline: "Week 7" },
                  { task: "Discord active with 50+ members", deadline: "Week 6" },
                  { task: "Sprint system running — 2-week cycles with demos", deadline: "Week 4" },
                  { task: "50% repeat attendance at workshops", deadline: "Week 8" },
                ].map((t) => (
                  <div
                    key={t.task}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-mono text-sm mt-0.5">
                        □
                      </span>
                      <span className="text-sm text-gray-400">{t.task}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono shrink-0">
                      {t.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Phase 3 — Scale
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Months 3–6
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Goal: Institution notices. Faculty engage. Content reaches
                beyond the club.
              </p>
              <div className="space-y-3">
                {[
                  { task: "300+ unique students reached", deadline: "Month 4" },
                  { task: "Learning paths live for all 4 tracks", deadline: "Month 4" },
                  { task: "3+ faculty aware and at least 1 actively using our materials", deadline: "Month 5" },
                  { task: "YouTube channel at 1,000+ subscribers", deadline: "Month 5" },
                  { task: "First student project showcase — 20+ students present AI-augmented work", deadline: "Month 6" },
                  { task: "Research output: 6+ published briefs covering major AI-impacted fields", deadline: "Month 6" },
                  { task: "Club membership at 40+ active contributors", deadline: "Month 5" },
                  { task: "First collaboration with another SRM department or club", deadline: "Month 6" },
                ].map((t) => (
                  <div
                    key={t.task}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-mono text-sm mt-0.5">
                        □
                      </span>
                      <span className="text-sm text-gray-400">{t.task}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono shrink-0">
                      {t.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 4 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Phase 4 — Institutional Impact
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Months 7–12
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Goal: The institution can't ignore us. Students' career outcomes
                are visibly better. Other colleges ask how we did it.
              </p>
              <div className="space-y-3">
                {[
                  { task: "1,000+ unique students reached through all channels combined", deadline: "Month 9" },
                  { task: "100+ students with published AI-augmented project portfolios", deadline: "Month 10" },
                  { task: "3+ faculty actively using or co-creating materials with the club", deadline: "Month 9" },
                  { task: "YouTube at 5,000+ subscribers with consistent weekly uploads", deadline: "Month 12" },
                  { task: "At least 1 club-developed curriculum adopted or referenced by a department", deadline: "Month 12" },
                  { task: "Build program (Layer 2) launched with first commercial project", deadline: "Month 8" },
                  { task: "10+ members placed in AI-relevant internships (Techcora or elsewhere)", deadline: "Month 12" },
                  { task: "Second annual cohort recruited — club survives its first leadership transition", deadline: "Month 12" },
                ].map((t) => (
                  <div
                    key={t.task}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-mono text-sm mt-0.5">
                        □
                      </span>
                      <span className="text-sm text-gray-400">{t.task}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono shrink-0">
                      {t.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Operating Rules ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            04 — Operating Rules
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-gray-500 mb-10">
            These are not suggestions. Break them and explain why, or follow
            them.
          </p>

          <div className="space-y-4">
            {[
              {
                rule: "Ship weekly",
                detail:
                  "Every week, something goes out — a workshop, a video, a research brief, a guide. If a week passes with zero output, something is broken. Find it and fix it.",
              },
              {
                rule: "Research that doesn't become curriculum within 14 days is a failure",
                detail:
                  "Research is an input, not an output. If you learned something about AI's impact, it should become a teachable session within 2 weeks. Otherwise you're doing academic tourism.",
              },
              {
                rule: "Measure everything, review weekly",
                detail:
                  "Attendance, views, repeat rates, output count, member contributions. If you can't measure it, you can't improve it. Monday review, every week, 30 minutes max.",
              },
              {
                rule: "Delete before you add",
                detail:
                  "Before starting a new initiative, ask what you'll stop doing. We have limited people. Every 'yes' is a 'no' to something else. If a track or project isn't producing, kill it and reallocate.",
              },
              {
                rule: "No meetings without a deliverable",
                detail:
                  "Every meeting ends with: who does what, by when. If a meeting doesn't need a deliverable, it's a conversation. Have it on Discord, not in a room.",
              },
              {
                rule: "Feedback loops under 48 hours",
                detail:
                  "Someone submits work → they get feedback within 48 hours. Not next week. Not 'when I get to it.' Fast feedback is how people improve fast.",
              },
              {
                rule: "Defaults, not debates",
                detail:
                  "If a decision doesn't have clear stakes, go with the first reasonable option and iterate. Save debates for decisions that are hard to reverse. Everything else — just pick and move.",
              },
              {
                rule: "The question filter",
                detail:
                  "Before doing anything, ask: 'Does this help more students learn skills their classes don't teach?' If yes, do it. If no, ask why you're doing it. If you don't have a good answer, stop.",
              },
            ].map((r) => (
              <div
                key={r.rule}
                className="border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-2">{r.rule}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- What We Do NOT Do ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400 mb-4">
            05 — What We Do NOT Do
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Stop List
          </h2>
          <p className="text-gray-500 mb-10">
            These are common club activities that feel productive but aren't.
            We don't do them. If you find yourself doing any of these, stop
            immediately and refocus on something from the 12-month plan.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                item: "Organizing fests or cultural events",
                why: "Not our mission. Other clubs do this. We do research and curriculum.",
              },
              {
                item: "Certificate distribution for attendance",
                why: "Certificates for showing up teach students that presence equals achievement. It doesn't.",
              },
              {
                item: "Talks without follow-up action",
                why: "A guest lecture that doesn't lead to a workshop, guide, or project is entertainment, not education.",
              },
              {
                item: "Internal bureaucracy (committees, sub-committees, forms)",
                why: "We have 4 tracks and sprint teams. That's the structure. If you need a committee to make a decision, the decision isn't important enough.",
              },
              {
                item: "Competing with other clubs",
                why: "We collaborate or we ignore. We don't compete for 'best club' awards. The metric is student impact, not institutional politics.",
              },
              {
                item: "Spending more than 20% of time on social media aesthetics",
                why: "Content quality matters. Graphic design perfectionism doesn't. Ship the video with decent audio. Don't spend 3 days on a thumbnail.",
              },
            ].map((s) => (
              <div
                key={s.item}
                className="border border-red-900/30 bg-red-950/5 rounded-lg p-6"
              >
                <h3 className="text-red-400 font-semibold mb-2">{s.item}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Final Note ---- */}
        <section className="mb-20">
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              The standard
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              In 12 months, a student should be able to say: "I joined TEVIK
              SRM. I learned how AI is changing my field. I built projects using
              AI tools. I can show you my work. I got an internship because of
              what I built, not what I memorized."
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              If that statement is true for 100 students by month 12, we've
              succeeded. If it's true for 10, we've failed expensively. If it's
              true for 1,000, we've built something that should be replicated at
              every university in the country.
            </p>
            <p className="text-white font-semibold">
              That's the standard. Everything else is details.
            </p>
          </div>
        </section>

        <footer className="border-t border-gray-800 pt-8 text-sm text-gray-600 text-center">
          TEVIK SRM — Core Directives — Internal use only
        </footer>
      </div>
    </div>
  );
}
