# dsh-client-ui-route-badge

**Shows which backend model actually served each request when using auto route.**

A client-side UI plugin for DeepSeek Harness Web that injects a "Route Log" panel into the conversation view, displaying real-time routing decisions from [dsh-llm-router](https://github.com/zhanghao3693/dsh-llm-router).

## Features

- 📊 Live route log table in conversation view (injected via `conversation.view` slot)
- 🏷️ Color-coded kind badges: Default (blue), Vision (purple), Long Context (orange), Fallback (red)
- 🔢 Fallback depth indicator (`—` / `#1` / `#2`)
- ⏱️ Relative timestamps (刚刚 / N秒前 / N分钟前)
- 🎨 DSW design token theming (`var(--dsw-alias-*)`) — follows light/dark mode
- 🌐 i18n support (zh/en) via `ctx.locale.register`
- 🔄 Auto-refresh every 4 seconds via polling `/api/llm-router/routes`
- 📦 Zero host-side dependency — pure client plugin

## Screenshot

*(Route log panel showing recent requests with kind badges, actual models, and fallback indices)*

## Install

Requires [dsh-llm-router](https://github.com/zhanghao3693/dsh-llm-router) installed first:

```sh
dsh plugin --profile web add dsh-llm-router
dsh plugin --profile web add dsh-client-ui-route-badge
```

## How it works

1. Extracts session ID from URL path (`/sessions/<sessionId>`)
2. Polls `GET /api/llm-router/routes?sessionId=<id>&limit=50` every 4s
3. Renders results as an HTML table with styled badges

## License

MIT
