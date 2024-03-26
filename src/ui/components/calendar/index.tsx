import { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import css from "./calendar.module.css";

export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={`${css.calendar} ${className}`}
            classNames={{
                months: css.months,
                month: css.month,
                nav_icon: css.nav_icon,
                caption: css.caption,
                caption_label: css.caption_label,
                nav: css.nav,
                nav_button: css.nav_button,
                nav_button_previous: css.nav_button_previous,
                nav_button_next: css.nav_button_next,
                table: css.table,
                head_row: css.head_row,
                head_cell: css.head_cell,
                row: css.row,
                cell: `${css.cell} ${props.mode === "range" ? css.range : css.cell_rounded}`,
                day: css.day,
                day_range_start: css.day_range_start,
                day_range_end: css.day_range_end,
                day_selected: css.day_selected,
                day_today: css.day_today,
                day_outside: `${css.day_outside} ${css.day_outside_style}`,
                day_disabled: css.day_disabled,
                day_range_middle: css.day_range_middle,
                day_hidden: css.day_hidden
            }}
            components={{
                IconLeft: () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>,
                IconRight: () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            }}
            {...props}
        />
    );

}

export { Calendar }