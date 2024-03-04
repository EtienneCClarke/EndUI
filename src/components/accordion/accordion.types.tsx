interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.JSX.Element | React.JSX.Element[] | string | number;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.JSX.Element[];
    value: string;
}

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.JSX.Element[] | React.JSX.Element | string | number | never | never[];
    value?: string;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element[] | JSX.Element | never[] | never | string;
    value?: string;
}

export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }