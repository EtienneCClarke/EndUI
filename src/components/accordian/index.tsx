import { cloneElement, createContext, useContext, useState } from "react";
import Chevron from "./chevron.svg";
import css from "./accordion.module.css";

const AccordionContext = createContext({
  target: "",
  updateTarget: (value: string) => {},
});

const Accordion = ({
  children,
}: {
  children: React.JSX.Element[];
}): JSX.Element => {
  const [target, setTarget] = useState<string>("");
  const updateTarget = (newTarget: string) => setTarget(newTarget);
  return (
    <AccordionContext.Provider value={{ target, updateTarget }}>
      <div className={css.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  children,
  value,
  className,
  style,
}: {
  children: React.JSX.Element[];
  value: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const clonedTrigger = cloneElement(children[0], { value });
  const clonedContent = cloneElement(children[1], { value });

  return (
    <div className={`${css.accordion_item} ${className}`} style={style}>
      {clonedTrigger}
      {clonedContent}
    </div>
  );
};

const AccordionTrigger = ({
  children,
  value,
  className,
  style,
}: {
  children?: JSX.Element | string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { target, updateTarget } = useContext(AccordionContext);

  return (
    <button
      className={`${css.accordion_trigger} ${target === value ? css.accordion_trigger_open : ""} ${className}`}
      style={style}
      onClick={() => updateTarget(target == value ? "" : value)}
    >
      {children}
      <img className={css.accordion_chevron} src={Chevron} alt="" />
    </button>
  );
};

const AccordionContent = ({
  children,
  value,
  className,
  style,
}: {
  children?: JSX.Element[] | JSX.Element | never[] | never | string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { target } = useContext(AccordionContext);

  return (
    <div
      className={`${css.accordion_content} ${target === value ? css.accordion_open : ""} ${className}`}
      style={style}
    >
      <div>{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
