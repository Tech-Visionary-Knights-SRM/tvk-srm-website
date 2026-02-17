export function FacultyAdvisor() {
  return (
    <section id="advisor" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          09 — Faculty Advisor Role
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          What We're Asking For
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          TEVIK SRM needs a faculty advisor to serve as the institutional bridge
          between the club and SRM's administration. The role is advisory — not
          operational.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              The advisor's role
            </h3>
            <div className="space-y-4">
              {[
                "Serve as the club's official faculty representative to the university",
                "Provide guidance on aligning club activities with institutional goals",
                "Quarterly check-ins with student leadership to review progress",
                "Optional involvement in research direction and output review",
              ].map((item) => (
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
              What the advisor gets
            </h3>
            <div className="space-y-4">
              {[
                "Co-authorship credit on club research output, if involved in the work",
                "A student team actively producing research in an emerging, high-impact area",
                "Visibility into industry trends through the Techcora partnership",
                "A low time commitment — quarterly reviews, not weekly meetings",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-mono text-sm mt-0.5">
                    →
                  </span>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
