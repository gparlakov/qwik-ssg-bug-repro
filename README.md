# vite mode dev build bug minimal repro

This is a small repro with `--mode dev` but for the actual app (of which this is an excerpt) it seems to happen with --mode production as well.

## Repro steps
- npm ci
- npx vite build -c vite.config.ts --mode dev --force && npx vite build -c adapters/static/vite.config.ts --force && ROOT=./dist/client node ./tools/run.mjs
- open browser on localhost:4200
- click the grid button
- notice the error in console

