# Verification record

- Production TypeScript and Vite build passed.
- Seven Node simulation tests passed: deterministic seeds, input speed validation, building duplicate/cost behavior, cooldown/damage, all nine simulation modes, Collapse and last-standing resolution, best-of-three duel scoring.
- Supabase query confirmed RLS on both public tables, eight public ownership policies and an active ten-minute cleanup schedule.
- Supabase public auth settings confirmed anonymous sign-ins disabled. Dashboard is signed out; no auth-update MCP exists. Online flows therefore show unavailable status and were not claimed verified.
- Cloud browser loaded the production preview, entered a 40-machine solo game and displayed the live HUD, bots, minimap and feed. This browser reports no WebGL2 support, so a software renderer was added and used.
- Local Playwright browser download returned truncated archives; no local Playwright pass is claimed. A reproducible desktop/iPad-touch smoke suite is included for capable environments.
- Real iPad Safari/device FPS and 16-peer load have not been measured.

Deployment and post-deployment checks are recorded in the repository's Actions history. A successful workflow build proves compilation and unit tests, not multiplayer availability.
