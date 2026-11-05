# THE FINAL ENDING

An original browser action game by Advanced. A top-down angled procedural robot shooter with Forge building, gathering, loot, bots and a contracting Collapse. No paid content, advertising, analytics SDKs, downloaded art, music or sound assets.

**Play:** https://colmlenehan-gh.github.io/the-final-ending/

## Current release and online status

This is an alpha implementation, not a finished commercial battle royale. Solo vs bots is playable without a server and works offline after the static cache has installed. A Canvas 2D software renderer preserves playability if WebGL2 is disabled; supported devices use the Three.js renderer.

The dedicated Supabase project, tables, eight ownership policies, private Realtime authorization policies and 10-minute cleanup job were provisioned. Anonymous sign-in is **disabled in the project's auth configuration**. The connected MCP has no auth-configuration update tool, and the dashboard requires separate authentication. As a result, online create/join/spectate currently displays an explicit unavailable message. It is not claimed as a verified working multiplayer deployment. An authorized project owner can enable anonymous sign-ins under Authentication → Sign In / Providers → Anonymous Sign-Ins; no service key belongs in this repository.

## Play

Choose an experience, callsign, difficulty, team size and whether Forge building is enabled, then select **Play Solo vs Bots**. Battle Royale fills to 40 machines. Every machine starts equipped, with all six weapon classes selectable. Nearby caches upgrade rarity and provide utility supplies. Resources are harvested by firing at them from close range. The amber station near (15,15) trades 30 Timber Shards for a shield cell.

| Experience | Rules |
| --- | --- |
| THE FINAL ENDING | Drop Skiff, free fall and automatic glider; one life; contracting Collapse; last surviving team wins |
| Skyspires | Floating platforms and bridges, void elimination, last surviving team wins |
| The Sinkhole | Sloping circular basin, one life, contracting safe rim |
| Duel Grounds | One opponent, first to two round wins; disable Forge for No-Build Duel |
| Box Fights | Small arena, unlimited Shards, 1v1 or 2v2 bot fill, first to two round wins |
| Zone Wars | Short match with a fast Collapse |
| Team Deathmatch | Two teams, three-second respawns, first to 25 or highest score after five minutes |
| Free-For-All | Respawns, first to 15 or highest score after five minutes |
| Playground | Unlimited materials, no Collapse or score stakes, spawn training bots from pause |
| Spectate | Friend-code entry, follow camera and movable free camera; requires online service |

Maps derive from a shared seeded PRNG. Foundry Reach has Ash Relay, Glassworks and Copper Yard landmarks. Skyspires and The Sinkhole have different topology. Other modes use scaled arena variants. Exact geometry is procedural, not imported.

## Controls

| Action | Keyboard / pointer |
| --- | --- |
| Move / aim / fire | WASD / pointer / primary click |
| Jump / drop / sprint / crouch | Space / Space / Left Shift / C |
| Collect / station | E or F |
| Select weapon | 1–6 or scroll |
| Forge wall / floor / ramp / roof | Q / Z / X / V; repeat to place or hold click with piece selected |
| Edit own nearby piece | G cycles solid, door, window |
| Forge material | M |
| Shield cell / heal kit | H / J |
| Jump pad / trap spikes | B / T; costs 20 Metal / Stone |
| Pause | Escape |

Movement, interaction, Forge, edit and utility keys are rebindable in Settings. Weapon number shortcuts and menu keys remain fixed. Gamepad: left stick movement, right stick aim, right trigger fire, south button jump, west button collect, left-stick press sprint, right bumper Forge placement. Browser/OS controller support varies.

Touch: left joystick moves, right-half drag aims, FIRE shoots; JUMP, CROUCH, PLACE and USE buttons provide actions. Tap inventory/build/utility buttons for equipment. Settings adjust size, opacity and two vertical position presets. Touch aim assistance is optional. Haptics are not used. Landscape is recommended; Safari → Share → Add to Home Screen installs the PWA. A first online visit is needed to cache static assets.

## Architecture

- `src/model.ts`: deterministic seeded world initialization; authoritative 30 Hz simulation; combat, movement, fall/zone damage, building, resource gathering, loot, bots, round and score rules. A spatial hash narrows piece collision queries.
- `src/view.ts`: original Three.js primitive geometry, instanced rubble, frustum culling, reusable shot line meshes, remote interpolation and capped adaptive resolution.
- `src/fallback.ts`: software renderer for browsers without WebGL2. Same simulation and controls.
- `src/main.ts`: menu, settings/localStorage, touch/keyboard/controller input, HUD/minimap, synth audio, networking integration and match flow.
- `src/network.ts`: Supabase anonymous identity, lobby records, private broadcast/presence signaling and WebRTC data channels.
- `scripts-postbuild.mjs`: 404 copy and content-versioned service worker cache for bundled static assets.

