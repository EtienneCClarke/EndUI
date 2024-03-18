import AccordionExample from "./ui/examples/accordion-example";
import AlertExample from "./ui/examples/alert-example";
import ButtonExample from "./ui/examples/button-example";
import BadgeExample from "./ui/examples/badge-example";
import { ToastProvider, useToast } from "./ui/components/toast";
import "./app.css";
import ToastExample from "./ui/examples/toast-example";

function App() {

  const toast = useToast();

  return (
    <>
      <AccordionExample />
      <AlertExample />
      <BadgeExample />
      <ButtonExample />
      <ToastExample />
    </>
  );
}

export default App;
