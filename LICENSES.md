# Third-party licenses

All game art, SVG graphics, map geometry and synthesized sound are created in source. There are no downloaded art, music, texture or sound assets. No external font service is used.

Direct runtime dependencies:

| Dependency | License | Source |
| --- | --- | --- |
| Three.js | MIT | https://github.com/mrdoob/three.js |
| @supabase/supabase-js and its bundled Supabase modules | MIT | https://github.com/supabase/supabase-js |

Development tools: Vite (MIT), TypeScript (Apache-2.0), tsx (MIT), @types/three (MIT), Playwright (Apache-2.0). Transitive build/runtime dependencies and exact versions are recorded in package-lock.json; each installed package includes its own license notice. Production uses only the compiled browser application, Three.js, and Supabase's client dependencies. License auditing is performed against the locked dependency graph.

The original game source is MIT licensed, see LICENSE.
