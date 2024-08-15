// src/components/CalendarComponent.js
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './CalendarComponent.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events, onSelectSlot }) => {
  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={onSelectSlot}
        defaultView="month"
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default CalendarComponent;