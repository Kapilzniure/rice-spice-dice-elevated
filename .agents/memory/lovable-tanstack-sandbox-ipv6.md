---
name: Lovable TanStack Start sandbox host binding
description: Imported Lovable TanStack Start projects use @lovable.dev/vite-tanstack-config, which forces the dev server host to "::" (IPv6) — this Replit sandbox errors with EAFNOSUPPORT on that address family.
---

The `defineConfig` helper from `@lovable.dev/vite-tanstack-config` merges `{ server: { host: "::", port: 8080 } }` into the vite config (forced when not detected as a "Lovable sandbox" via `LOVABLE_SANDBOX`/`DEV_SERVER__PROJECT_PATH` env vars, which are unset in Replit). Binding to `::` fails here with `EAFNOSUPPORT: address family not supported`.

**Why:** This Replit container's networking doesn't support IPv6 loopback/any-address binding, so any dev server (not just Vite) that binds `::` will fail the same way.

**How to apply:** In the project's `vite.config.ts`, pass `vite: { server: { host: "0.0.0.0", port: 5000, strictPort: true } }` as an option to `defineConfig(...)`. Since `isSandbox` is false in Replit, the library does `mergeConfig({ server: { host: "::", port: 8080 } }, config)` — your explicit `vite.server` override wins the merge. Then configure the Replit workflow with `waitForPort: 5000` and `outputType: "webview"`.
