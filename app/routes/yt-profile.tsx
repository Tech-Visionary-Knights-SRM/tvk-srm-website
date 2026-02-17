export default function YTProfile() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <p className="fixed top-4 left-4 text-xs text-gray-700">
        800 x 800px — screenshot this square
      </p>

      <div
        style={{ width: 800, height: 800 }}
        className="bg-gray-950 border border-gray-800 flex items-center justify-center relative overflow-hidden shrink-0"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Emerald glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-96 h-96 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgb(16, 185, 129) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative text-center">
          {/* TEVIK SRM */}
          <h1
            className="text-white font-black tracking-tight leading-none"
            style={{ fontSize: 160 }}
          >
            TVK
          </h1>
          <p
            className="text-emerald-400 font-bold uppercase tracking-[0.5em] -mt-2"
            style={{ fontSize: 52 }}
          >
            SRM
          </p>

          {/* Divider */}
          <div
            className="mx-auto my-6 bg-emerald-500/40"
            style={{ width: 80, height: 2 }}
          />

          {/* Tagline */}
          <p
            className="text-gray-400 font-medium tracking-wide leading-snug"
            style={{ fontSize: 26 }}
          >
            Raising Tech Visionaries
          </p>
        </div>
      </div>
    </div>
  );
}
