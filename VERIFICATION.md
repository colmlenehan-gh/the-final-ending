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
