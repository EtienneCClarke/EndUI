import { createContext, forwardRef, useContext, useState } from "react";
import { SelectContentProps, SelectedContextProps, SelectGroupProps, SelectItemProps, SelectProps, SelectTriggerProps } from "./select.types";
import css from "./select.module.css";
import { OutsideAlerter } from "../outsideAlerter";

const SelectContext = createContext<SelectedContextProps>({
    open: false,
    setOpen: (_state: boolean) => {},
    selected: undefined,
    setSelected: (_value: any) => {},
    label: undefined
})

const Select = ({
    children,
    className,
    defaultValue = undefined,
    defaultLabel = undefined,
    onChange = () => {},
    ...props
}: SelectProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<any>(defaultValue);
    const [label, setLabel] = useState<string | undefined>(defaultLabel)

    const setSelected = (val: any, label: any) => {
        setValue(val);
        setLabel(label);
        onChange(val);
    }

    return (
        <SelectContext.Provider value={{ selected: value, setSelected, open, setOpen, label }}>
            <OutsideAlerter
                className={`${css.select_container} ${className ? className : ''}`}
                callback={() => setOpen(false)}
                {...props}
            >
                {children}
            </OutsideAlerter>
        </SelectContext.Provider>
    )
}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { label, selected, open, setOpen } = useContext(SelectContext);

        return (
            <button className={`${css.select} ${className ? className : ''}`} ref={ref} {...props} onClick={() => setOpen(!open)}>
                {selected == undefined ? children : label }
                <svg
                    className={css.select_carrot}
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 -960 960 960"
                    width="16"
                >
                    <path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/>
                </svg>
            </button>
        )
    }
)

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { open } = useContext(SelectContext);

        if(!open) return <></>;

        return (
            <div
                className={`${css.content} ${className ? className : ''}`}
                tabIndex={-1    }
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )
    }
)

const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
    (
        { children, title, className, ...props },
        ref
    ) => {
        return (
            <div
                className={`${css.group} ${className ? className : ''}`}
                ref={ref}
                {...props}
            >
                <p className={css.group_title}>{title}</p>
                {children}
            </div>
        )
    }
)

const SelectItem = forwardRef<HTMLButtonElement, SelectItemProps>(
    (
        { children, value, className, ...props },
        ref
    ) => {

        const { selected, setSelected, setOpen } = useContext(SelectContext)

        const handleEvents = () => {
            if(selected == value) {
                setSelected(undefined, undefined);
            } else {
                setSelected(value, `${children}`);
            }
            setOpen(false);
        }

        return (
            <button
                className={`
                    ${css.item}
                    ${selected === value ? css.selected : ''}
                    ${className ? className : ''}
                `}
                onClick={handleEvents}
                ref={ref}
                {...props}
            >
                {children}
                {selected === value &&
                    <svg
                        className={css.tick}
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 -960 960 960"
                        width="16"
                    >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                    </svg>
                }
            </button>
        )
    }
)

export { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup }