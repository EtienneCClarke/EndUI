import { createContext, useContext, useState, useMemo, useRef, useEffect } from "react";
import { ToastContextProps, ToastProviderProps, ToastProps, ToastCreateProps } from "./toast.types";
import { asyncDelay } from "../../utils/async-delay";
import css from "./toast.module.css";
import autoAnimate, { getTransitionSizes } from "@formkit/auto-animate";

const ToastContext = createContext<ToastContextProps>({
    create: (content: any) => {},
    close: (id: number) => {}
});

const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children, position = "bottom_right", className }: ToastProviderProps) => {

    const [toasts, setToasts] = useState<ToastCreateProps[]>([]);

    const parent = useRef(null);
    
    const MAX_TOASTS = 5;

    function createToast({ title, description, action, duration = 10000, variant }: ToastCreateProps ) {

        const newToast = {
            id: Date.now(),
            title,
            description,
            action,
            duration,
            variant
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    }

    function closeToast(id: number) {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id)
        );
    }

    const contextValue = useMemo(() => ({
        create: createToast,
        close: closeToast
    }), [])

    useEffect(() => {
        parent.current && autoAnimate(parent.current, (el, action, oldCoords, newCoords) => {

            let keyframes;
    
            if(action === 'add') {
                
                if(position === 'top_left' || position === 'top_right') {
                    keyframes = [
                        { transform: 'translateY(calc(-100% - 2rem))', opacity: 0 },
                        { transform: 'translateY(0)', opacity: 1 }
                    ]
                }

                if(position === 'bottom_left' || position === 'bottom_right') {
    
                    keyframes = [
                        { transform: 'translateY(calc(100% + 2rem))', opacity: 0 },
                        { transform: 'translateY(0)', opacity: 1 }
                    ]
    
                }

            }

            if(action === 'remove') {

                if(position === 'top_right' || position === 'bottom_right') {
                    keyframes = [
                        { transform: 'translate(0, 0)', opacity: 1 },
                        { transform: 'translate(calc(100% + 2rem), 0)', opacity: 0 }
                    ]
                }

                if(position === 'top_left' || position === 'bottom_left') {
                    keyframes = [
                        { transform: 'translate(0, 0)', opacity: 1 },
                        { transform: 'translate(calc(-100% - 2rem), 0)', opacity: 0 }
                    ]
                }

            }

            if (action === 'remain') {
                // for items that remain, calculate the delta
                // from their old position to their new position
                const deltaX = oldCoords.left - newCoords.left
                const deltaY = oldCoords.top - newCoords.top
                // use the getTransitionSizes() helper function to
                // get the old and new widths of the elements
                const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords)
                // set up our steps with our positioning keyframes
                const start = { transform: `translate(${deltaX}px, ${deltaY}px)` }
                const end = { transform: `translate(0, 0)` }
                // if the dimensions changed, animate them too.
                if (widthFrom !== widthTo) {
                  start.width = `${widthFrom}px`
                  end.width = `${widthTo}px`
                }
                if (heightFrom !== heightTo) {
                  start.height = `${heightFrom}px`
                  end.height = `${heightTo}px`
                }
                keyframes = [start, end]
            }

            return new KeyframeEffect(el, keyframes, { duration: 300, easing: 'ease-out' });
    
        });
    }, [parent]);

    return(
        <ToastContext.Provider value={contextValue}>
            <>
                {children}
                <section
                    aria-label="Notifications alt-t"
                    tabIndex={-1}
                    className={`${css.toasts_container} ${css[position]} ${className ? className : ''}`}
                    ref={parent}
                >
                    {toasts?.map((toast, index) => {
                        if(index > MAX_TOASTS - 1) { return; }
                        return (
                            <Toast
                                key={toast.id}
                                id={toast.id}
                                title={toast?.title}
                                description={toast?.description}
                                action={toast?.action}
                                close={() => closeToast(toast.id)}
                                duration={toast?.duration}
                                variant={toast?.variant}
                            />
                        )})
                    }
                </section>
            </>
        </ToastContext.Provider>
    )
}

const Toast = ({ id, title, description, action, duration = 10000, variant = "primary", close, ...props }: ToastProps) => {

    const composeEvents = () => {
        if(action?.fn !== undefined) {
            action?.fn();
        }
        close();
    }

    useEffect(() => {
        asyncDelay(duration).then(() => close());
    }, [])

    return(
        <div className={`${css.toast} ${css[variant]}`} {...props}>
            <div className={css.toast_content}>
                {title &&
                    <p className={css.title}>
                        {title}
                    </p>
                }
                {description &&
                    <p className={css.description}>
                        {description}
                    </p>
                }
            </div>
            {action &&
                <div className={css.action_container}>
                    <button
                        className={`${css.action_button}`}
                        {...props}
                        onClick={() => composeEvents()}
                    >
                        {action?.label}
                    </button>
                </div>
            }
            <button
                className={css.close_button}
                onClick={() => close()}
            >
                <svg
                    className={css.close_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    height="17"
                    width="17"
                    viewBox="0 -960 960 960"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </button>
        </div>
    )
}

export { useToast, ToastProvider }