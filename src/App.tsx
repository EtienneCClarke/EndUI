import AccordionExample from "./components/accordion/accordion-example";
import { Button } from "./components/button";
import { useToast } from "./components/toast";
import "./app.css";

function App() {

  return (
    <>
      <h1>Accordion</h1>
      <AccordionExample />
      <h1>Button</h1>
      <Button onClick={() => alert("Hello")}>Button</Button>
    </>
  );
}

export default App;
