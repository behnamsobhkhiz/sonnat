import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const MinusOIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M16.96 13.04H6.96Q6.56 13.04 6.28 12.72Q6 12.4 6 12Q6 11.6 6.28 11.28Q6.56 10.96 6.96 10.96H16.96Q17.44 10.96 17.72 11.28Q18 11.6 18 12Q18 12.4 17.72 12.72Q17.44 13.04 16.96 13.04Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(MinusOIcon);
export default ForwardRef;