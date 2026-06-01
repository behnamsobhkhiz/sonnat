import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const CheckOIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M10.72 16Q10.32 16 10 15.76L7.12 12.8Q6.8 12.56 6.8 12.12Q6.8 11.68 7.12 11.4Q7.44 11.12 7.84 11.12Q8.24 11.12 8.56 11.44L10.72 13.6L15.76 8.56Q16.08 8.24 16.48 8.24Q16.88 8.24 17.16 8.56Q17.44 8.88 17.44 9.28Q17.44 9.68 17.2 10L11.44 15.76Q11.12 16 10.72 16Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(CheckOIcon);
export default ForwardRef;