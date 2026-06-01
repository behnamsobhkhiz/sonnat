import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const TriangleTopFIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M13.44 7.68Q12.88 6.96 12 6.96Q11.12 6.96 10.56 7.68L6.96 12.64Q6.56 13.12 6.68 13.68Q6.8 14.24 7.24 14.6Q7.68 14.96 8.4 14.96H15.6Q16.32 14.96 16.76 14.6Q17.2 14.24 17.32 13.68Q17.44 13.12 17.04 12.64Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(TriangleTopFIcon);
export default ForwardRef;