export default function YTBanner() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <p className="fixed top-4 left-4 text-xs text-gray-700">
        2560 x 1440px — screenshot the full rectangle
      </p>

      <div
        style={{ width: 2560, height: 1440 }}
        className="bg-gray-950 relative overflow-hidden shrink-0"
      >
        {/* Full grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Emerald glow center */}
        <div
          className="absolute opacity-12"
          style={{
            width: 1000,
            height: 600,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgb(16, 185, 129) 0%, transparent 70%)",
          }}
        />

        {/* All content in the safe zone: 1235 x 338 (viewable on all devices) */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 1235,
            height: 338,
          }}
        >
          <div className="text-center">
            <h1
              className="text-white font-black tracking-tighter leading-none"
              style={{ fontSize: 80 }}
            >
              Tech Visionary Knights
            </h1>

            <p
              className="text-gray-400 uppercase tracking-[0.3em] mt-3"
              style={{ fontSize: 20 }}
            >
              SRM Institute of Science and Technology
            </p>

            <div
              className="mx-auto my-5 bg-emerald-500/40"
              style={{ width: 120, height: 2 }}
            />

            <p
              className="text-emerald-400 font-semibold tracking-wide"
              style={{ fontSize: 30 }}
            >
              Preparing students for the AI era
            </p>
          </div>
        </div>

        {/* Decorative side lines — outside safe zone */}
        <div
          className="absolute bg-emerald-500/20"
          style={{ left: 0, top: "50%", width: 350, height: 1 }}
        />
        <div
          className="absolute bg-emerald-500/20"
          style={{ right: 0, top: "50%", width: 350, height: 1 }}
        />
      </div>
    </div>
  );
}
