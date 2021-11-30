import React from "react";
import {Route, Routes} from "react-router-dom";
import CalendarComponent from "../components/calendar/CalendarComponent";

function CalendarRoute() {
    return (
        <Routes>
            <Route
                path="/calendar"
                element={<CalendarComponent/>}
            />
        </Routes>
    )
}


export default CalendarRoute;
