import { useRef, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Techcora × SRM — Commitment Report AY 2026–2027" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function SRMCommitmentReport() {
  const reportRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setDownloading(true);

    const html2canvasPro = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");

    const el = reportRef.current;

    // Clone into a fixed-width off-screen container so it renders at
    // A4-proportional size instead of the full browser width
    const clone = el.cloneNode(true) as HTMLElement;
    clone.classList.add("pdf-export");
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    // 794px ≈ A4 width at 96dpi (210mm), gives proper text scale
    clone.style.width = "794px";
    document.body.appendChild(clone);

    try {
      const canvas = await html2canvasPro(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: 794,
      });

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;

      // How many canvas pixels fit in one A4 page's content area
      const pxPerMm = canvas.width / contentWidth;
      const pageContentHeightPx = Math.floor((pageHeight - margin * 2) * pxPerMm);

      // Scan a row of pixels to check if it's blank (white)
      const fullCtx = canvas.getContext("2d")!;
      const isBlankRow = (y: number): boolean => {
        const row = fullCtx.getImageData(0, y, canvas.width, 1).data;
        for (let i = 0; i < row.length; i += 4) {
          // If any pixel is not near-white, the row has content
          if (row[i] < 240 || row[i + 1] < 240 || row[i + 2] < 240) return false;
        }
        return true;
      };

      // Find the best break point: scan upward from the ideal cut
      // looking for a fully white row (gap between content)
      const findBreakPoint = (idealCut: number): number => {
        // Search within 20% above the ideal cut for a blank row
        const searchRange = Math.floor(pageContentHeightPx * 0.2);
        for (let y = idealCut; y > idealCut - searchRange && y > 0; y--) {
          if (isBlankRow(y)) return y;
        }
        // No blank row found — fall back to the ideal cut
        return idealCut;
      };

      // Slice the canvas into page-sized chunks at smart break points
      let yOffset = 0;
      let pageIndex = 0;

      while (yOffset < canvas.height) {
        let sliceEnd: number;
        if (yOffset + pageContentHeightPx >= canvas.height) {
          // Last page — take whatever's left
          sliceEnd = canvas.height;
        } else {
          sliceEnd = findBreakPoint(yOffset + pageContentHeightPx);
        }

        const sliceHeight = sliceEnd - yOffset;

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;
        const ctx = pageCanvas.getContext("2d")!;
        ctx.drawImage(
          canvas,
          0, yOffset, canvas.width, sliceHeight,
          0, 0, canvas.width, sliceHeight,
        );

        const pageImgData = pageCanvas.toDataURL("image/jpeg", 0.98);
        const sliceHeightMm = sliceHeight / pxPerMm;

        if (pageIndex > 0) pdf.addPage();
        pdf.addImage(pageImgData, "JPEG", margin, margin, contentWidth, sliceHeightMm);

        yOffset = sliceEnd;
        pageIndex++;
      }

      pdf.save("Techcora_SRM_Commitment_Report_AY2026-27.pdf");
    } finally {
      document.body.removeChild(clone);
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="mb-10 flex justify-end">
          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 disabled:text-emerald-400 text-gray-950 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
              />
            </svg>
            {downloading ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>

        {/* Report content (captured for PDF) */}
        <div ref={reportRef}>

        {/* Header */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-6">
            Commitment Report — Academic Year 2026–2027
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Techcora's Commitments<br />to SRM College
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            This document outlines the formal commitments from Techcora to SRM
            College for the academic year 2026–2027. It serves as the foundation
            for the Memorandum of Understanding (MOU) between both parties.
          </p>
        </div>

        {/* Confidential notice */}
        <div className="border border-amber-900/40 bg-amber-950/10 rounded-lg p-6 mb-16">
          <p className="text-amber-400 font-medium mb-1">
            Confidential — MOU Foundation Document
          </p>
          <p className="text-sm text-gray-500">
            This report is intended for authorized stakeholders of Techcora and
            SRM College only. It contains the binding commitments that will form
            the basis of the MOU between both institutions for AY 2026–2027. Not
            for public distribution.
          </p>
        </div>

        {/* ---- Executive Summary ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            01 — Executive Summary
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Overview of Commitments
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Techcora commits to a comprehensive partnership with SRM College that
            spans financial sponsorship, employment pathways, mentorship, and
            curriculum development — all aimed at bridging the gap between
            academic learning and real-world industry readiness in a rapidly
            transforming IT landscape.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                metric: "₹4,00,000+",
                label: "Annual Sponsorship",
                desc: "Minimum financial commitment for the academic year",
              },
              {
                metric: "30+",
                label: "Placement Opportunities",
                desc: "For students demonstrating extraordinary technical ability",
              },
              {
                metric: "3–5 hrs",
                label: "Bi-weekly Mentorship",
                desc: "Consistent guidance on student work and progress",
              },
              {
                metric: "Ongoing",
                label: "Research & Curriculum",
                desc: "Identifying future skills and building tools to teach them",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gray-800 rounded-lg p-6"
              >
                <p className="text-3xl font-bold text-emerald-400 mb-1">
                  {item.metric}
                </p>
                <p className="text-white font-semibold mb-2">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Commitment 1: Financial Sponsorship ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            02 — Financial Sponsorship
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Minimum ₹4,00,000 Annual Sponsorship
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Techcora commits to a minimum sponsorship of ₹4,00,000 (Four Lakh
            Indian Rupees) for the TEVIK SRM entity for the academic year
            2026–2027. This funding directly supports the club's operations,
            events, infrastructure, and member development.
          </p>

          <div className="border border-gray-800 rounded-lg p-8 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              What this covers
            </h3>
            <div className="space-y-3">
              {[
                "Club operations — day-to-day running costs, administrative needs, and organizational expenses",
                "Events and workshops — technical events, hackathons, guest speaker sessions, and skill-building workshops",
                "Infrastructure — cloud credits, development tools, software licenses, and computing resources for members",
                "Content and research — production of research briefs, learning materials, and educational content",
                "Member development — certifications, training resources, and competition participation",
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
              Terms & conditions
            </h3>
            <div className="space-y-3">
              {[
                "The ₹4,00,000 is a minimum commitment — actual sponsorship may exceed this based on program scale and performance",
                "Funds will be disbursed in a structured schedule agreed upon during MOU finalization",
                "Club leads will maintain quarterly transparency on how sponsorship funds are utilized",
                "Sponsorship renewal for subsequent academic years will be evaluated annually based on mutual outcomes",
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
        </section>

        {/* ---- Commitment 2: Placement Opportunities ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            03 — Placement Opportunities
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            30 Minimum Placement Opportunities
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Techcora commits to providing a minimum of 30 placement
            opportunities across Techcora and its partner companies for students
            who demonstrate extraordinary technical capabilities during the
            academic year.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Eligibility criteria
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Placement opportunities are merit-based and contingent on
                students exhibiting extraordinary technical capabilities.
                Eligibility will be assessed through:
              </p>
              <div className="space-y-3">
                {[
                  "Demonstrated technical excellence — consistent, high-quality output in club projects, research, or build-program contributions",
                  "Builder mentality — ability to take ownership, ship work independently, and solve real problems",
                  "Collaboration and initiative — active participation in mentorship sessions, peer collaboration, and self-driven skill development",
                  "Domain proficiency — strong competence in their chosen track, validated through observable work over months of club membership",
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

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">
                  At Techcora
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Direct placement opportunities within Techcora's product,
                  engineering, and research teams. Students who have progressed
                  through the club's build program will have a natural advantage
                  given months of observable work history.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">
                  At Partner Companies
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Techcora will leverage its industry network to provide
                  placement opportunities at partner companies. These roles will
                  be aligned with the skills and tracks developed within the club
                  ecosystem.
                </p>
              </div>
            </div>

            <div className="border border-amber-900/30 bg-amber-950/10 rounded-lg p-6">
              <p className="text-amber-400 font-medium text-sm mb-1">
                Important clarification
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                "Placement opportunities" refers to guaranteed interview slots
                and serious hiring consideration — not guaranteed job offers.
                Final hiring decisions depend on role fit, interview performance,
                and business requirements. However, students with strong club
                track records will carry significant credibility into these
                processes.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Commitment 3: Mentorship ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            04 — Mentorship Program
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Bi-Weekly Mentorship Sessions
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Techcora commits to providing consistent, structured mentorship
            through bi-weekly sessions of 3 to 5 hours each, focused on guiding
            student work progress, providing technical feedback, and developing
            professional capabilities.
          </p>

          <div className="border border-gray-800 rounded-lg p-8 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Session structure
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Work review & feedback",
                  desc: "Review of ongoing student projects, research, and deliverables. Direct feedback on code quality, approach, and methodology from working professionals.",
                  time: "~1.5 hrs",
                },
                {
                  title: "Technical deep-dives",
                  desc: "Focused sessions on emerging technologies, real-world engineering practices, and industry tools that students won't encounter in standard coursework.",
                  time: "~1 hr",
                },
                {
                  title: "Career & skill guidance",
                  desc: "One-on-one or small-group guidance on career paths, skill gaps, portfolio building, and interview preparation.",
                  time: "~1 hr",
                },
                {
                  title: "Q&A and open discussion",
                  desc: "Open floor for students to bring questions, challenges, or ideas. Creating space for curiosity-driven exploration.",
                  time: "~0.5–1.5 hrs",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-b border-gray-800/50 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-emerald-400 font-mono text-xs mt-1 w-16 shrink-0">
                    {item.time}
                  </span>
                  <div>
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Mentorship commitments
            </h3>
            <div className="space-y-3">
              {[
                "Bi-weekly cadence — sessions every two weeks throughout the academic year, excluding exam periods and institutional holidays",
                "3–5 hours per session — flexible duration based on student needs and session agenda",
                "Led by Techcora professionals — mentors will be working engineers, researchers, and industry practitioners",
                "Structured tracking — progress will be documented to ensure continuity and measurable student growth",
                "Accessible format — sessions can be conducted in-person on campus or via video call based on logistics",
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
        </section>

        {/* ---- Commitment 4: Research & Curriculum ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            05 — Research & Curriculum Development
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Skills Research & Curriculum Innovation
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Techcora commits to an ongoing research initiative to identify the
            right skills to nurture in the completely transformed IT industry,
            and to develop curriculum and tools that translate these findings
            into actionable learning for students — ultimately helping them
            achieve better employment outcomes.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Research mandate
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The IT industry is undergoing a fundamental transformation
                driven by AI, automation, and new computing paradigms.
                Traditional skill frameworks are becoming obsolete faster than
                institutions can update them. Techcora will actively research
                and identify:
              </p>
              <div className="space-y-3">
                {[
                  "Emerging skill demands — what capabilities the industry will need in the next 2–5 years, beyond what current curricula teach",
                  "Declining skill relevance — which traditional skills are being automated or commoditized, helping students avoid dead-end investments",
                  "Cross-disciplinary competencies — skills at the intersection of technology, business, and creativity that produce outsized career outcomes",
                  "Tool and platform shifts — new development paradigms, frameworks, and AI-assisted workflows that are reshaping how work gets done",
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
                Curriculum & tools development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Research findings will not remain academic. Techcora commits to
                translating insights into practical curriculum recommendations
                and learning tools:
              </p>
              <div className="space-y-3">
                {[
                  "Curriculum recommendations — structured feedback to SRM on curriculum updates, new electives, and workshop topics aligned with industry direction",
                  "Learning tools and platforms — development of tools, templates, and environments that let students practice real-world skills in a structured way",
                  "Project-based learning paths — curated project sequences that build progressively complex skills, designed around actual industry requirements",
                  "Assessment frameworks — methods to evaluate student readiness for industry roles beyond traditional exam-based assessment",
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
                Employment outcome focus
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The ultimate measure of this initiative is better employment
                outcomes for students. Every research finding, curriculum
                recommendation, and tool built will be evaluated against a
                simple question:{" "}
                <span className="text-white font-medium">
                  does this measurably improve a student's ability to get and
                  succeed in a meaningful job?
                </span>{" "}
                Techcora will work with SRM to track employment metrics and
                iterate on the program based on real outcomes, not assumptions.
              </p>
            </div>
          </div>
        </section>

        {/* ---- MOU Framework ---- */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            06 — MOU Framework
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Foundation for the Memorandum of Understanding
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            This commitment report serves as the foundational document for the
            MOU between Techcora and SRM College. The following outlines the
            framework that the formal MOU will be built upon.
          </p>

          <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-gray-400 font-medium">
                    Commitment
                  </th>
                  <th className="text-left p-4 text-gray-400 font-medium">
                    Minimum Guarantee
                  </th>
                  <th className="text-left p-4 text-gray-400 font-medium">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Financial sponsorship",
                    "₹4,00,000",
                    "AY 2026–2027",
                  ],
                  [
                    "Placement opportunities",
                    "30 positions",
                    "AY 2026–2027",
                  ],
                  [
                    "Mentorship sessions",
                    "Bi-weekly, 3–5 hrs each",
                    "Throughout AY",
                  ],
                  [
                    "Research & curriculum",
                    "Ongoing engagement",
                    "Throughout AY",
                  ],
                ].map(([commitment, guarantee, duration]) => (
                  <tr
                    key={commitment}
                    className="border-b border-gray-800/50 hover:bg-gray-900/30"
                  >
                    <td className="p-4 text-white">{commitment}</td>
                    <td className="p-4 text-emerald-400 font-medium">
                      {guarantee}
                    </td>
                    <td className="p-4 text-gray-400">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">
                Mutual obligations
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                SRM College will provide institutional support including faculty
                advisory, infrastructure access for events, official club
                recognition, and facilitation of the placement process through
                the college's placement cell.
              </p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">
                Review & renewal
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                The MOU will be reviewed at the end of AY 2026–2027. Renewal
                terms for subsequent years will be negotiated based on the
                outcomes delivered against these commitments and the mutual
                benefit realized by both parties.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Signatures ---- */}
        <section className="mb-20">
          <div className="border border-gray-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-white mb-8 text-center">
              Authorized Signatories
            </h3>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="h-20 border-b border-gray-700 mb-4" />
                <p className="text-white font-medium">For Techcora</p>
                <p className="text-sm text-gray-500 mt-1">
                  Authorized Representative
                </p>
                <p className="text-sm text-gray-600 mt-1">Date: ___________</p>
              </div>
              <div className="text-center">
                <div className="h-20 border-b border-gray-700 mb-4" />
                <p className="text-white font-medium">For SRM College</p>
                <p className="text-sm text-gray-500 mt-1">
                  Authorized Representative
                </p>
                <p className="text-sm text-gray-600 mt-1">Date: ___________</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-800 pt-8 text-sm text-gray-600 text-center">
          Techcora × SRM College — Commitment Report AY 2026–2027 —
          Confidential
        </footer>

        </div>{/* end reportRef */}
      </div>

      {/* White-paper styles applied during PDF capture */}
      <style>{`
        /* ---- Base reset ---- */
        .pdf-export {
          background: #ffffff !important;
          color: #1a1a1a !important;
          padding: 40px 48px !important;
          font-family: "Inter", system-ui, sans-serif !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
        }
        .pdf-export * {
          color: #1a1a1a !important;
          border-color: #d4d4d4 !important;
        }

        /* ---- Typography scale (document-standard) ---- */
        .pdf-export h1 {
          font-size: 22px !important;
          line-height: 1.2 !important;
          margin-bottom: 8px !important;
        }
        .pdf-export h2 {
          font-size: 17px !important;
          line-height: 1.3 !important;
          margin-bottom: 6px !important;
        }
        .pdf-export h3 {
          font-size: 13px !important;
          line-height: 1.4 !important;
          margin-bottom: 4px !important;
        }
        .pdf-export p,
        .pdf-export span,
        .pdf-export td,
        .pdf-export th {
          font-size: 11px !important;
          line-height: 1.6 !important;
        }
        .pdf-export footer {
          font-size: 9px !important;
        }

        /* ---- Section numbers / small caps labels ---- */
        .pdf-export .text-sm.uppercase {
          font-size: 9px !important;
          letter-spacing: 0.15em !important;
          margin-bottom: 4px !important;
          color: #444444 !important;
          font-weight: 600 !important;
        }

        /* ---- Metric cards (executive summary) ---- */
        .pdf-export .text-3xl {
          font-size: 18px !important;
          line-height: 1.2 !important;
        }

        /* ---- Spacing reduction ---- */
        .pdf-export section {
          margin-bottom: 28px !important;
        }
        .pdf-export .mb-20 { margin-bottom: 28px !important; }
        .pdf-export .mb-16 { margin-bottom: 20px !important; }
        .pdf-export .mb-10 { margin-bottom: 14px !important; }
        .pdf-export .mb-8  { margin-bottom: 10px !important; }
        .pdf-export .mb-6  { margin-bottom: 8px !important; }
        .pdf-export .mb-4  { margin-bottom: 5px !important; }
        .pdf-export .p-8   { padding: 14px !important; }
        .pdf-export .p-6   { padding: 12px !important; }
        .pdf-export .gap-8  { gap: 12px !important; }
        .pdf-export .gap-6  { gap: 10px !important; }
        .pdf-export .gap-4  { gap: 8px !important; }
        .pdf-export .gap-12 { gap: 16px !important; }
        .pdf-export .space-y-6 > * + * { margin-top: 10px !important; }
        .pdf-export .space-y-4 > * + * { margin-top: 6px !important; }
        .pdf-export .space-y-3 > * + * { margin-top: 4px !important; }
        .pdf-export .py-16 { padding-top: 0 !important; padding-bottom: 0 !important; }

        /* ---- Table ---- */
        .pdf-export table { font-size: 10px !important; }
        .pdf-export td, .pdf-export th { padding: 6px 10px !important; }

        /* ---- Muted text ---- */
        .pdf-export .text-gray-400,
        .pdf-export .text-gray-500,
        .pdf-export .text-gray-600 {
          color: #555555 !important;
        }

        /* ---- Amber notice boxes ---- */
        .pdf-export [class*="bg-amber"] {
          background: #fffbeb !important;
        }
        .pdf-export [class*="border-amber"] {
          border-color: #d97706 !important;
        }
        .pdf-export .text-amber-400 {
          color: #92400e !important;
          font-weight: 600 !important;
        }

        /* ---- Clean backgrounds ---- */
        .pdf-export [class*="bg-gray"] {
          background: transparent !important;
        }
        .pdf-export [class*="hover\\:bg"] {
          background: transparent !important;
        }

        /* ---- Signature line ---- */
        .pdf-export .h-20 {
          height: 50px !important;
        }

        /* ---- Emerald accent in print → dark for contrast ---- */
        .pdf-export .text-emerald-400 {
          color: #065f46 !important;
          font-weight: 600 !important;
        }
      `}</style>
    </div>
  );
}
