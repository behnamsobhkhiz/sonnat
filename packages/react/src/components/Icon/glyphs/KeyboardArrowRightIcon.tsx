import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const KeyboardArrowRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M15.28 11.28 10.72 6.72Q10.4 6.4 10 6.4Q9.6 6.4 9.32 6.72Q9.04 7.04 9.04 7.44Q9.04 7.84 9.28 8.16L13.2 12L9.28 15.84Q9.04 16.16 9.04 16.56Q9.04 16.96 9.32 17.28Q9.6 17.6 10 17.6Q10.4 17.6 10.72 17.28L15.28 12.72Q15.6 12.4 15.6 12Q15.6 11.6 15.28 11.28Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(KeyboardArrowRightIcon);
export default ForwardRef;