import AccordionExample from "./components/accordion/accordion-example";
import ButtonExample from "./components/button/button-example";
import BadgeExample from "./components/badge/badge-example";
import "./app.css";

function App() {
  return (
    <>
      <div className="component_display">
        <h1>Accordion</h1>
        <AccordionExample />
      </div>
      <div className="component_display">
        <h1>Badge</h1>
        <BadgeExample />
      </div>
      <div className="component_display">
        <h1>Button</h1>
        <ButtonExample />
      </div>
    </>
  );
}

export default App;
