import { Badge } from "../components/badge/index";

export default function ButtonExample() {
  return (
    <div className="component_display">
      <h1>Badge</h1>
      <div className="container">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge className="custom_badge">Custom</Badge>
      </div>
    </div>
  );
}
