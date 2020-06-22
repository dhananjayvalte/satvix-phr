import React, { useState } from 'react';

import DatePicker from 'react-datepicker';

import classes from './DatePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (

    <div className={classes.jitu}>

      <DatePicker
        className={classes.jitu}
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm aa"
        timeIntervals={15}
        timeCaption=""
        dateFormat="MMMM d, yyyy h:mm aa"
        inline
      />

    </div>


  );
};

export default CustomDatePicker;