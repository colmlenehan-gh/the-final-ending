# Third-party licenses

All game art, SVG graphics, map geometry and synthesized sound are created in source. There are no downloaded art, music, texture or sound assets. No external font service is used.

Direct runtime dependencies:

| Dependency | License | Source |
| --- | --- | --- |
| Three.js | MIT | https://github.com/mrdoob/three.js |
| @supabase/supabase-js and its bundled Supabase modules | MIT | https://github.com/supabase/supabase-js |

Development tools: Vite (MIT), TypeScript (Apache-2.0), tsx (MIT), @types/three (MIT), Playwright (Apache-2.0). Transitive build/runtime dependencies and exact versions are recorded in package-lock.json; each installed package includes its own license notice. Production uses only the compiled browser application, Three.js, and Supabase's client dependencies. License auditing is performed against the locked dependency graph.

The original game source is MIT licensed, see LICENSE.

## Locked package audit

Runtime libraries use MIT/Apache licenses. The required Vite toolchain has permissive transitive development dependencies, including BSD source-map tooling; these are not separately imported by the game. Full installed notices ship in `public/third-party-notices.txt`.

| Package | Version | License |
| --- | --- | --- |
| @dimforge/rapier3d-compat | 0.12.0 | Apache-2.0 |
| @esbuild/linux-x64 | 0.25.12 | MIT |
| @esbuild/linux-x64 | 0.28.2 | MIT |
| @playwright/test | 1.64.1 | Apache-2.0 |
| @rollup/rollup-linux-x64-gnu | 4.67.5 | MIT |
| @supabase/auth-js | 2.119.0 | MIT |
| @supabase/functions-js | 2.119.0 | MIT |
| @supabase/phoenix | 0.4.5 | MIT |
| @supabase/postgrest-js | 2.119.0 | MIT |
| @supabase/realtime-js | 2.119.0 | MIT |
| @supabase/storage-js | 2.119.0 | MIT |
| @supabase/supabase-js | 2.119.0 | MIT |
| @tweenjs/tween.js | 23.1.3 | MIT |
| @types/estree | 1.0.10 | MIT |
| @types/stats.js | 0.17.4 | MIT |
| @types/three | 0.180.0 | MIT |
| @types/webxr | 0.5.24 | MIT |
| @webgpu/types | 0.1.74 | BSD-3-Clause |
| esbuild | 0.25.12 | MIT |
| esbuild | 0.28.2 | MIT |
| fdir | 6.5.0 | MIT |
| fflate | 0.8.3 | MIT |
| iceberg-js | 0.8.1 | MIT |
| meshoptimizer | 0.22.0 | MIT |
| nanoid | 3.3.20 | MIT |
| picocolors | 1.1.1 | ISC |
| picomatch | 4.0.7 | MIT |
| playwright | 1.64.1 | Apache-2.0 |
| playwright-core | 1.64.1 | Apache-2.0 |
| postcss | 8.5.32 | MIT |
| rollup | 4.67.5 | MIT |
| source-map-js | 1.2.2 | BSD-3-Clause |
| three | 0.180.0 | MIT |
| tinyglobby | 0.2.17 | MIT |
| tslib | 2.8.1 | 0BSD |
| tsx | 4.23.15 | MIT |
| typescript | 5.9.3 | Apache-2.0 |
| vite | 6.4.5 | MIT |
