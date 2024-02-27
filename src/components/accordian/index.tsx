import { AccordianProps } from "./accordian.types";

const Accordian = ({ title }: AccordianProps): JSX.Element => {
  return <>{title}</>;
};

const AccordianTrigger = (): JSX.Element => {
  return <></>;
};

export { Accordian, AccordianTrigger };
