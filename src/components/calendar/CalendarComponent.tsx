import React from "react";
import moment from 'moment';
import NavBarComponent from "../ui/NavBarComponent";
import {Calendar, momentLocalizer} from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";


function CalendarComponent() {

    const localizer = momentLocalizer(moment);

    const events = [{
        title: 'Happy Birthday',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgColor: '#fafafa',
        notes: 'Buy a cake'
    }];

    return (
        <div>
            <NavBarComponent/>
            <div className="mt-2 mx-1 pb-2 h-screen">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div>
    )
}

export default CalendarComponent;
