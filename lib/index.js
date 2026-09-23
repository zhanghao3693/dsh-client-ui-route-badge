/**
 * dsh-client-ui-route-badge — host half (stub).
 *
 * 本插件只有浏览器端逻辑（lib/client.js，经 window.__ModuleLoader__ 注入）。
 * cordis loader 会 import 服务端入口，故提供一个最小的 host 侧 stub，
 * 结构对齐 dsh-model-usage-dashboard-v2：name + 可选 inject + 空 apply。
 */
export const name = "route-badge";

export const apply = () => {};
