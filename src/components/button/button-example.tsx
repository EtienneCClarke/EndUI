import { Button } from "./index";
import Icon from "./frame.svg";
import Mail from "./mail.svg";

export default function ButtonExample() {
  return (
    <div className="buttons_container">
      <Button onClick={() => alert("Hello")} variant="primary">
        Primary
      </Button>
      <Button onClick={() => alert("Hello")} variant="secondary">
        Secondary
      </Button>
      <Button onClick={() => alert("Hello")} variant="warning">
        Warning
      </Button>
      <Button onClick={() => alert("Hello")} variant="outline">
        Outline
      </Button>
      <Button onClick={() => alert("Hello")} variant="ghost">
        Ghost
      </Button>
      <Button onClick={() => alert("Hello")} variant="link">
        Link
      </Button>
      <Button onClick={() => alert("Hello")} variant="icon">
        <img src={Icon} alt="google lens" />
      </Button>
      <Button
        onClick={() => alert("Hello")}
        variant="primary"
        style={{ gap: "0.8rem" }}
      >
        <img src={Mail} alt="google lens" />
        Login with email
      </Button>
      <Button onClick={() => alert("Hello")} variant="loading">
        Please wait
      </Button>
    </div>
  );
}
