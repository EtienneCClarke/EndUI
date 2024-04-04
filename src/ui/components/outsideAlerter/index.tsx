import { useRef, useEffect } from "react"
import { OutsideAlerterProps } from "./outsideAlerter.types";

function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


const OutsideAlerter = ({ children, callback, ...props }: OutsideAlerterProps) => {
    const wrappedRef = useRef(null);
    useOutsideAlerter(wrappedRef, callback);

    return <div ref={wrappedRef} {...props}>{children}</div>
}

export { OutsideAlerter }