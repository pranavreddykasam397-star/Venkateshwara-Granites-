import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Tilt3D-u9Gxatue.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Tilt3D({ children, className = "", max = 12, glare = true }) {
	const ref = (0, import_react.useRef)(null);
	const [style, setStyle] = (0, import_react.useState)({
		"--rx": "0deg",
		"--ry": "0deg",
		"--mx": "50%",
		"--my": "50%"
	});
	const [hovering, setHovering] = (0, import_react.useState)(false);
	function handleMouseMove(e) {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;
		const rx = (y - .5) * -max;
		const ry = (x - .5) * max;
		setStyle({
			"--rx": `${rx}deg`,
			"--ry": `${ry}deg`,
			"--mx": `${x * 100}%`,
			"--my": `${y * 100}%`
		});
		setHovering(true);
	}
	function handleMouseLeave() {
		setStyle({
			"--rx": "0deg",
			"--ry": "0deg",
			"--mx": "50%",
			"--my": "50%"
		});
		setHovering(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `perspective-1200 ${className}`,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "preserve-3d transition-transform duration-300 ease-out relative",
			style: {
				transform: `rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))`,
				...style
			},
			children: [children, glare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-[var(--radius)] pointer-events-none mix-blend-overlay transition-opacity duration-300",
				style: {
					background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.25) 0%, transparent 60%)`,
					opacity: hovering ? 1 : 0
				}
			})]
		})
	});
}
//#endregion
export { Tilt3D as t };
