// src/App.js
import React, { useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
import EventModal from './components/EventModal';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ title: '', start, end });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newEvent.title) {
      setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
      setIsModalVisible(false);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewEvent({ title: '', start: '', end: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleDateChange = (date, dateString, type) => {
    setNewEvent({ ...newEvent, [type]: dateString });
  };

  return (
    <div className="app">
      <Header />
      <CalendarComponent
        events={events}
        onSelectSlot={handleSelectSlot}
      />
      <EventModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        newEvent={newEvent}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
    </div>
  );
};

export default App;