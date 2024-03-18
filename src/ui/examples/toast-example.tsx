import { Button } from "../components/button";
import { useToast } from "../components/toast";

export default function ToastExample() {

    const toast = useToast();

    return (
        <div className="component_display">
            <h1>Toast</h1>
            <div className="container">
                <Button
                    onClick={() => toast?.create({
                        description: "Your message has been sent."
                    })}
                >
                    Simple
                </Button>
                <Button
                    onClick={() => toast?.create({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request"
                    })}
                >
                    With title
                </Button>
                <Button
                    onClick={() => toast?.create({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request",
                        action: {
                            label: "Undo",
                            action: () => { alert("Hi") }
                        }
                    })}
                >
                    With action
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => toast?.create({
                        title: "Success!",
                        description: "Your account details have been updated.",
                        variant: 'secondary'
                    })}
                >
                    Secondary
                </Button>
                <Button
                    variant='success'
                    onClick={() => toast?.create({
                        title: "Success!",
                        description: "Your account details have been updated.",
                        variant: 'success'
                    })}
                >
                    Success
                </Button>
                <Button
                    variant='warning'
                    onClick={() => toast?.create({
                        title: "Watch out!",
                        description: "You are nearing the limit of your daily allowance.",
                        variant: 'warning'
                    })}
                >
                    Warning
                </Button>
                <Button
                    variant='destructive'
                    onClick={() => toast?.create({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request",
                        action: {
                            label: "Undo",
                            action: () => { alert("Hi") }
                        },
                        variant: 'destructive'
                    })}
                >
                    Destructive
                </Button>
                <Button
                    onClick={() => toast?.create({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request",
                        action: {
                            label: "Undo",
                            action: () => { alert("Hi") }
                        }
                    })}
                >
                    Quick duration
                </Button>
            </div>
        </div>
    );

}