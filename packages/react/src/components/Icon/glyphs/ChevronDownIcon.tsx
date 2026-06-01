import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M17.28 9.28Q16.96 9.04 16.56 9.04Q16.16 9.04 15.84 9.28L12 13.2L8.16 9.28Q7.84 9.04 7.44 9.04Q7.04 9.04 6.72 9.32Q6.4 9.6 6.4 10Q6.4 10.4 6.72 10.72L11.28 15.28Q11.6 15.6 12 15.6Q12.4 15.6 12.72 15.28L17.28 10.72Q17.6 10.4 17.6 10Q17.6 9.6 17.28 9.28Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(ChevronDownIcon);
export default ForwardRef;