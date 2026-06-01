import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const BookmarkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M16 2.96H8Q6.8 2.96 5.92 3.88Q5.04 4.8 5.04 6V20Q5.04 20.64 5.56 20.88Q6.08 21.12 6.56 20.8L12 17.2L17.44 20.8Q17.76 20.96 18 20.96Q18.24 20.96 18.48 20.88Q19.04 20.64 19.04 20V6Q19.04 4.8 18.16 3.88Q17.28 2.96 16 2.96Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(BookmarkIcon);
export default ForwardRef;