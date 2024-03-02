import { Badge } from "./index";

export default function ButtonExample() {
  return (
    <div className="badges_container">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
