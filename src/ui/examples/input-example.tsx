import { Input } from "../components/input";

export default function InputExample() {

    return (
        <div className="component_display">
            <h1>Input</h1>
            <Input type="text" placeholder="Email" style={{ maxWidth: '350px' }}/>
        </div>
    )
}