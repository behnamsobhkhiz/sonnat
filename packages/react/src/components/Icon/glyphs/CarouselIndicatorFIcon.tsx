import { forwardRef } from "react";
import type { Ref, SVGProps } from "react";
const CarouselIndicatorFIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M12 6Q10.4 6 9 6.8Q7.6 7.6 6.8 9Q6 10.4 6 12Q6 13.6 6.8 15Q7.6 16.4 9 17.2Q10.4 18 12 18Q13.6 18 15 17.2Q16.4 16.4 17.2 15Q18 13.6 18 12Q18 10.4 17.2 9Q16.4 7.6 15 6.8Q13.6 6 12 6Z" /></svg>; // @__PURE__ lets bundlers tree-shake unused glyphs (forwardRef is a top-level call).
const ForwardRef = /* @__PURE__ */forwardRef(CarouselIndicatorFIcon);
export default ForwardRef;