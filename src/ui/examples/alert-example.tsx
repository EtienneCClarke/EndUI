import { Alert, AlertContent, AlertTitle, RocketIcon, SuccessIcon, WarningIcon } from "../components/alert"

export default function AlertExample() {
    return (
        <div className="component_display">
            <h1>Alert</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Alert variant="primary">
                    <RocketIcon />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertContent>
                        You can add alerts as components anywhere in your application.
                    </AlertContent>
                </Alert>
                <Alert variant="success">
                    <SuccessIcon />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertContent>
                        Check your email for a booking confirmation. We'll see you soon!
                    </AlertContent>
                </Alert>
                <Alert variant="warning">
                    <WarningIcon />
                    <AlertTitle>Out of stock!</AlertTitle>
                    <AlertContent>
                        Use the 'warning' variant when you want to notify a user of a non critical issue.
                    </AlertContent>
                </Alert>
                <Alert variant="destructive">
                    <WarningIcon />
                    <AlertTitle>Error</AlertTitle>
                    <AlertContent>
                        Your session has expired. Please log in again.
                    </AlertContent>
                </Alert>
            </div>
        </div>
    )
}