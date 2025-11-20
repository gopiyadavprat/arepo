import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(options = { once: true, margin: "-10%" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, options as any);

    return { ref, isInView };
}
