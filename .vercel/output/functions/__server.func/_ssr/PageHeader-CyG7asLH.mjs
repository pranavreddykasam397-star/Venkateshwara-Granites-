import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-CyG7asLH.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, accent, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-20 bg-[var(--gradient-stone)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl md:text-7xl font-bold tracking-tight",
					children: [
						title,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold italic",
							children: accent
						})
					]
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed",
					children
				})
			]
		})
	});
}
//#endregion
export { PageHeader as t };
