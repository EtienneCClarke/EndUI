import * as React from "react";

interface OutsideAlerterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    callback?: () => any;
}

export type { OutsideAlerterProps }