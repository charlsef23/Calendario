// src/components/EventModal.js
import React from 'react';
import { Modal, Button, Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './EventModal.css';

const EventModal = ({ visible, onOk, onCancel, newEvent, handleChange, handleDateChange }) => {
  return (
    <Modal
      title="Nuevo Evento"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          Crear Evento
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Título">
          <Input
            name="title"
            value={newEvent.title}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Inicio">
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={newEvent.start ? moment(newEvent.start) : null}
            onChange={(date, dateString) => handleDateChange(date, dateString, 'start')}
          />
        </Form.Item>
        <Form.Item label="Fin">
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={newEvent.end ? moment(newEvent.end) : null}
            onChange={(date, dateString) => handleDateChange(date, dateString, 'end')}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EventModal;