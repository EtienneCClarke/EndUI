import { Alert, AlertContent, AlertTitle } from "../ui/components/alert"

export default function AlertExample() {
    return (
        <div className="component_display">
            <h1>Alert</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Alert variant="primary">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertContent>
                        You can add alerts as components anywhere in your application.
                    </AlertContent>
                </Alert>
                <Alert variant="success">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertContent>
                        You can add alerts as components anywhere in your application.
                    </AlertContent>
                </Alert>
                <Alert variant="warning">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertContent>
                        You can add alerts as components anywhere in your application.
                    </AlertContent>
                </Alert>
                <Alert variant="destructive">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertContent>
                        You can add alerts as components anywhere in your application.
                    </AlertContent>
                </Alert>
            </div>
        </div>
    )
}