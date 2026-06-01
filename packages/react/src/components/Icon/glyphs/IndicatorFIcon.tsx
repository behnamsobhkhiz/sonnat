import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const IndicatorFIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M16 12Q16 13.68 14.84 14.84Q13.68 16 12 16Q10.32 16 9.16 14.84Q8 13.68 8 12Q8 10.32 9.16 9.16Q10.32 8 12 8Q13.68 8 14.84 9.16Q16 10.32 16 12Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(IndicatorFIcon);
export default ForwardRef;