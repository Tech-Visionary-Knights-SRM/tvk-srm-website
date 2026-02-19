import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("v1", "routes/v1.tsx"),
  route("v2", "routes/v2.tsx"),
  route("internal/strategy", "routes/internal-strategy.tsx"),
  route("internal/directives", "routes/internal-directives.tsx"),
  route("internal/directives-v2", "routes/internal-directives-v2.tsx"),
  route("assets/yt-profile", "routes/yt-profile.tsx"),
  route("assets/yt-banner", "routes/yt-banner.tsx"),
  route("internal/srm-commitment-report", "routes/srm-commitment-report.tsx"),
] satisfies RouteConfig;
