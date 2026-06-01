import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const MapFIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M9.76 5.44 14.24 7.68V18.56L9.76 16.32ZM21.52 2.96Q21.04 2.64 20.48 2.96L15.28 5.92L8.96 2.88H8.48L2.48 6.24Q2 6.48 2 7.12V20.16Q2 20.72 2.48 21.04Q2.72 21.2 3 21.2Q3.28 21.2 3.52 21.04L8.72 18.08L14.88 21.12Q15.04 21.2 15.28 21.2L15.52 21.12L21.52 17.76Q22 17.52 22 16.88V3.84Q22 3.28 21.52 2.96Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(MapFIcon);
export default ForwardRef;