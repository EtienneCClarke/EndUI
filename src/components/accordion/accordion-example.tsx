import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./index";

export default function AccordionExample() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessbile?</AccordionTrigger>
        <AccordionContent>
          Each accordion item is accessible through the keyboard
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes the accordion is styled by default but also allows for custom
          className or style props
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes, it is animated.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
