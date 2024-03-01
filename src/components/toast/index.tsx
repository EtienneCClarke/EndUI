import { createContext, useContext, useState, useMemo } from "react";

type ToastContextValue = {
    open: (message: string) => void;
    close: (id: number) => void
}

type ToastType = {
    message: string;
    id: number;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const useToast = () => useContext(ToastContext);

const ToastProvider = ({
    children,
}: {
    children: React.JSX.Element[] | React.JSX.Element;
}) => {

    const [toasts, setToasts] = useState<ToastType[]>([]);

    function openToast(message: string) {
        const newToast = {
            id: Date.now(),
            message
        };
        setToasts((prevToasts) => [...prevToasts, newToast])
    }

    function closeToast(id: number) {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id)
        );
    }

    const contextValue = useMemo(() => ({
        open: openToast,
        close: closeToast
    }), [])

    return(
        <ToastContext.Provider value={contextValue}>
            {children}
            {toasts &&
                toasts.map((toast) => {
                    return (
                        <Toast
                            key={toast.id}
                            message={toast.message}
                            close={() => closeToast(toast.id)}
                        />
                    );
                })
            }
        </ToastContext.Provider>
    )
}

const Toast = ({ message, close }: { message: string, close: () => void }) => {
    return(
        <div className="toast">
            <p>{message}</p>
            <button onClick={close}>{`\u274c`}</button>
        </div>
    )
}

export { useToast, ToastProvider }