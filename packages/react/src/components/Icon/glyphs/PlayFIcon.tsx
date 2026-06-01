import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const PlayFIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M18.96 9.44 10.64 4.16Q9.92 3.68 9.12 3.64Q8.32 3.6 7.56 4Q6.8 4.4 6.4 5.12Q6 5.84 6 6.64V17.36Q6 18.16 6.4 18.88Q6.8 19.6 7.52 19.96Q8.24 20.32 9.04 20.32Q9.84 20.32 10.64 19.84L18.96 14.56Q19.6 14.08 19.96 13.44Q20.32 12.8 20.32 12Q20.32 11.2 19.96 10.56Q19.6 9.92 18.96 9.44Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(PlayFIcon);
export default ForwardRef;