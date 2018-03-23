import React from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({date, dateRange, id, cn}) => {
    let hours = new Date().getHours();
    return(
        <div className="datepickercomponent">
            <DatePicker
                selected={date}
                onChange={dateRange}
                // onSelect={dateRange}
                dateFormatCalendar={"MMM YYYY"}
                minDate={moment().subtract(6, "month")}
                maxDate={moment().add(6, "month")}
                showMonthYearDropdown
                locale="fr-fr"
                className={cn}
                id={id}
            />
        </div>
    )
}

export default DatePickerComponent;