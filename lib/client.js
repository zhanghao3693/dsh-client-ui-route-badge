window.__ModuleLoader__.load({
	id: "dsh-client-ui-route-badge",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");

		/* ------------------------------------------------------------------ styles */
		const css = `
.rlb_root{display:flex;flex-direction:column;gap:12px;width:100%;max-width:720px;margin:0 auto;padding:8px 4px 20px}
.rlb_header{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.rlb_title{margin:0;font-size:15px;font-weight:600;color:var(--dsw-alias-label-primary)}
.rlb_sub{color:var(--dsw-alias-label-tertiary);font-size:11px}
.rlb_refresh{border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);border-radius:6px;padding:3px 10px;font:inherit;font-size:11px;cursor:pointer}
.rlb_refresh:hover{background:var(--dsw-alias-interactive-bg-hover)}
.rlb_table{width:100%;border-collapse:collapse;font-size:12px}
.rlb_table th,.rlb_table td{text-align:left;padding:6px 10px;border-bottom:1px solid var(--dsw-alias-border-l2);white-space:nowrap}
.rlb_table th{color:var(--dsw-alias-label-tertiary);font-weight:500;font-size:11px;position:sticky;top:0;background:var(--dsw-alias-bg-layer-2)}
.rlb_kind{display:inline-block;font-size:10px;padding:1px 7px;border-radius:8px;font-weight:500}
.rlb_kind_def{background:#e8f0fe;color:#1967d2}
.rlb_kind_vis{background:#f3e8ff;color:#8e24aa}
.rlb_kind_lc{background:#fef7e0;color:#b06000}
.rlb_kind_fb{background:#fce8e8;color:#c5221f}
.rlb_model{font-weight:550;color:var(--dsw-alias-label-primary);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11.5px}
.rlb_time{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums}
.rlb_empty{color:var(--dsw-alias-label-tertiary);padding:20px 0;font-size:13px}
.rlb_error{color:var(--dsw-state-error-primary);padding:12px 0;font-size:13px}
.rlb_loading{color:var(--dsw-alias-label-tertiary);padding:12px 0;font-size:13px}
		`;
		const tagId = "dsh-client-ui-route-badge/RouteLogView.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-client-ui-route-badge";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}

		/* ---------------------------------------------------------------- locales */
		const NS = "route-badge";
		const zh = { "view.tab": "路由日志", "kind.default": "默认", "kind.vision": "视觉", "kind.long-context": "长上下文", "kind.fallback": "后备", "header.model": "实际模型", "header.time": "时间", "header.kind": "类型", "header.fb": "后备#", "empty": "暂无路由记录（通过 Auto 模式发送消息后这里会显示）", "error": "加载失败", "refresh": "刷新" };
		const en = { "view.tab": "Route Log", "kind.default": "Default", "kind.vision": "Vision", "kind.long-context": "Long Context", "kind.fallback": "Fallback", "header.model": "Backend Model", "header.time": "Time", "header.kind": "Kind", "header.fb": "Fallback #", "empty": "No routes yet (send a message via Auto mode)", "error": "Failed to load", "refresh": "Refresh" };

		/* -------------------------------------------------------------- helpers */
		const KIND_CLASS = { default: "rlb_kind_def", vision: "rlb_kind_vis", "long-context": "rlb_kind_lc" };
		function kindLabel(t) { return t; } /* locale bound later */

		function relTime(ts) {
			const sec = Math.floor((Date.now() - ts) / 1000);
			if (sec < 3) return "刚刚";
			if (sec < 60) return sec + "秒前";
			const min = Math.floor(sec / 60);
			if (min < 60) return min + "分钟前";
			const hr = Math.floor(min / 60);
			if (hr < 24) return hr + "小时前";
			return new Date(ts).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
		}

		async function fetchRoutes(sessionId) {
			try {
				const url = "/api/llm-router/routes?sessionId=" + encodeURIComponent(sessionId) + "&limit=50";
				const res = await fetch(url, { cache: "no-store" });
				if (!res.ok) throw new Error("HTTP " + res.status);
				return await res.json();
			} catch (e) {
				return { error: String(e.message || e) };
			}
		}

		/* ------------------------------------------------------------- components */
		function KindBadge({ kind }) {
			const cls = KIND_CLASS[kind] || "rlb_kind_fb";
			return (0, react_jsx_runtime.jsx)("span", { className: "rlb_kind " + cls, children: kindLabel(kind) || kind });
		}

		function RouteRow({ r }) {
			return (0, react_jsx_runtime.jsxs)("tr", { children: [
				(0, react_jsx_runtime.jsx)("td", { className: "rlb_time", children: relTime(r.ts) }),
				(0, react_jsx_runtime.jsx)("td", { children: (0, react_jsx_runtime.jsx)(KindBadge, { kind: r.kind }) }),
				(0, react_jsx_runtime.jsx)("td", { className: "rlb_model", children: r.provider + "/" + r.model }),
				(0, react_jsx_runtime.jsx)("td", { style: { textAlign: "right", color: "var(--dsw-alias-label-tertiary)", fontVariantNumeric: "tabular-nums" }, children: r.fallbackIndex > 0 ? "#" + r.fallbackIndex : "—" }),
			] });
		}

		function RouteLogView(ctx) {
			const [routes, setRoutes] = react.useState(null); /* null=loading, []|[{...]}=data, {error}=err */
			const [sessionId, setSessionId] = react.useState("");
			const timerRef = react.useRef(null);

			react.useEffect(() => {
				// Try to discover the current session ID from the URL or page state.
				// DSH web URLs look like /sessions/<sessionId> or carry it in the DOM.
				const m = location.pathname.match(/\/sessions\/([^/]+)/);
				const sid = m ? m[1] : "";
				setSessionId(sid);
				if (!sid) { setRoutes([]); return; }
				let mounted = true;
				async function load() {
					if (!mounted) return;
					const data = await fetchRoutes(sid);
					if (mounted) setRoutes(data.routes ? data : data);
				}
				load();
				timerRef.current = setInterval(load, 4000);
				return () => { mounted = false; clearInterval(timerRef.current); };
			}, []);

			const t = ctx.locale.bind(NS);
			/* update kindLabel closure so re-renders pick up locale changes */
			react.useEffect(() => { /* noop — t already reactive via ctx */ }, [t]);

			const refresh = () => { if (sessionId) fetchRoutes(sessionId).then(d => setRoutes(d.routes ? d : d)); };

			let body;
			if (routes === null) {
				body = (0, react_jsx_runtime.jsx)("div", { className: "rlb_loading", children: "…" });
			} else if (routes.error) {
				body = (0, react_jsx_runtime.jsx)("div", { className: "rlb_error", children: [routes.error, " ", (0, react_jsx_runtime.jsx)("button", { className: "rlb_refresh", onClick: refresh, children: t("refresh") })] });
			} else if (routes.length === 0) {
				body = (0, react_jsx_runtime.jsx)("div", { className: "rlb_empty", children: t("empty") });
			} else {
				body = (0, react_jsx_runtime.jsxs)("table", { className: "rlb_table", children: [
					(0, react_jsx_runtime.jsxs)("thead", { children: (0, react_jsx_runtime.jsxs)("tr", { children: [
						(0, react_jsx_runtime.jsx)("th", { children: t("header.time") }),
						(0, react_jsx_runtime.jsx)("th", { children: t("header.kind") }),
						(0, react_jsx_runtime.jsx)("th", { children: t("header.model") }),
						(0, react_jsx_runtime.jsx)("th", { style: { textAlign: "right" }, children: t("header.fb") }),
					] }) }),
					(0, react_jsx_runtime.jsx)("tbody", { children: routes.map(r => (0, react_jsx_runtime.jsx)(RouteRow, { key: r.id, r: r })) }),
				] });
			}

			return (0, react_jsx_runtime.jsxs)("div", { className: "rlb_root", children: [
				(0, react_jsx_runtime.jsxs)("div", { className: "rlb_header", children: [
					(0, react_jsx_runtime.jsx)("h3", { className: "rlb_title", children: t("view.tab") }),
					sessionId && (0, react_jsx_runtime.jsx)("button", { className: "rlb_refresh", onClick: refresh, children: t("refresh") }),
				] }),
				body,
			] });
		}

		/* ---------------------------------------------------------------- plugin */
		const inject = ["slots", "locale"];
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, { zh, en }), "route-badge: dictionaries");
			ctx.slots.inject("conversation.view", () => ctx.slots.register({
				name: "conversation.view",
				id: "route-log",
				order: 11,
				locale: NS,
				label: () => ctx.locale.bind(NS)("view.tab"),
				inject: () => ({})
			}, RouteLogView));
		}

		exports.NS = NS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	},
});
