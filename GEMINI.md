# Workspace Engineering Guidelines (TypingSite)

## 1. Zero `any` & Strict TypeScript Invariants
- All source files in `src/` must maintain 100% strict type safety (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`).
- Prohibit any usage of `any`, `as any`, or `<any>`.
- Use `class` definitions or fully typed interfaces for stateful controllers to avoid `this` inference issues.
- All catch blocks must use `catch (err: unknown)` with `err instanceof Error` narrowing.
- All DOM and React event handlers must specify exact event signatures (`PointerEvent`, `KeyboardEvent`, `MouseEvent`, etc.).

## 2. Command Execution on Windows
- Always use `npm.cmd` / `npx.cmd` to bypass PowerShell `PSSecurityException`.
- Build pipeline: `npm run typecheck` (`tsc --noEmit`) and `npm run build` (`vite build`).
