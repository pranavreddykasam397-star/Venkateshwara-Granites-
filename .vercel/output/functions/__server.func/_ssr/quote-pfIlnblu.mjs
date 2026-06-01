import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-CyG7asLH.mjs";
import { i as granite_white_default, n as granite_charcoal_default, r as granite_slate_default, t as granite_beige_default } from "./granite-beige-uyVpzmTI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-pfIlnblu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slabDetails = [
	{
		id: "Nero Quartz",
		name: "Nero Quartz",
		price: 450,
		image: granite_charcoal_default,
		desc: "Brazilian Quartzite. Dark charcoal base with dynamic crystalline white quartz veins."
	},
	{
		id: "Carrara Silver",
		name: "Carrara Silver",
		price: 550,
		image: granite_white_default,
		desc: "Italian Granite. Fine white background with elegant linear silver/grey veining."
	},
	{
		id: "Slate Pepper",
		name: "Slate Pepper",
		price: 380,
		image: granite_slate_default,
		desc: "Indian Granite. Slate grey base speckled with fine black and gold granules."
	},
	{
		id: "Saharan Gold",
		name: "Saharan Gold",
		price: 600,
		image: granite_beige_default,
		desc: "Egyptian Granite. Warm golden ochre base with dramatic beige and bronze swirls."
	}
];
var finishes = [
	{
		id: "Polished",
		name: "Polished",
		multiplier: 1,
		desc: "Glossy, mirror-like depth."
	},
	{
		id: "Honed",
		name: "Honed",
		multiplier: 1.05,
		desc: "Matte, velvet tactile feel."
	},
	{
		id: "Leathered",
		name: "Leathered",
		multiplier: 1.1,
		desc: "Textured, satin-like relief."
	},
	{
		id: "Flamed",
		name: "Flamed",
		multiplier: 1.15,
		desc: "Rugged, organic slip-resistant."
	}
];
var thicknesses = [{
	value: 20,
	label: "20 mm",
	multiplier: 1,
	desc: "Sleek, contemporary profile."
}, {
	value: 30,
	label: "30 mm",
	multiplier: 1.25,
	desc: "Robust, classical monolithic depth."
}];
function QuotePage() {
	const [selectedSlab, setSelectedSlab] = (0, import_react.useState)("Nero Quartz");
	const [selectedFinish, setSelectedFinish] = (0, import_react.useState)("Polished");
	const [selectedThickness, setSelectedThickness] = (0, import_react.useState)(20);
	const [length, setLength] = (0, import_react.useState)(2400);
	const [width, setWidth] = (0, import_react.useState)(600);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const activeSlab = slabDetails.find((s) => s.id === selectedSlab) || slabDetails[0];
	const activeFinish = finishes.find((f) => f.id === selectedFinish) || finishes[0];
	const activeThickness = thicknesses.find((t) => t.value === selectedThickness) || thicknesses[0];
	const areaSqM = length * width / 1e6;
	const materialCost = areaSqM * activeSlab.price * activeFinish.multiplier * activeThickness.multiplier;
	const fabricationCost = 250;
	const installCost = 450;
	const totalCost = materialCost + fabricationCost + installCost;
	const handleReset = () => {
		setSelectedSlab("Nero Quartz");
		setSelectedFinish("Polished");
		setSelectedThickness(20);
		setLength(2400);
		setWidth(600);
		setName("");
		setEmail("");
		setPhone("");
		setNotes("");
		setSubmitted(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Configurator",
		title: "Interactive",
		accent: "estimate.",
		children: "Select your material, input your dimensions, and specify your finishes to receive an instant dynamic estimation for your space."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: "var(--gradient-stone)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-12",
			children: !submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-bold mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-sm",
								children: "01"
							}), " Select Material"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: slabDetails.map((slab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedSlab(slab.id),
								className: `flex gap-4 p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 ${selectedSlab === slab.id ? "border-primary ring-1 ring-primary shadow-sm" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: slab.image,
										alt: slab.name,
										className: "w-full h-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display font-bold text-sm text-foreground",
										children: slab.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1",
										children: [
											"£",
											slab.price,
											" / m² base"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground/80 leading-snug mt-1.5 line-clamp-2",
										children: slab.desc
									})
								] })]
							}, slab.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-bold mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-sm",
								children: "02"
							}), " Dimensions"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-stone p-6 rounded-[var(--radius)] space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground",
											children: "Length"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display font-bold text-lg",
											children: [
												length,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-sans text-muted-foreground",
													children: "mm"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: "500",
										max: "3500",
										step: "50",
										value: length,
										onChange: (e) => setLength(Number(e.target.value)),
										className: "w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[10px] text-muted-foreground/60 mt-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Min: 500mm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Max: 3500mm (Single Slab Limit)" })]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground",
											children: "Width"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display font-bold text-lg",
											children: [
												width,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-sans text-muted-foreground",
													children: "mm"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: "300",
										max: "1500",
										step: "50",
										value: width,
										onChange: (e) => setWidth(Number(e.target.value)),
										className: "w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[10px] text-muted-foreground/60 mt-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Min: 300mm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Max: 1500mm" })]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border/60 pt-4 flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Total Surface Area:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-sm font-bold text-foreground",
										children: [areaSqM.toFixed(3), " m²"]
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-bold mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-sm",
								children: "03"
							}), " Face Finish"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-4",
							children: finishes.map((finish) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedFinish(finish.id),
								className: `p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 ${selectedFinish === finish.id ? "border-primary ring-1 ring-primary shadow-sm" : "border-border"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display font-bold text-sm text-foreground",
										children: finish.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5",
										children: finish.multiplier === 1 ? "Standard" : `+${Math.round((finish.multiplier - 1) * 100)}% premium`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground/80 mt-2 leading-snug",
										children: finish.desc
									})
								]
							}, finish.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-bold mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-sm",
								children: "04"
							}), " Slab Thickness"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: thicknesses.map((thickness) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedThickness(thickness.value),
								className: `p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 flex justify-between items-center ${selectedThickness === thickness.value ? "border-primary ring-1 ring-primary shadow-sm" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display font-bold text-sm text-foreground",
									children: thickness.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground/80 mt-1 leading-snug",
									children: thickness.desc
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider font-semibold text-muted-foreground",
									children: thickness.multiplier === 1 ? "Base" : `+${Math.round((thickness.multiplier - 1) * 100)}%`
								})]
							}, thickness.value))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-bold mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-sm",
								children: "05"
							}), " Project Inquiries"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-stone p-6 rounded-[var(--radius)] space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "fullName",
										className: "block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "fullName",
										type: "text",
										required: true,
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "E.g., Alexander Sterling",
										className: "w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "emailAddr",
										className: "block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5",
										children: "Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "emailAddr",
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "alexander@sterlingresidences.com",
										className: "w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "phoneNumber",
									className: "block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5",
									children: "Phone Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phoneNumber",
									type: "tel",
									required: true,
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "E.g., +91 9440792235",
									className: "w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "projectDetails",
									className: "block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5",
									children: "Project Specifics (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "projectDetails",
									rows: 4,
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "Detail any sink cutouts, hob cutouts, splashbacks, or bespoke edge details...",
									className: "w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300 resize-none"
								})] })
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-28 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-stone p-8 rounded-[var(--radius)] shadow-[var(--shadow-card)] relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 rounded-full bg-accent/5 translate-x-8 -translate-y-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6",
								children: "Estimate Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 mb-8 pb-6 border-b border-border/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display font-bold text-foreground",
											children: activeSlab.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground block mt-0.5",
											children: [
												length,
												"mm × ",
												width,
												"mm · ",
												activeThickness.label
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display font-semibold text-foreground",
											children: ["£", materialCost.toFixed(0)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Face Finish: ", activeFinish.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["× ", activeFinish.multiplier] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thickness Factor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["× ", activeThickness.multiplier] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 mb-8 pb-6 border-b border-border/60 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Precision Fabrication Fee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-sans",
										children: ["£", fabricationCost]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Laser Template & Installation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-sans",
										children: ["£", installCost]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 mb-8 text-center bg-card/40 p-6 rounded-[var(--radius)] border border-border/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
										children: "Estimated Investment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-4xl md:text-5xl font-bold text-gold tracking-tight mt-1",
										children: ["£", totalCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground/60 leading-normal max-w-[240px] mx-auto pt-2",
										children: "Estimated guide price. Excludes VAT. Final templates govern final contract rates."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								onClick: () => {
									if (name && email && phone) setSubmitted(true);
									else alert("Please fill out Name, Email, and Phone fields to proceed.");
								},
								className: "w-full text-white py-4 rounded-[var(--radius)] text-xs font-semibold uppercase tracking-[0.2em] shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300",
								style: { background: "var(--gradient-gold)" },
								children: "Submit Quotation Design"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border/80 p-6 rounded-[var(--radius)] bg-card/60 text-xs leading-relaxed text-muted-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display font-semibold text-foreground uppercase tracking-[0.15em] mb-2",
								children: "Our Estimate Process"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2",
								children: "1. Your specifications are mapped to inventory availability instantly."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2",
								children: "2. An estimator reviews cut optimization and grain-matching patterns."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3. A formal contract drawing and final rates are sent in 48 hours." })
						]
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mx-auto glass-stone p-8 md:p-12 rounded-[var(--radius)] shadow-[var(--shadow-card)] text-center animate-float-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[var(--shadow-gold)]",
						style: { background: "var(--gradient-gold)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-8 h-8 text-white",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: "2",
								d: "M5 13l4 4L19 7"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl font-bold tracking-tight mb-4",
						children: "Quotation Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed",
						children: [
							"Thank you, ",
							name,
							". Your bespoke configuration has been recorded under reference ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-bold text-foreground",
								children: ["VG-QT-", Math.floor(Math.random() * 9e3) + 1e3]
							}),
							". An expert estimator will review grain matching and email you within 48 hours."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card/80 border border-border p-6 rounded-[var(--radius)] text-left space-y-4 mb-8 text-xs relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 bg-accent/10 px-3 py-1 text-[9px] uppercase tracking-widest text-gold font-semibold",
								children: "Specification Record"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-y-4 gap-x-2 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5",
										children: "Chosen Slab"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-bold text-foreground text-sm",
										children: activeSlab.name
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5",
										children: "Thickness & Finish"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display font-bold text-foreground text-sm",
										children: [
											activeThickness.label,
											" · ",
											activeFinish.name
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5",
										children: "Dimensions Selected"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display font-semibold text-foreground text-sm",
										children: [
											length,
											"mm × ",
											width,
											"mm"
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5",
										children: "Surface Area"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display font-semibold text-foreground text-sm",
										children: [areaSqM.toFixed(3), " m²"]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border/80 pt-4 flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "uppercase tracking-wider text-[9px] text-muted-foreground/80",
									children: "Estimated Guide Investment"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-lg font-bold text-gold",
									children: ["£", totalCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-4 justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleReset,
							className: "border border-border px-8 py-3.5 rounded-[var(--radius)] text-xs uppercase tracking-[0.15em] hover:bg-primary/5 transition-all duration-300",
							children: "Configure Another Space"
						})
					})
				]
			})
		})
	})] });
}
//#endregion
export { QuotePage as component };
