import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../components/select";

export default function SelectExample() {
    return (
        <div className="component_display">
            <h1>Select</h1>
            <Select style={{ maxWidth: '180px'}}>
                <SelectTrigger>
                    Select food
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup title="Fruits">
                        <SelectItem value="apple">
                            Apple
                        </SelectItem>
                        <SelectItem value="banana">
                            Banana
                        </SelectItem>
                        <SelectItem value="blueberry">
                            Blueberry
                        </SelectItem>
                        <SelectItem value="grapes">
                            Grapes
                        </SelectItem>
                        <SelectItem value="pineapple">
                            Pineapple
                        </SelectItem>
                    </SelectGroup>
                    <SelectGroup title="Vegetables">
                        <SelectItem value="Carrot">
                            Carrot
                        </SelectItem>
                        <SelectItem value="Lettuce">
                            Lettuce
                        </SelectItem>
                        <SelectItem value="Turnip">
                            Turnip
                        </SelectItem>
                        <SelectItem value="Onion">
                            Onion
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}