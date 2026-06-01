import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CyG7asLH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CvbpZjGr.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "Pimlico Kitchen",
		subtitle: "Nero Quartz",
		image: "/assets/project-kitchen-D4MUWNZz.png"
	},
	{
		title: "Hampstead Bath",
		subtitle: "Carrara Silver",
		image: "/assets/project-bathroom-Bg3Sx9Ld.png"
	},
	{
		title: "Atelier",
		subtitle: "Behind the scenes",
		image: "/assets/project-workshop-C-RIBnMu.png"
	}
];
function GalleryGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-32",
		style: { background: "var(--gradient-stone)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[var(--radius)] group aspect-[4/5]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: project.title,
							className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 right-6 glass-stone p-4 rounded-[var(--radius)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: project.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1",
								children: project.subtitle
							})]
						})
					]
				}, project.title))
			})
		})
	});
}
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Portfolio",
		title: "Selected",
		accent: "work.",
		children: "A curated selection of our recent installations across London's finest residences and commercial spaces."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, {})] });
}
//#endregion
export { GalleryPage as component };
