interface AlertDialogProps {
    children: any;
}

interface AlertDialogTriggerProps {
    children: any;
    className?: string;
}

interface AlertDialogContentProps {
    children: any;
    className?: string;
}

interface AlertDialogHeaderProps {
    children: any;
    className?: string;
}

interface AlertDialogTitleProps {
    children: any;
    className?: string;
}

interface AlertDialogDescriptionProps {
    children: any;
    className?: string;
}

interface AlertDialogFooterProps {
    children: any;
    className?: string;
}

interface AlertDialogActionProps {
    children: any;
    action?: () => any;
    className?: string;
}

export type {
    AlertDialogProps,
    AlertDialogTriggerProps,
    AlertDialogContentProps,
    AlertDialogHeaderProps,
    AlertDialogTitleProps,
    AlertDialogDescriptionProps,
    AlertDialogFooterProps,
    AlertDialogActionProps
}