import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const TuneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M3.04 16.96V18.96H9.04V16.96ZM3.04 4.96V6.96H13.04V4.96ZM13.04 20.96V19.04H21.04V17.04H13.04V15.04H11.04V21.04H13.04ZM7.04 8.96V10.96H3.04V12.96H7.04V14.96H9.04V8.96ZM21.04 13.04V11.04H10.96V13.04ZM15.04 8.96H16.96V7.04H21.04V5.04H16.96V3.04H15.04V9.04Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(TuneIcon);
export default ForwardRef;