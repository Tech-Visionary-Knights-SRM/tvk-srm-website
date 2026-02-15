# XXX — Build. Ship. Lead.

Landing page for XXX, a talent accelerator club at SRM Institute of Science and Technology. An execution-driven talent forge that identifies, stress-tests, and upgrades the top 1% of student builders.

## Tech Stack

- React Router v7 (SPA mode)
- TypeScript
- Tailwind CSS v4
- Firebase Hosting

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

Output goes to `build/client/` (static SPA).

## Deployment (Firebase)

```bash
npm run build
firebase deploy
```

Firebase Hosting is configured to serve from `build/client/` with SPA rewrites.

## Project Structure

```
app/
  components/landing/
    Navbar.tsx        # Sticky nav with smooth scroll
    Hero.tsx          # Club name, tagline, one-liner
    Identity.tsx      # Mission and what the club is NOT
    EntryFunnel.tsx   # 3-phase selection process
    Tracks.tsx        # 4 specialization verticals
    TierSystem.tsx    # T0-T4 progression ladder
    ScoringSystem.tsx # 100-point performance index
    WorkSystem.tsx    # Project types and sprint cadence
    Culture.tsx       # Non-negotiable rules
    Financials.tsx    # Budget breakdown and revenue
    Incentives.tsx    # Beyond-money benefits
    Outcomes.tsx      # 24-month trajectory
    CTA.tsx           # Apply section and footer
  routes/
    home.tsx          # Landing page (assembles all sections)
  root.tsx            # App shell
  app.css             # Global styles and Tailwind config
```
