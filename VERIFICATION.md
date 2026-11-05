# Verification record

- Production TypeScript and Vite build passed.
- Nine Node simulation tests passed: deterministic seeds, input speed validation, building duplicate/cost behavior, cooldown/damage, all nine simulation modes, Collapse and last-standing resolution, best-of-three duel scoring, material/ownership validation and respawn semantics.
- Supabase query confirmed RLS on both public tables, eight public ownership policies and an active ten-minute cleanup schedule.
- Supabase public auth settings confirmed anonymous sign-ins disabled. Dashboard is signed out; no auth-update MCP exists. Online flows therefore show unavailable status and were not claimed verified.
- Cloud browser loaded the production preview, entered a 40-machine solo game and displayed the live HUD, bots, minimap and feed. This browser reports no WebGL2 support, so a software renderer was added and used.
- Local Playwright browser download returned truncated archives; no local Playwright pass is claimed. A reproducible desktop/iPad-touch smoke suite is included for capable environments.
- Real iPad Safari/device FPS and 16-peer load have not been measured.

Deployment and post-deployment checks are recorded in the repository's Actions history. A successful workflow build proves compilation and unit tests, not multiplayer availability.

- All nine modes were opened through the production-preview UI. Forge and weapon buttons and pause/leave flows were exercised. Touch HUD selection and large action targets were checked. A solo elimination transitioned to follow-spectating. No game-origin console error was captured; extension-origin browser errors are outside the game.
- GitHub Actions build and Pages deployment completed successfully. The deployed URL loaded the terminal and displayed the expected anonymous-auth unavailable message. The CI smoke suite uses the Chrome already installed on the Ubuntu runner, avoiding a separate browser download.

## Deployed automated browser result

GitHub Actions run 42029252107 completed successfully. All **24 Playwright tests passed** using the runner's Chrome with software WebGL flags: 12 desktop and 12 emulated iPad touch cases. Coverage includes terminal/solo boot, every offline mode, Forge/weapon UI, pause/leave, touch buttons, settings persistence, graceful unavailable-online messaging, all static asset responses, service-worker control and offline reload followed by solo play. This is Chromium with an iPad device profile, not physical iPad Safari.

Live index, logo, manifest, all four bundled JavaScript/CSS assets, service worker and 404 fallback returned HTTP 200. A legal-name search matched only the mandatory footer disclaimer. No privileged key is present.
