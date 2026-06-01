import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CyG7asLH.mjs";
import { t as Tilt3D } from "./Tilt3D-u9Gxatue.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-D1d7Pmm2.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		id: "z-black",
		name: "Z-Black Granite Blocks",
		image: "/assets/tile-zblack-DJSS3VM-.png",
		origin: "Brazil · Premium Polished",
		size: "600 × 600 × 15 mm",
		desc: "Deep polished absolute black granite with micro-fine crystalline quartz highlights. Ideal for luxury residential spaces."
	},
	{
		id: "tan-brown",
		name: "Tan Brown Granite Blocks",
		image: "/assets/tile-tanbrown-CkmADVFj.jpg",
		origin: "India · Satin Honed",
		size: "600 × 600 × 15 mm",
		desc: "Warm dark chocolate base textured with elegant copper, bronze, and tan quartz crystalline structures."
	},
	{
		id: "safari-blue",
		name: "Safari Blue Granite Blocks",
		image: "/assets/tile-safariblue-BpNCoJNc.jpg",
		origin: "Brazil · High-Gloss Polished",
		size: "600 × 600 × 15 mm",
		desc: "Extremely rare deep indigo-black base with shimmering sapphire crystals that catch the light elegantly."
	},
	{
		id: "maple-red",
		name: "Maple Red Granite Blocks",
		image: "/assets/tile-maplered-sZmj3SHl.jpg",
		origin: "India · Flamed & Brushed",
		size: "600 × 600 × 20 mm",
		desc: "Rich crimson and burgundy biotite grains. Highly slip-resistant, designed for premium terrace and indoor pathways."
	},
	{
		id: "light-black",
		name: "Light Black Granite Blocks",
		image: "/assets/tile-lightblack-CCihOKdb.png",
		origin: "Egypt · Tactile Leathered",
		size: "600 × 600 × 15 mm",
		desc: "Sophisticated matte charcoal base with silver-grey quartz flecks. Hand-brushed for an organic tactile relief."
	}
];
function BlocksStorePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Collection",
		title: "Premium granite",
		accent: "blocks.",
		children: "Curated natural stone blocks sourced from fine quarries, hand-calibrated, and cut to architectural perfection."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 relative",
		style: { background: "var(--gradient-stone)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: products.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt3D, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-[var(--radius)] group preserve-3d shadow-[var(--shadow-card)] bg-card border border-border flex flex-col h-full overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] overflow-hidden bg-secondary pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: prod.image,
							alt: prod.name,
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 flex flex-col flex-grow preserve-3d",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.25em] text-gold font-semibold",
								children: prod.origin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-foreground mt-2",
								children: prod.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground/60 mt-1",
								children: ["Nominal size: ", prod.size]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground/80 mt-4 leading-relaxed flex-grow",
								children: prod.desc
							})
						]
					})]
				}) }, prod.id))
			})
		})
	})] });
}
//#endregion
export { BlocksStorePage as component };
