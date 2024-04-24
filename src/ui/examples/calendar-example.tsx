import { useState } from "react";
import { Calendar } from "../components/calendar";

export default function CalendarExample() {

    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <div className="component_display">
            <h1>Calendar</h1>
            <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
            />
        </div>
    )
}