The party creator runs the simulation. Clients send normalized inputs and receive snapshots about 20 times per second over unordered WebRTC data channels. Host-side validation clamps movement inputs, weapon indices and build indices; simulation controls fire cooldown, damage, material costs and life state. Clients predict their local ground movement and reconcile to snapshots. Remote player positions are interpolated. Signaling/chat/presence use Supabase; gameplay snapshots do not.

A dropped client becomes a bot, and the same anonymous identity can retake it within 60 seconds. Host departure ends play with a friendly retry screen; host migration is not implemented. Friend links use `#join=CODE`. STUN: `stun:stun.l.google.com:19302`, `stun:stun.cloudflare.com:3478`. No TURN service is provisioned: strict NATs/firewalls can prevent direct connections. Connection failures offer retry guidance. Lobby codes are invitations, not strong access-control secrets; do not share sensitive information in lobby chat. The chat filter is a simple best-effort word filter, not moderation infrastructure.

## Supabase security

Only the public publishable browser key and URL are in source. No service-role key is used. RLS is enabled on `lobbies` and `profiles`. Anonymous sign-ins receive the authenticated database role. Open/playing, nonexpired lobbies can be read by authenticated users; only the owner inserts, updates or deletes a lobby. Only the profile owner can read/write their profile. Private Realtime channels require a live lobby. A scheduled SQL cleanup deletes records older than two hours every ten minutes. Profiles are nickname-only records plus an optional cosmetic count; Supabase necessarily processes network/auth metadata. Offline play does not contact Supabase.

Cores and cosmetics are local, free, non-transferable and untrusted. No purchases. Do not treat local rewards as ranked credentials. The host can cheat because it owns the simulation; there is no dedicated trusted game server.

## Run and deploy

Node.js 22+ and npm:

```sh
npm ci
npm run dev
# Open the printed URL with /the-final-ending/
npm run lint
npm test
npm run build
npm run preview
```

`vite.config.ts` sets `base: '/the-final-ending/'`. GitHub Pages source is GitHub Actions. Push to main to build/test and deploy `dist/` through `.github/workflows/pages.yml`. Build output includes `404.html`, manifest, original SVG icon and service worker. Dependencies are bundled locally; no CDN is required at runtime.

Automated browser smoke tests:

```sh
npx playwright install --with-deps chromium
GAME_URL=http://localhost:4173/the-final-ending/ npx playwright test
```

Playwright config includes desktop Chrome and an iPad touch viewport using Chromium. This does **not** substitute for testing actual iPad Safari. Software WebGL launch flags are for CI only.

## Assumptions and limitations

- Alpha balance and AI: bots use direct steering, imperfect aim and basic building; no navmesh/pathfinding around complex structures. Landmark shells are decorative rather than fully collidable buildings. Shot collision is simplified; Forge walls are axis-aligned, and ramp/roof collision is approximate.
- Basic utility implementation: the jump-pad action immediately launches the player; it is not a persistent reusable platform. Trap spikes are persistent damage pieces. Skyburner uses instantaneous splash damage rather than a simulated rocket projectile. Vanta Burst uses rapid individual shots rather than a timed three-shot burst. Reload/ammunition economy is not implemented.
- Materials use distinct durability; editing cycles simple cutouts. No arbitrary vertex editing or piece rotation. A 500-piece cap bounds simulation work. No complete generalized object-pool allocator.
- No ranked service, public friend directory, persistent match history or verified global leaderboard. Nicknames are not unique accounts. Every weapon is available immediately for testing; rarity upgrades are looted. Touch placement has two position presets rather than arbitrary drag layout. Palette settings primarily affect HUD contrast.
- Up to 16 human players are architected, with bots to 40 in the main mode, but full-capacity P2P performance is not verified. Host bandwidth/CPU, device thermals and NAT constrain practical parties. No 60 FPS guarantee on hardware not measured.
- Anonymous sign-in is currently unavailable as described above. Deployed two-player networking, disconnect/rejoin and friend spectating cannot be verified until it is enabled.
- The provided cloud browser disables WebGL2; its manual browser checks use the software renderer. Local browser downloads were unavailable; the deployed suite passed using the Chrome installed on the GitHub runner. All 24 deployed desktop/iPad-profile Playwright checks and nine simulation tests passed. See `VERIFICATION.md` for coverage and limits.

## Originality

All character meshes, environment geometry, textures (flat procedural materials), logo, UI and Web Audio sounds are original code. Mechanics follow a general action/survival genre. The required affiliation disclaimer appears on the terminal. MIT source license; dependency notices in LICENSES.md.
