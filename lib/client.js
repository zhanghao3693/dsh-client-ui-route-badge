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
/* 原有路由日志样式 */
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

/* 新增：模型调用 Toast 通知 */
.model-toast-container{position:fixed;top:80px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:380px}
.model-toast{pointer-events:auto;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l2);border-radius:12px;padding:14px 18px;box-shadow:0 8px 24px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.08);animation:toastIn 0.3s ease-out,toastOut 0.3s ease-in 2.7s forwards;display:flex;align-items:center;gap:12px}
@keyframes toastIn{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}
@keyframes toastOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(100%)}}
.model-toast-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.model-toast-icon.deepseek{background:linear-gradient(135deg,#4285f4,#1967d2);color:#fff}
.model-toast-icon.longcat{background:linear-gradient(135deg,#ff6b6b,#c92a2a);color:#fff}
.model-toast-icon.minimax{background:linear-gradient(135deg,#51cf66,#2b8a3e);color:#fff}
.model-toast-icon.kimi{background:linear-gradient(135deg,#cc5de8,#862e9c);color:#fff}
.model-toast-icon.zhipu{background:linear-gradient(135deg,#ffd43f,#f59f00);color:#333}
.model-toast-icon.default{background:linear-gradient(135deg,#868e96,#495057);color:#fff}
.model-toast-content{flex:1;min-width:0}
.model-toast-title{font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary);margin-bottom:2px}
.model-toast-subtitle{font-size:11.5px;color:var(--dsw-alias-label-tertiary)}
.model-toast-loading{width:16px;height:16px;border:2px solid var(--dsw-alias-border-l2);border-top-color:var(--dsw-alias-label-primary);border-radius:50%;animation:spin 0.8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

/* 新增：模型评分卡片 */
.model-score-section{display:flex;flex-direction:column;gap:16px;margin-top:8px}
.model-score-card{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:12px;padding:16px;transition:all 0.2s ease}
.model-score-card:hover{box-shadow:0 4px 12px rgba(0,0,0,0.08);border-color:var(--dsw-alias-border-l1)}
.model-score-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.model-score-name{font-size:15px;font-weight:600;color:var(--dsw-alias-label-primary);display:flex;align-items:center;gap:8px}
.model-score-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600}
.model-score-badge.excellent{background:#d3f9d8;color:#2b8a3e}
.model-score-badge.good{background:#d3f9d8;color:#2b8a3e}
.model-score-badge.average{background:#fff3bf;color:#e67700}
.model-score-badge.poor{background:#ffe3e3;color:#c92a2a}
.model-score-value{font-size:20px;font-weight:700;font-variant-numeric:tabular-nums}
.model-score-desc{font-size:13px;line-height:1.6;color:var(--dsw-alias-label-secondary);margin-top:8px}
.model-score-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.model-score-tag{padding:3px 10px;border-radius:6px;font-size:11px;background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l2)}

/* 当前调用状态指示器 */
.current-model-indicator{display:flex;align-items:center;gap:8px;padding:10px 14px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:10px;color:#fff;margin-bottom:12px;font-size:13px;font-weight:500;box-shadow:0 4px 12px rgba(102,126,234,0.3)}
.current-model-pulse{width:8px;height:8px;border-radius:50%;background:#4ade80;animation:pulse 1.5s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
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
		const zh = {
			"view.tab": "路由日志",
			"kind.default": "默认", "kind.vision": "视觉", "kind.long-context": "长上下文", "kind.fallback": "后备",
			"header.model": "实际模型", "header.time": "时间", "header.kind": "类型", "header.fb": "后备#",
			"empty": "暂无路由记录（通过 Auto 模式发送消息后这里会显示）",
			"error": "加载失败", "refresh": "刷新",
			// 新增：通知和评分
			"toast.calling": "正在调用",
			"toast.vision": "视觉任务",
			"toast.longctx": "长文本任务",
			"toast.fallback": "后备切换",
			"score.title": "各模型评分",
			"score.current": "当前使用",
			"score.desc": "模型能力说明"
		};
		const en = {
			"view.tab": "Route Log",
			"kind.default": "Default", "kind.vision": "Vision", "kind.long-context": "Long Context", "kind.fallback": "Fallback",
			"header.model": "Backend Model", "header.time": "Time", "header.kind": "Kind", "header.fb": "Fallback #",
			"empty": "No routes yet (send a message via Auto mode)",
			"error": "Failed to load", "refresh": "Refresh",
			"toast.calling": "Calling",
			"toast.vision": "Vision task",
			"toast.longctx": "Long context task",
			"toast.fallback": "Fallback switch",
			"score.title": "Model Scores",
			"score.current": "Currently using",
			"score.desc": "Model capabilities"
		};

		/* -------------------------------------------------------- model scores */
		const MODEL_SCORES = {
			"deepseek-official/deepseek-v4-pro": {
				name: "DeepSeek V4 Pro",
				score: 9,
				badge: "excellent",
				icon: "deepseek",
				desc: "回答结构清晰、覆盖主动性与长期价值维度，且能结合当前模式语境，针对性强。",
				tags: ["结构化输出", "长期价值", "语境理解"]
			},
			"longcat/LongCat-2.0": {
				name: "LongCat 2.0",
				score: 8,
				badge: "good",
				icon: "longcat",
				desc: "对比简洁明了，突出自动化程度和交互方式，并给出适用场景建议，但未涉及记忆与技能维度。",
				tags: ["简洁清晰", "自动化", "场景建议"]
			},
			"minimax-cn/MiniMax-M2.7": {
				name: "MiniMax M2.7",
				score: 8,
				badge: "good",
				icon: "minimax",
				desc: "用表格对比关键差异，覆盖主动权、打断频率、适用场景和风险，全面且易读，但未提及记忆与技能积累。",
				tags: ["对比表格", "全面覆盖", "易读性"]
			},
			"kimi-coding/kimi-for-coding": {
				name: "Kimi for Coding",
				score: 6,
				badge: "average",
				icon: "kimi",
				desc: "因未识别\"auto模式\"而基于猜测回答，内容泛化且未结合当前对话语境，但自动化程度、交互频率等维度分析合理。",
				tags: ["泛化分析", "维度合理", "需优化"]
			},
			"zai-coding-cn/glm-5-turbo": {
				name: "GLM-5 Turbo",
				score: 7,
				badge: "average",
				icon: "zhipu",
				desc: "独到地补充了持久记忆和技能复用维度，但未明确对比交互频率和用户控制度，且部分内容依赖特定系统设定。",
				tags: ["持久记忆", "技能复用", "独特视角"]
			}
		};

		function getModelScore(provider, model) {
			const key = `${provider}/${model}`;
			return MODEL_SCORES[key] || {
				name: `${provider}/${model}`,
				score: 5,
				badge: "poor",
				icon: "default",
				desc: "暂无详细评估数据",
				tags: ["待评估"]
			};
		}

		function getScoreLabel(score) {
			if (score >= 9) return "优秀";
			if (score >= 7) return "良好";
			if (score >= 5) return "一般";
			return "待提升";
		}

		/* -------------------------------------------------------------- helpers */
		const KIND_CLASS = { default: "rlb_kind_def", vision: "rlb_kind_vis", "long-context": "rlb_kind_lc" };
		function kindLabel(t) { return t; }

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

		/* ------------------------------------------------- toast notification */
		let toastIdCounter = 0;
		const activeToasts = react.createContext(new Set());

		function ModelToast({ id, provider, model, kind, onDone }) {
			const [visible, setVisible] = react.useState(true);
			const scoreInfo = getModelScore(provider, model);
			const t = react.useContext(require("react").createContext({ bind: (ns) => (key) => key }));

			react.useEffect(() => {
				const timer = setTimeout(() => {
					setVisible(false);
					setTimeout(onDone, 300);
				}, 3000);
				return () => clearTimeout(timer);
			}, []);

			if (!visible) return null;

			return (0, react_jsx_runtime.jsx)("div", {
				className: "model-toast",
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						className: "model-toast-icon " + scoreInfo.icon,
						children: scoreInfo.name.charAt(0)
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: "model-toast-content",
						children: [
							(0, react_jsx_runtime.jsx)("div", {
								className: "model-toast-title",
								children: scoreInfo.name
							}),
							(0, react_jsx_runtime.jsx)("div", {
								className: "model-toast-subtitle",
								children: kind === "vision" ? "📷 视觉任务" :
								         kind === "long-context" ? "📄 长文本任务" :
								         kind === "fallback" ? "🔄 后备切换" : "⚡ 默认模式"
							})
						]
					}),
					(0, react_jsx_runtime.jsx)("div", { className: "model-toast-loading" })
				]
			});
		}

		function ToastContainer({ toasts, removeToast }) {
			if (toasts.size === 0) return null;
			return (0, react_jsx_runtime.jsx)("div", {
				className: "model-toast-container",
				children: Array.from(toasts).map((toast) =>
					(0, react_jsx_runtime.jsx)(ModelToast, {
						key: toast.id,
						id: toast.id,
						provider: toast.provider,
						model: toast.model,
						kind: toast.kind,
						onDone: () => removeToast(toast.id)
					})
				)
			});
		}

		/* ---------------------------------------------- score card component */
		function ModelScoreCard({ provider, model, isCurrent }) {
			const info = getModelScore(provider, model);
			const t = { bind: () => (key) => key }; // simplified

			return (0, react_jsx_runtime.jsxs)("div", {
				className: "model-score-card" + (isCurrent ? " current-model-card" : ""),
				style: isCurrent ? { borderColor: "#667eea", borderWidth: "2px" } : {},
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: "model-score-header",
						children: [
							(0, react_jsx_runtime.jsxs)("div", {
								className: "model-score-name",
								children: [
									isCurrent && (0, react_jsx_runtime.jsx)("span", {
										className: "current-model-pulse",
										style: { marginRight: "6px", width: "10px", height: "10px" }
									}),
									info.name,
									isCurrent && (0, react_jsx_runtime.jsx)("span", {
										style: { fontSize: "11px", color: "#667eea", fontWeight: "normal" },
										children: " ← 当前"
									})
								]
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								className: "model-score-badge " + info.badge,
								children: [info.score, "/10 ", getScoreLabel(info.score)]
							})
						]
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: "model-score-desc",
						children: info.desc
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: "model-score-tags",
						children: info.tags.map(tag =>
							(0, react_jsx_runtime.jsx)("span", {
								className: "model-score-tag",
								key: tag,
								children: tag
							})
						)
					})
				]
			});
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
			const [routes, setRoutes] = react.useState(null);
			const [sessionId, setSessionId] = react.useState("");
			const [toasts, setToasts] = react.useState(new Set());
			const [lastRoute, setLastRoute] = react.useState(null);
			const timerRef = react.useRef(null);
			const prevRouteIdRef = react.useRef(null);

			const addToast = (route) => {
				const toast = { ...route, id: ++toastIdCounter };
				setToasts(prev => new Set(prev).add(toast));
			};

			const removeToast = (id) => {
				setToasts(prev => {
					const next = new Set(prev);
					next.forEach(t => { if (t.id === id) next.delete(t); });
					return next;
				});
			};

			react.useEffect(() => {
				const m = location.pathname.match(/\/sessions\/([^/]+)/);
				const sid = m ? m[1] : "";
				setSessionId(sid);
				if (!sid) { setRoutes([]); return; }
				let mounted = true;
				async function load() {
					if (!mounted) return;
					const data = await fetchRoutes(sid);
					if (!mounted) return;
					if (data.routes) {
						const routeList = data.routes;
						setRoutes(data);

						// 检测新的路由记录并显示 Toast
						if (routeList.length > 0) {
							const latestRoute = routeList[0];
							if (prevRouteIdRef.current !== latestRoute.id) {
								prevRouteIdRef.current = latestRoute.id;
								setLastRoute(latestRoute);
								addToast(latestRoute);
							}
						}
					} else {
						setRoutes(data);
					}
				}
				load();
				timerRef.current = setInterval(load, 4000);
				return () => { mounted = false; clearInterval(timerRef.current); };
			}, []);

			const t = ctx.locale.bind(NS);
			const refresh = () => { if (sessionId) fetchRoutes(sessionId).then(d => setRoutes(d.routes ? d : d)); };

			// 获取所有出现过的模型及其评分
			const uniqueModels = react.useMemo(() => {
				if (!Array.isArray(routes)) return [];
				const modelMap = new Map();
				routes.forEach(r => {
					const key = `${r.provider}/${r.model}`;
					if (!modelMap.has(key)) {
						modelMap.set(key, { provider: r.provider, model: r.model, ts: r.ts });
					}
				});
				return Array.from(modelMap.values()).sort((a, b) => b.ts - a.ts);
			}, [routes]);

			let body;
			if (routes === null) {
				body = (0, react_jsx_runtime.jsx)("div", { className: "rlb_loading", children: "…" });
			} else if (routes.error) {
				body = (0, react_jsx_runtime.jsxs)("div", { className: "rlb_error", children: [routes.error, " ", (0, react_jsx_runtime.jsx)("button", { className: "rlb_refresh", onClick: refresh, children: t("refresh") })] });
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

			return (0, react_jsx_runtime.jsxs)(react.Fragment, { children: [
				// Toast 通知容器
				(0, react_jsx_runtime.jsx)(ToastContainer, { toasts, removeToast }),

				// 主视图
				(0, react_jsx_runtime.jsxs)("div", { className: "rlb_root", children: [
					// 当前模型指示器
					lastRoute && (0, react_jsx_runtime.jsxs)("div", {
						className: "current-model-indicator",
						children: [
							(0, react_jsx_runtime.jsx)("span", { className: "current-model-pulse" }),
							"当前调用: ",
							getModelScore(lastRoute.provider, lastRoute.model).name,
							" (",
							getModelScore(lastRoute.provider, lastRoute.model).score,
							"/10)"
						]
					}),

					// 路由日志头部
					(0, react_jsx_runtime.jsxs)("div", { className: "rlb_header", children: [
						(0, react_jsx_runtime.jsx)("h3", { className: "rlb_title", children: t("view.tab") }),
						sessionId && (0, react_jsx_runtime.jsx)("button", { className: "rlb_refresh", onClick: refresh, children: t("refresh") }),
					]}),
					body,

					// 模型评分区域
					uniqueModels.length > 0 && (0, react_jsx_runtime.jsxs)("div", {
						className: "model-score-section",
						children: [
							(0, react_jsx_runtime.jsx)("h3", {
								style: { margin: "20px 0 12px", fontSize: "15px", fontWeight: 600, color: "var(--dsw-alias-label-primary)" },
								children: t("score.title")
							}),
							uniqueModels.map((m, idx) =>
								(0, react_jsx_runtime.jsx)(ModelScoreCard, {
									key: m.provider + "/" + m.model,
									provider: m.provider,
									model: m.model,
									isCurrent: idx === 0
								})
							)
						]
					})
				] })
			]});
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
