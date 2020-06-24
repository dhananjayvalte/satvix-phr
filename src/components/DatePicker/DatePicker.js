import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../DatePicker/DatePicker.css'
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  var today = new Date();
  setHours(setMinutes(new Date(), 30), 17)
  return (
    <DatePicker    
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm aa"
      timeIntervals={15}
      useWeekdaysShort={true}
      timeCaption=""
      dateFormat="MMMM d, yyyy h:mm aa"
      minTime={setHours(setMinutes(new Date(), today.getMinutes()), today.getHours())}
      maxTime={setHours(setMinutes(new Date(), 59), 23)}
      inline
    />
  );
};

export default CustomDatePicker;