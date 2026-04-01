# my-tiptap-editor

A minimal Tiptap 3 + Vue 3 rich-text editor package, adapted for personal use and customization.

## Quick Start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Optional features

This project includes optional integrations for AI and real-time collaboration. Both are disabled by default — enable them by setting environment variables in a local `.env` (copy from `.env.example`).

- AI (optional):
  - `VITE_AI_PROVIDER` — AI provider identifier (openai, anthropic, aliyun, etc.)
  - `VITE_AI_API_KEY` — API key for the selected provider
  - `VITE_AI_BASE_URL` — (optional) custom base URL for provider
  - `VITE_ENABLE_AI` — `true`/`false` to enable AI feature

- Collaboration / real-time (optional):
  - `VITE_COLLABORATION_WS_URL` — websocket endpoint for Yjs collaboration (e.g. `wss://example.com/ws`)
  - `VITE_ENABLE_COLLABORATION` — `true`/`false` to enable collaborative editing

Notes:
- Collaboration support depends on optional packages (`yjs`, `y-websocket`, `@tiptap/extension-collaboration`). These are marked as `optionalDependencies` and will only be used when present and configured.
- Do not commit actual API keys — keep them in your local `.env` and add `.env` to `.gitignore`.

## Lint & Format

```bash
npm run lint
npm run format
```

## Analyze bundle

Generate a bundle visualization:

```bash
npm run analyze
# then open dist/stats.html
```

## Tests

```bash
npm run test:run
```

## License

MIT
