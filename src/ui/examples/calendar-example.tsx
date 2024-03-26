import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../components/calendar";

export default function CalendarExample() {

    // const date = new Date();

    // const defaultSelected: DateRange = {
    //     from: date,
    //     to: addDays(date, 4)
    // }

    // const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
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