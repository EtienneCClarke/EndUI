import { createContext, forwardRef, useContext, useEffect, useState, useRef } from "react"
import { AlertDialogProps, AlertDialogTriggerProps, AlertDialogContentProps, AlertDialogHeaderProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogFooterProps, AlertDialogActionProps } from "./alert-dialog.types"
import { ButtonProps } from "../button/button.types";
import autoAnimate from "@formkit/auto-animate";
import css from "./alert-dialog.module.css";
import { Button } from "../button";

const AlertDialogContext = createContext({
    state: false,
    showDialog: (state: boolean) => {},
})

const AlertDialog = ({ children }: AlertDialogProps) => {

    const [open, isOpen] = useState(false);

    return (
        <AlertDialogContext.Provider value={{ state: open, showDialog: isOpen }}>
            {children}
        </AlertDialogContext.Provider>
    );
}

const AlertDialogTrigger = forwardRef<HTMLDivElement, AlertDialogTriggerProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { showDialog } = useContext(AlertDialogContext);

        return (
            <div
                className={`${css.trigger} ${className ? className : ''}`}
                ref={ref}
                {...props}
                onClick={() => showDialog(true)}
            >
                {children}
            </div>
        )
    }
)

const AlertDialogContent = ({ children, ...props }: AlertDialogContentProps) => {

    const { state } = useContext(AlertDialogContext);
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current, (el, action) => {

            let keyframes;
    
            if(action === 'add') {

                keyframes = [
                    { opacity: 0 },
                    { opacity: 1 }
                ]

            }

            if(action === 'remove') {

                keyframes = [
                    { opacity: 1 },
                    { opacity: 0 }
                ]

            }

            return new KeyframeEffect(el, keyframes, { duration: 200, easing: 'ease-out' });
    
        });

    }, [parent])

    
    return (
        <section
            className={`${css.wrapper} ${state ? css.open : ''}`}
            tabIndex={-1}
            ref={parent}
            {...props}
        >
            {state &&
                <>
                    <div className={css.content}>
                        {children}
                    </div>
                    <AlertDialogOverlay />
                </>
            }
        </section>
    )
}

const AlertDialogOverlay = forwardRef<HTMLDivElement>(
    (
        { ...props },
        ref
    ) => {
        return <div className={css.overlay} {...props} ref={ref}></div>
    }
);

const AlertDialogHeader = forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.header} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <h2 className={`${css.title} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </h2>
        )
    }
)

const AlertDialogDescription = forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <p className={`${css.description} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </p>
        )
    }
)

const AlertDialogFooter = forwardRef<HTMLDivElement, AlertDialogFooterProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.footer} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const AlertDialogCancel = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { showDialog } = useContext(AlertDialogContext);

        return (
            <Button
                variant='outline'
                className={className}
                onClick={() => showDialog(false)}
                ref={ref}
                {...props}
            >
                {children}
            </Button>
        )
    }
)

const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
    (
        { children, className, action, ...props },
        ref
    ) => {

        const { showDialog } = useContext(AlertDialogContext);

        const composeEvents = () => {
            if(action !== undefined) {
                action();
            }
            showDialog(false);
        }

        return (
            <Button
                className={className}
                onClick={() => composeEvents()}
                ref={ref}
                {...props}
            >
                {children}
            </Button>
        )
    }
)

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction}