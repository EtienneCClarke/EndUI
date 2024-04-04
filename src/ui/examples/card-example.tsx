import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/select";
import { Input } from "../components/input";

export default function CardExample() {

    return (
        <div className="component_display">
            <h1>Card</h1>
            <Card style={{ width: '350px' }}>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click</CardDescription>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap:'0.5rem'}}>
                    <label htmlFor="name">Name</label>
                    <Input placeholder="Name of your project" />
                    <label htmlFor="framework">Framework</label>
                    <Select defaultValue={"next"} defaultLabel={"Next.js"}>
                        <SelectTrigger></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Next.js">Next.js</SelectItem>
                            <SelectItem value="SveltKit">SveltKit</SelectItem>
                            <SelectItem value="Astro">Astro</SelectItem>
                            <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
                        </SelectContent>
                    </Select>
                </CardContent>
                <CardFooter style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant='outline'>Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}