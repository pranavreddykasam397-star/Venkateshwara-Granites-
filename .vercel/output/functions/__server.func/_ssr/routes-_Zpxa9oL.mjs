import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as granite_white_default, n as granite_charcoal_default, r as granite_slate_default, t as granite_beige_default } from "./granite-beige-uyVpzmTI.mjs";
import { t as logo_default } from "./logo-IOA4F6Ym.mjs";
import { h as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_Zpxa9oL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* RVR Group Landing Hero — Full-viewport intro with Lord Venkateshwara
* deity logo at center, 3D floating geometry, and scroll-triggered parallax.
*/
function LandingHero() {
	const sectionRef = (0, import_react.useRef)(null);
	const [scrollY, setScrollY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setScrollY(Math.max(0, Math.min(1, -rect.top / rect.height)));
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative min-h-screen flex items-center justify-center overflow-hidden",
		style: { perspective: "1200px" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 landing-radial-pulse",
						style: { opacity: 1 - scrollY * 1.5 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-shape landing-shape-1",
						style: { transform: `translateY(${scrollY * -120}px) rotateX(${scrollY * 45}deg) rotateZ(${45 + scrollY * 90}deg)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-shape landing-shape-2",
						style: { transform: `translateY(${scrollY * -80}px) rotateY(${scrollY * 60}deg) rotateZ(${-30 + scrollY * 120}deg)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-shape landing-shape-3",
						style: { transform: `translateY(${scrollY * -200}px) rotateX(${scrollY * -30}deg) rotateZ(${15 + scrollY * -60}deg)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-shape landing-shape-4",
						style: { transform: `translateY(${scrollY * -150}px) rotateY(${scrollY * -45}deg) rotateZ(${60 + scrollY * 75}deg)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-border/20 animate-spin-slow",
							style: {
								transform: `rotateX(${60 + scrollY * 20}deg) rotateZ(${scrollY * 90}deg) scale(${1 + scrollY * .3})`,
								opacity: .3 - scrollY * .3
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gold/10 animate-spin-reverse",
							style: {
								transform: `rotateX(${70 + scrollY * -15}deg) rotateZ(${scrollY * -60}deg) scale(${1 + scrollY * .2})`,
								opacity: .2 - scrollY * .2
							}
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 text-center px-6 max-w-5xl mx-auto",
				style: {
					transform: `translateY(${scrollY * -100}px) scale(${1 - scrollY * .15})`,
					opacity: 1 - scrollY * 2
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-fade-in-1 flex justify-center mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "deity-logo-container",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "deity-logo-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Venkateshwara Granites",
								className: "deity-logo-img",
								style: {
									borderRadius: "8px",
									objectFit: "contain",
									border: "none"
								}
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-fade-in-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-[0.6em] text-muted-foreground mb-8 flex items-center justify-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border block" }),
								"Established 1997",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border block" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-fade-in-2 preserve-3d",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-[0.85]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block landing-title-line-1",
								children: "RVR"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-gold italic landing-title-line-2",
								children: "Group"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-fade-in-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-10 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light",
							children: "A diversified enterprise in natural stone — from quarry to architecture. Granite blocks, slabs, and precision fabrication."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "landing-fade-in-4 mt-14 flex flex-wrap justify-center gap-6 md:gap-10",
						children: [
							{
								label: "Quarries",
								sub: "Black Granite · Tan Brown"
							},
							{
								label: "Factory",
								sub: "CNC Fabrication"
							},
							{
								label: "Granites",
								sub: "Venkateshwara"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.3em] text-gold font-semibold block",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block mt-1",
								children: item.sub
							})]
						}, item.label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3",
				style: { opacity: 1 - scrollY * 4 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60",
					children: "Scroll to explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "landing-scroll-indicator",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "landing-scroll-dot" })
				})]
			})
		]
	});
}
var blocks = [
	{
		image: granite_charcoal_default,
		delay: 0,
		x: "8%",
		size: 80
	},
	{
		image: granite_white_default,
		delay: 1.5,
		x: "28%",
		size: 60
	},
	{
		image: granite_slate_default,
		delay: .8,
		x: "52%",
		size: 90
	},
	{
		image: granite_beige_default,
		delay: 2,
		x: "75%",
		size: 70
	},
	{
		image: granite_charcoal_default,
		delay: 3,
		x: "92%",
		size: 55
	},
	{
		image: granite_slate_default,
		delay: .5,
		x: "40%",
		size: 50
	},
	{
		image: granite_beige_default,
		delay: 2.5,
		x: "15%",
		size: 65
	},
	{
		image: granite_white_default,
		delay: 1,
		x: "65%",
		size: 75
	}
];
function GraniteTransition() {
	const sectionRef = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const windowH = window.innerHeight;
				setProgress(Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height * .5))));
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative py-24 overflow-hidden",
		style: { perspective: "1200px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 pointer-events-none",
			children: blocks.map((block, i) => {
				const floatOffset = Math.sin((progress * 4 + block.delay) * Math.PI) * 20;
				const rotateVal = progress * 360 + block.delay * 45;
				const yShift = (1 - progress) * 120 - floatOffset;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute granite-block-float",
					style: {
						left: block.x,
						top: "50%",
						width: block.size,
						height: block.size,
						transform: `
                  translateY(${yShift}px)
                  rotateZ(${rotateVal * .15}deg)
                  rotateX(${rotateVal * .1}deg)
                  scale(${.6 + progress * .4})
                `,
						opacity: Math.min(1, progress * 2) * (.3 + Math.sin((progress * 3 + block.delay) * Math.PI) * .15),
						animationDelay: `${block.delay}s`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: block.image,
						alt: "",
						className: "w-full h-full object-cover rounded-lg shadow-lg",
						style: { filter: `blur(${Math.max(0, (1 - progress) * 2)}px)` }
					})
				}, i);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 text-center px-6",
			style: {
				transform: `translateY(${30 - progress * 30}px)`,
				opacity: Math.min(1, progress * 1.8)
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-6 mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.5em] text-muted-foreground",
							children: "Granite Division"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border block" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
					style: { transform: `rotateX(${(1 - progress) * 8}deg) translateZ(${progress * 20}px)` },
					children: ["Venkateshwara ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold italic",
						children: "Granites."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-6 text-base md:text-lg max-w-md mx-auto font-light",
					style: {
						transform: `translateY(${(1 - progress) * 15}px)`,
						opacity: Math.max(0, (progress - .3) * 1.6)
					},
					children: "Premium granite blocks from our quarries in Telangana — cut, polished, and delivered to perfection."
				})
			]
		})]
	});
}
var cards = [
	{
		num: "01",
		title: "About",
		subtitle: "Heritage & founder",
		to: "/about"
	},
	{
		num: "02",
		title: "Blocks",
		subtitle: "Bespoke block store",
		to: "/products"
	},
	{
		num: "03",
		title: "Gallery",
		subtitle: "Selected work",
		to: "/gallery"
	}
];
function SectionPreview() {
	const navigate = useNavigate();
	const [activeCard, setActiveCard] = (0, import_react.useState)(null);
	const [mousePos, setMousePos] = (0, import_react.useState)({});
	const sectionRef = (0, import_react.useRef)(null);
	const [sectionProgress, setSectionProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const windowH = window.innerHeight;
				setSectionProgress(Math.max(0, Math.min(1, (windowH - rect.top) / (windowH * .6))));
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleNavigate = (to) => {
		setActiveCard(to);
		setTimeout(() => {
			navigate({ to });
		}, 700);
	};
	const handleMouseMove = (e, cardTo) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width - .5) * 2;
		const y = ((e.clientY - rect.top) / rect.height - .5) * 2;
		setMousePos((prev) => ({
			...prev,
			[cardTo]: {
				x,
				y
			}
		}));
	};
	const handleMouseLeave = (cardTo) => {
		setMousePos((prev) => ({
			...prev,
			[cardTo]: {
				x: 0,
				y: 0
			}
		}));
	};
	const ease = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	const ep = ease(sectionProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "py-32 relative overflow-hidden",
		style: { background: "var(--gradient-stone)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 pointer-events-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-particle section-particle-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-particle section-particle-2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-particle section-particle-3" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					transform: `translateY(${40 - ep * 40}px)`,
					opacity: ep
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4 text-center",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl font-bold tracking-tight mb-20 text-center",
					children: ["Navigate the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold italic",
						children: "atelier."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-5 max-w-2xl mx-auto",
				children: cards.map((card, i) => {
					const isActive = activeCard === card.to;
					const mp = mousePos[card.to] || {
						x: 0,
						y: 0
					};
					const stagger = Math.max(0, ep - i * .1) / (1 - i * .1);
					const cardEp = ease(Math.min(1, stagger));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							perspective: "1000px",
							transform: `translateY(${60 - cardEp * 60}px)`,
							opacity: cardEp
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleNavigate(card.to),
							onMouseMove: (e) => handleMouseMove(e, card.to),
							onMouseLeave: () => handleMouseLeave(card.to),
							className: `
                    nav-btn relative w-full px-8 py-7 rounded-xl
                    border border-border bg-card
                    flex items-center justify-between gap-6
                    group cursor-pointer overflow-hidden
                    focus:outline-none focus:ring-2 focus:ring-gold/30
                    ${isActive ? "nav-btn-exit" : ""}
                  `,
							style: {
								transform: `
                      rotateX(${mp.y * -4}deg)
                      rotateY(${mp.x * 4}deg)
                      translateZ(${Math.abs(mp.x * mp.y) * 10}px)
                    `,
								transition: isActive ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500",
									style: { background: `radial-gradient(400px circle at ${(mp.x + 1) * 50}% ${(mp.y + 1) * 50}%, oklch(0.68 0.10 80 / 0.07), transparent 60%)` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-6 relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-lg border border-border/80 flex items-center justify-center group-hover:border-gold/40 group-hover:shadow-[0_0_20px_oklch(0.68_0.10_80/0.15)] transition-all duration-500",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-bold text-gold",
											children: card.num
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-foreground transition-colors tracking-tight",
											children: card.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground/50 mt-0.5 uppercase tracking-[0.15em]",
											children: card.subtitle
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-gold/70 transition-colors duration-300 hidden sm:inline",
										children: "Enter"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 group-hover:shadow-[0_0_25px_oklch(0.68_0.10_80/0.12)] transition-all duration-500",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-4 h-4 text-muted-foreground/50 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: "2",
												d: "M9 5l7 7-7 7"
											})
										})
									})]
								})
							]
						})
					}, card.num);
				})
			})]
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraniteTransition, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionPreview, {})
	] });
}
//#endregion
export { HomePage as component };
