import { cloneElement, createContext, useContext, useState } from "react";
import { AccordionContentProps, AccordionItemProps, AccordionProps, AccordionTriggerProps } from "./accordion.types";
import css from "./accordion.module.css";

const AccordionContext = createContext({
  target: "",
  updateTarget: (value: string) => {},
});

const Accordion = ({
  children,
  className,
  ...props
}: AccordionProps) => {

  const [target, setTarget] = useState<string>("");
  const updateTarget = (newTarget: string) => setTarget(newTarget);

  return (
    <AccordionContext.Provider value={{ target, updateTarget }}>
      <div
        className={`${css.accordion} ${className ? className : ''}`}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );

};

const AccordionItem = ({
  children,
  className,
  value,
  ...props
}: AccordionItemProps) => {

  const clonedTrigger = cloneElement(children[0], { value });
  const clonedContent = cloneElement(children[1], { value });

  return (
    <div
      className={`${css.accordion_item} ${className ? className : ''}`}
      {...props}
    >
      {clonedTrigger}
      {clonedContent}
    </div>
  );

};

const AccordionTrigger = ({
  children,
  className,
  value,
  ...props
}: AccordionTriggerProps) => {

  const { target, updateTarget } = useContext(AccordionContext);

  return (
    <button
      className={`${css.accordion_trigger} ${target === value ? css.accordion_trigger_open : ''} ${className ? className : ''}`}
      onClick={() => updateTarget(target == value ? "" : value!)}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        className={css.accordion_chevron}
      >
        <path d="M480-358.463 253.847-584.615 296-626.768l184 184 184-184 42.153 42.153L480-358.463Z" />
      </svg>
    </button>
  );

};

const AccordionContent = ({
  children,
  className,
  value,
  ...props
}: AccordionContentProps) => {

  const { target } = useContext(AccordionContext);

  return (
    <div
      className={`${css.accordion_content} ${target === value ? css.accordion_open : ""} ${className ? className : ''}`}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
  
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
