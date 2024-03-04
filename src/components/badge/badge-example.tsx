import { Badge } from "./index";
import css from "./badge.module.css";

export default function ButtonExample() {
  return (
    <div className="container">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge className={css.custom}>Custom</Badge>
    </div>
  );
}
