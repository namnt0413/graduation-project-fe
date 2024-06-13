import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatetimePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOnChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleOnChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="dd/MM/yyyy HH:mm"
      placeholderText="dd/mm/yyyy"
    />
  );
};

export default DatetimePicker;
