interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    className?: string;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.JSX.Element[];
    className?: string;
    value: string;
}

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: any;
    className?: string;
    value?: string;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    className?: string;
    value?: string;
}

export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }