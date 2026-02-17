import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TEVIK SRM — Core Directives v2" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function InternalDirectivesV2() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="border border-red-900/40 bg-red-950/10 rounded-lg p-6 mb-16">
          <p className="text-red-400 font-bold text-lg mb-1">
            Core Directives v2 — The 3-Month Sprint
          </p>
          <p className="text-sm text-gray-500">
            Phase 1 is a focused 3-month operation targeting final-year students
            graduating in May/June 2026. Every other initiative is Phase 2. Do
            not split focus.
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
              50–100 final-year SRM students graduate with practical AI fluency
              and at least one AI-augmented project they can demo in interviews.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Not AI theory. Not ML research. Practical, demonstrable ability to
              use AI tools to build things faster, better, and smarter than
              someone who can't. The kind of skill that makes an interviewer say
              "when can you start?"
            </p>
          </div>

          <div className="border border-amber-900/40 bg-amber-950/10 rounded-lg p-6 mt-6">
            <p className="text-amber-400 font-medium mb-1">Why final-years first?</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              They graduate in 3–4 months. They're actively interviewing. They
              need this the most and they need it now. If we can make a visible
              difference for students who are weeks away from the job market,
              everything else — faculty buy-in, institutional adoption,
              underclassmen recruitment — follows naturally. Results first.
              Reputation second.
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

          <div className="space-y-4">
            {[
              {
                assumption:
                  "Final-year students don't need to learn AI — they need to learn to USE AI",
                implication:
                  "We're not teaching neural networks. We're teaching them to use Claude, Cursor, Copilot, and AI-powered workflows to ship work faster. The tool fluency gap is the opportunity.",
              },
              {
                assumption:
                  "The fastest way to learn AI tools is to use them on something you already care about",
                implication:
                  "Don't create artificial projects. Help them use AI on their final-year project, their portfolio, their resume, their interview prep. AI becomes the accelerator, not the subject.",
              },
              {
                assumption:
                  "A demo-able project beats a certificate in every interview",
                implication:
                  "The deliverable for every student is a GitHub repo with a working project they built using AI tools, and the ability to explain how AI made them faster/better.",
              },
              {
                assumption:
                  "Final-years are time-poor but motivation-rich",
                implication:
                  "They're juggling exams, placements, and project submissions. We get 2–3 hours per week max. Every minute must be directly useful to their immediate goals.",
              },
              {
                assumption:
                  "50 students with real results is worth more than 500 with certificates",
                implication:
                  "Depth over breadth. 50 students who can demo AI-augmented work in interviews will generate more word-of-mouth and institutional credibility than 500 attendance entries.",
              },
            ].map((a) => (
              <div
                key={a.assumption}
                className="border border-gray-800 rounded-lg p-6"
              >
                <p className="text-white font-semibold mb-2">
                  {a.assumption}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {a.implication}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Success Metrics ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            02 — Success Metrics
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Phase 1 Scorecard
          </h2>

          <div className="border border-emerald-900/40 bg-emerald-950/10 rounded-lg p-8 mb-8">
            <p className="text-emerald-400 font-bold text-xl mb-2">
              The number that matters
            </p>
            <p className="text-white text-2xl font-bold">
              Final-year students who can demo an AI-augmented project they
              built during the program.
            </p>
            <p className="text-gray-500 mt-3 text-sm">
              Target: 50 minimum. 100 is a win. Under 30 means something
              fundamental was wrong with the approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                metric: "Students enrolled in the program",
                target: "100+ final-years sign up",
                by: "End of Week 2",
              },
              {
                metric: "Workshop attendance rate",
                target: "70%+ of enrolled show up consistently",
                by: "Tracked weekly",
              },
              {
                metric: "Students who complete at least 1 AI-augmented project",
                target: "50–100",
                by: "End of Month 3",
              },
              {
                metric: "Projects published on GitHub with proper documentation",
                target: "50+",
                by: "End of Month 3",
              },
              {
                metric: "Students who report using AI tools in interviews",
                target: "30+",
                by: "End of Month 3",
              },
              {
                metric: "Student satisfaction score",
                target: "8+/10 average on 'Was this useful for your career?'",
                by: "Exit survey",
              },
            ].map((m) => (
              <div
                key={m.metric}
                className="border border-gray-800 rounded-lg p-6"
              >
                <p className="text-white font-semibold mb-1">{m.metric}</p>
                <p className="text-emerald-400 text-sm font-medium mb-1">
                  Target: {m.target}
                </p>
                <p className="text-xs text-gray-600">{m.by}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- The 3-Month Plan ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            03 — Phase 1: The 3-Month Plan
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Week-by-Week Execution
          </h2>
          <p className="text-gray-500 mb-4">
            All deadlines are 50th percentile. Tight but doable. No buffer
            built in — if something slips, cut scope, don't extend timelines.
          </p>
          <p className="text-gray-600 text-sm mb-10">
            March 2026 → May 2026. 12 weeks. That's what we have.
          </p>

          <div className="space-y-6">
            {/* Sprint 0 */}
            <div className="border border-red-900/30 bg-red-950/5 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-red-400">
                  Sprint 0 — Setup (Before Launch)
                </h3>
                <span className="text-red-400 font-mono text-sm shrink-0 ml-4">
                  Week 0
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                This must be done before a single student is contacted.
              </p>
              <div className="space-y-3">
                {[
                  { task: "University registration complete or in progress", deadline: "Day 1" },
                  { task: "Core team briefed: 5–6 club members who will run workshops", deadline: "Day 2" },
                  { task: "Workshop curriculum designed for 6 sessions (see below)", deadline: "Day 5" },
                  { task: "All accounts live (Discord, YouTube, GitHub org)", deadline: "Day 3" },
                  { task: "Landing page updated with final-year program details", deadline: "Day 5" },
                  { task: "Outreach plan: how to reach 100+ final-years in 1 week", deadline: "Day 5" },
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

            {/* Month 1 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Month 1 — Hook & Equip
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Weeks 1–4
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                Goal: Final-years see the problem, see the tools, start using
                them on their own work.
              </p>
              <p className="text-gray-600 text-xs mb-6">
                2 workshops per week. 90 minutes each. Hands-on, not lectures.
              </p>
              <div className="space-y-3">
                {[
                  {
                    task: "Week 1 — 'The Wake-Up Call' workshop: Live demo of AI doing tasks final-years think are their job skills. Show, don't tell.",
                    deadline: "W1",
                  },
                  {
                    task: "Week 1 — 'Your First AI-Powered Hour': Hands-on session. Students bring their laptop, leave with Claude/Cursor set up and one task completed with AI.",
                    deadline: "W1",
                  },
                  {
                    task: "Week 2 — 'AI for Your Final Year Project': Take their existing FYP, show how AI accelerates every part — research, code, documentation, presentation.",
                    deadline: "W2",
                  },
                  {
                    task: "Week 2 — 'Build a Portfolio in 90 Minutes': Use AI to scaffold a personal portfolio site, write project descriptions, generate a solid LinkedIn summary.",
                    deadline: "W2",
                  },
                  {
                    task: "Week 3 — 'AI-Augmented Coding': Practical session on Cursor/Copilot workflows. Build a small project from scratch with AI pair-programming.",
                    deadline: "W3",
                  },
                  {
                    task: "Week 3 — 'AI for Interview Prep': Use AI to research companies, prep answers, practice system design, generate study plans for specific roles.",
                    deadline: "W3",
                  },
                  {
                    task: "Week 4 — 'Ship Your First AI Project': Students pick a project idea and build an MVP in a single session using AI tools. Must be deployable.",
                    deadline: "W4",
                  },
                  {
                    task: "Week 4 — Project office hours: 1-on-1 help for students who started but got stuck. Unblock them.",
                    deadline: "W4",
                  },
                  {
                    task: "100+ final-year students enrolled and attending",
                    deadline: "W2",
                  },
                  {
                    task: "Every workshop recorded and uploaded to YouTube within 48 hours",
                    deadline: "Ongoing",
                  },
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

            {/* Month 2 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Month 2 — Build
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Weeks 5–8
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                Goal: Students are actively building projects with AI. Club
                shifts from teaching to coaching.
              </p>
              <p className="text-gray-600 text-xs mb-6">
                1 workshop per week + project office hours + async Discord
                support.
              </p>
              <div className="space-y-3">
                {[
                  {
                    task: "Each student picks or refines their AI-augmented project (if they haven't already)",
                    deadline: "W5",
                  },
                  {
                    task: "Students grouped into 'build squads' of 4–5, each with a club member as coach",
                    deadline: "W5",
                  },
                  {
                    task: "Week 5 — Advanced workshop: AI for data analysis, research synthesis, or domain-specific use (rotate based on departments)",
                    deadline: "W5",
                  },
                  {
                    task: "Week 6 — 'Document Your Work': How to write a good README, record a demo video, present your project in 3 minutes",
                    deadline: "W6",
                  },
                  {
                    task: "Week 7 — Mid-point check: Every student demos their work-in-progress to their squad. Feedback and course-correct.",
                    deadline: "W7",
                  },
                  {
                    task: "Week 8 — 'AI in Your Industry': Domain-specific session — AI in CS, AI in ECE, AI in mechanical, AI in business. What's changing in YOUR field.",
                    deadline: "W8",
                  },
                  {
                    task: "Discord active with daily questions and peer help",
                    deadline: "Ongoing",
                  },
                  {
                    task: "50+ students with work-in-progress projects on GitHub",
                    deadline: "W8",
                  },
                  {
                    task: "YouTube: 8+ workshop recordings live, track which ones get views",
                    deadline: "W8",
                  },
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

            {/* Month 3 */}
            <div className="border border-gray-800 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Month 3 — Ship & Show
                </h3>
                <span className="text-emerald-400 font-mono text-sm shrink-0 ml-4">
                  Weeks 9–12
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                Goal: Projects are finished, published, and presentable.
                Students use them in real interviews.
              </p>
              <p className="text-gray-600 text-xs mb-6">
                Focus shifts entirely to finishing, polishing, and presenting.
              </p>
              <div className="space-y-3">
                {[
                  {
                    task: "Week 9 — Project polish sprint: README, demo video, clean code, deploy to a live URL",
                    deadline: "W9",
                  },
                  {
                    task: "Week 10 — 'How to Talk About Your AI Work in Interviews': Practice pitching your project in 2 minutes. Peer feedback.",
                    deadline: "W10",
                  },
                  {
                    task: "Week 11 — TEVIK SRM Demo Day: Students present their projects. Invite faculty. Invite Techcora mentors. Record everything.",
                    deadline: "W11",
                  },
                  {
                    task: "Week 12 — Publish showcase: All projects compiled into a public showcase page. Share across LinkedIn, SRM channels.",
                    deadline: "W12",
                  },
                  {
                    task: "50+ finished projects on GitHub with READMEs and demo videos",
                    deadline: "W12",
                  },
                  {
                    task: "Exit survey: 'Did this help your career readiness?' — target 8+/10",
                    deadline: "W12",
                  },
                  {
                    task: "Compile results document for faculty/dean: X students, Y projects, Z placed with AI skills mentioned",
                    deadline: "W12",
                  },
                  {
                    task: "YouTube: Demo Day highlights video published",
                    deadline: "W12",
                  },
                  {
                    task: "Identify 10–15 standout students for Techcora internship pipeline (Layer 2 starts here)",
                    deadline: "W12",
                  },
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

        {/* ---- The Workshop Curriculum ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            04 — Workshop Curriculum
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            What We Teach (And What We Don't)
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-emerald-900/40 bg-emerald-950/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                We teach
              </h3>
              <div className="space-y-3">
                {[
                  "How to use Claude, ChatGPT, and Cursor to write code 3–5x faster",
                  "How to use AI for research, writing, and analysis",
                  "How to build a complete project using AI as a pair programmer",
                  "How to document and present AI-augmented work",
                  "How to talk about AI skills in interviews",
                  "How AI is changing specific industries and roles",
                  "What to learn next based on your career direction",
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
              <h3 className="text-xl font-semibold text-gray-500 mb-4">
                We don't teach (in Phase 1)
              </h3>
              <div className="space-y-3">
                {[
                  "Machine learning theory or model architectures",
                  "How to train or fine-tune models",
                  "AI research methodology",
                  "AI ethics or policy (important but not urgent for job interviews)",
                  "Anything that takes more than 2 weeks to produce a visible result",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gray-600 font-mono text-sm mt-0.5">
                      —
                    </span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-6">
            <p className="text-white font-semibold mb-2">The teaching rule</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every workshop must pass this test: "Can a student walk out of
              this session and immediately use what they learned on their own
              work?" If the answer is no, redesign the session.
            </p>
          </div>
        </section>

        {/* ---- Team Structure ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            05 — Team Structure for Phase 1
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Who Does What
          </h2>
          <p className="text-gray-500 mb-10">
            Phase 1 needs 5–6 people doing clearly defined jobs. No committees.
            No sub-committees. No "coordinators" who don't produce output.
          </p>

          <div className="space-y-4">
            {[
              {
                role: "Workshop Lead (1 person)",
                does: "Designs and delivers workshops. Owns the curriculum. Responsible for every session being hands-on, useful, and on time.",
                metric: "Workshop quality score (post-session feedback) stays above 8/10.",
              },
              {
                role: "Build Coaches (2–3 people)",
                does: "Each coaches 3–4 build squads. Unblocks students on Discord and in office hours. Reviews projects. Gives feedback within 48 hours.",
                metric: "Number of students who finish a project in their squads.",
              },
              {
                role: "Content & Recording (1 person)",
                does: "Records every workshop. Edits and uploads to YouTube within 48 hours. Creates short clips for Instagram/LinkedIn. Handles all social posting.",
                metric: "Every workshop is online within 48 hours. YouTube views per video.",
              },
              {
                role: "Outreach & Ops (1 person)",
                does: "Gets students in the door. Manages enrollment, attendance tracking, Discord onboarding, scheduling. Runs the exit survey.",
                metric: "100+ enrolled. 70%+ attendance rate. Survey response rate above 80%.",
              },
            ].map((r) => (
              <div
                key={r.role}
                className="border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-1">{r.role}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-2">
                  {r.does}
                </p>
                <p className="text-xs text-emerald-400">
                  Measured by: {r.metric}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Operating Rules ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            06 — Operating Rules
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Phase 1 Non-Negotiables
          </h2>

          <div className="space-y-4">
            {[
              {
                rule: "No lecture-only sessions",
                detail:
                  "Every workshop has a hands-on component. Students must leave having DONE something, not just having HEARD something. If they didn't open their laptop, the session failed.",
              },
              {
                rule: "48-hour upload rule",
                detail:
                  "Workshop happened Tuesday evening → it's on YouTube by Thursday evening. No exceptions. Students who missed it should be able to catch up immediately.",
              },
              {
                rule: "Every student ships to GitHub",
                detail:
                  "No private projects. No 'I'll push it later.' If it's not on GitHub with a README by the end of the program, it doesn't count as a completed project.",
              },
              {
                rule: "Weekly check-in, 20 minutes max",
                detail:
                  "Monday. Everyone reports: what shipped last week, what's blocked, what's planned this week. If it takes more than 20 minutes, your team is too big or you're debating instead of reporting.",
              },
              {
                rule: "Help them build what THEY want to build",
                detail:
                  "Don't assign project topics. Ask them what they want to build or what their FYP is about, then show them how AI makes it 5x better. Ownership drives completion.",
              },
              {
                rule: "Cut what's not working by Week 4",
                detail:
                  "If a workshop format isn't getting attendance, change it. If a track has 3 students, merge it. If a squad coach isn't responsive, replace them. Month 2 must start with only things that work.",
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

        {/* ---- Phase 1 → Phase 2 Transition ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            07 — What Comes After
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Phase 1 → Phase 2 Transition
          </h2>
          <p className="text-gray-500 mb-10">
            Phase 1 ends when the final-years graduate. Phase 2 begins
            immediately. But Phase 2 is earned — it only happens if Phase 1
            produces results.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Phase 1 gives us
              </h3>
              <div className="space-y-3">
                {[
                  "Proof that the model works — X students, Y projects, Z satisfaction score",
                  "Workshop content that's tested and recorded — ready to reuse",
                  "YouTube channel with real content and real views",
                  "Faculty awareness — they saw the Demo Day",
                  "A results document we can show the dean",
                  "10–15 standout students identified for Techcora internships",
                  "A team that knows how to execute",
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
                Phase 2 adds
              </h3>
              <div className="space-y-3">
                {[
                  "Expand to 2nd and 3rd years — longer runway, deeper skill-building",
                  "AI research track — now we have the credibility to do real research",
                  "Layer 2 (build program) launches with first commercial project",
                  "Curriculum proposals to departments — backed by Phase 1 data",
                  "Scale to 500+ students across years",
                  "Club leadership election and first governance cycle",
                  "Replicate model at other institutions (long-term)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gray-500 font-mono text-sm mt-0.5">
                      →
                    </span>
                    <span className="text-sm text-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- The Standard ---- */}
        <section className="mb-20">
          <div className="border border-emerald-900/40 bg-emerald-950/10 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              The standard
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              In 3 months, a final-year student should be able to walk into an
              interview and say: "I can show you a project I built using AI
              tools. I can explain how I used Claude to research, Cursor to
              code, and AI workflows to move 5x faster than I could alone. Here's
              my GitHub. Here's a live demo."
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The interviewer won't have seen that from any other candidate from
              any other college. That's the edge we're building.
            </p>
            <p className="text-white font-semibold">
              50 students with that edge in 3 months. That's Phase 1. Everything
              else is Phase 2.
            </p>
          </div>
        </section>

        <footer className="border-t border-gray-800 pt-8 text-sm text-gray-600 text-center">
          TEVIK SRM — Core Directives v2 — Phase 1: Final-Year Sprint — Internal
          use only
        </footer>
      </div>
    </div>
  );
}
