import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as logo_default } from "./logo-IOA4F6Ym.mjs";
import { c as HeadContent, d as lazyRouteComponent, f as createFileRoute, m as Link, p as createRootRouteWithContext, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as setupRouterSsrQueryIntegration } from "../_libs/@tanstack/react-router-ssr-query+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CaQrWUQg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navLinks = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Blocks"
	},
	{
		to: "/gallery",
		label: "Gallery"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-stone py-3 shadow-[var(--shadow-card)]" : "bg-transparent py-6"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Venkateshwara Granites",
						className: "h-11 w-11 rounded-sm object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight text-foreground uppercase",
						children: ["Venkateshwara ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "Granites"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-8",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300 no-underline",
						activeProps: { className: "!text-foreground font-semibold" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						className: "border border-border bg-primary/10 px-6 py-2.5 rounded-[var(--radius)] text-xs uppercase tracking-[0.18em] font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all duration-300 no-underline",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "md:hidden flex flex-col gap-1.5 p-2",
						onClick: () => setMobileOpen(!mobileOpen),
						"aria-label": "Toggle menu",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}` })
						]
					})]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden glass-stone border-t border-border/50 mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4",
				children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: "text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors py-2 no-underline",
					activeProps: { className: "!text-foreground font-semibold" },
					onClick: () => setMobileOpen(false),
					children: link.label
				}, link.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Venkateshwara Granites",
							className: "h-9 w-9 rounded-sm object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-base font-bold tracking-tight text-foreground uppercase",
							children: ["RVR Group ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Granites"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground leading-relaxed max-w-xs",
						children: "Venkateshwara Granites — Master fabricators of premium granite surfaces. Quarried, cut, polished, and installed to perfection."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["R. Venkateshwara Rao · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "+91 9440792235"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["R. Kiranmaye · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "9030086019"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Phone: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "0870-2524066"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:venkateswaragranites.rvr@gmail.com",
								className: "text-foreground hover:text-gold transition-colors block mt-1",
								children: "venkateswaragranites.rvr@gmail.com"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4",
							children: "Office"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: [
								"23-6-231, Beside J.S.M. School Lane,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Hunter Road, Hanamkonda,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Warangal — 506 001, Telangana, India"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-wider",
							children: "GST: 36AAFFV4048J1ZW"
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em]",
					children: "© 2026 Venkateshwara Granites · RVR Group"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Quarried · Cut · Polished · Installed"
				})]
			})]
		})
	});
}
var styles_default = "/assets/styles-DSs9hhZY.css";
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Venkateshwara Granites — Premium Granite Supply & Fabrication" },
			{
				name: "description",
				content: "Master fabricators of premium granite surfaces since 1997. Quarried, cut, polished, and installed to perfection."
			},
			{
				property: "og:title",
				content: "Venkateshwara Granites — Premium Granite Supply & Fabrication"
			},
			{
				property: "og:description",
				content: "Master fabricators of premium granite surfaces since 1997."
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.jpg",
				type: "image/jpeg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			}
		]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "font-body antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./quote-pfIlnblu.mjs");
var Route$4 = createFileRoute("/quote")({
	head: () => ({ meta: [
		{ title: "Request a Quote — Venkateshwara Granites" },
		{
			name: "description",
			content: "Get a detailed estimate for your granite project. Send us your dimensions and material preferences — we respond within 48 hours."
		},
		{
			property: "og:title",
			content: "Request a Quote — Venkateshwara Granites"
		},
		{
			property: "og:description",
			content: "Send us your project details and receive a detailed estimate within 48 hours."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-D1d7Pmm2.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Granite Blocks — Venkateshwara Granites" },
		{
			name: "description",
			content: "Explore our curated collection of premium granite blocks. Absolute Z-black, tan brown, safari blue, maple red, and light black blocks."
		},
		{
			property: "og:title",
			content: "Granite Blocks — Venkateshwara Granites"
		},
		{
			property: "og:description",
			content: "Curated collection of premium granite blocks from Venkateshwara Granites."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-CvbpZjGr.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Project Gallery — Venkateshwara Granites" },
		{
			name: "description",
			content: "Browse our portfolio of completed granite installations — kitchens, bathrooms, and bespoke surfaces."
		},
		{
			property: "og:title",
			content: "Project Gallery — Venkateshwara Granites"
		},
		{
			property: "og:description",
			content: "Selected works from our portfolio of premium granite installations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BOn_qQAM.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Our Story — Venkateshwara Granites" },
		{
			name: "description",
			content: "Founded in 1997 by R. Venkateshwar Rao, RVR Groups is a master fabricator of premium granite surfaces. Learn about our heritage and commitment to stonework."
		},
		{
			property: "og:title",
			content: "Our Story — Venkateshwara Granites"
		},
		{
			property: "og:description",
			content: "A legacy of natural stone fabrication founded by R. Venkateshwar Rao in 1997."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-_Zpxa9oL.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "RVR Group — Venkateshwara Granites · Premium Granite Supply & Fabrication" },
		{
			name: "description",
			content: "RVR Group — a diversified enterprise in natural stone. Venkateshwara Granites: master fabricators of premium granite surfaces since 1997. Quarries, factory, and architectural-grade blocks & slabs."
		},
		{
			property: "og:title",
			content: "RVR Group — Venkateshwara Granites"
		},
		{
			property: "og:description",
			content: "A diversified enterprise in natural stone. Premium granite supply and fabrication since 1997."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var QuoteRoute = Route$4.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$5
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$5
});
var GalleryRoute = Route$2.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	GalleryRoute,
	ProductsRoute,
	QuoteRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getContext() {
	return { queryClient: new QueryClient() };
}
function getRouter() {
	const context = getContext();
	const router = createRouter({
		routeTree,
		context,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient: context.queryClient
	});
	return router;
}
//#endregion
export { getRouter };
