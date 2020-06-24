import React from 'react';

import classes from './ScheduledAppointments.module.css';
import EditIcon from '../../Images/edit.png';
import DeleteIcon from '../../Images/delete.png';


const ScheduledAppointments = () => {
    return (
        <div>
            <ul className={classes.ul}>
                <li>
                    <div className={classes.main}>
                        <label>May 29,2020</label>
                        <label className={classes.time}>09:30 AM</label>


                        <img className={classes.editIcon} src={EditIcon} />




                        <img className={classes.deleteIcon} src={DeleteIcon} />



                        <br />
                        <label>Madhu Gupta</label>
                        <br />
                        <label>General Medicine</label>

                    </div>

                </li>

                <li style={{ marginTop: "10px" }}>
                    <div className={classes.main}>
                        <label>May 29,2020</label>
                        <label className={classes.time}>10:30 AM</label>
                        <img className={classes.editIcon} src={EditIcon} />
                        <img className={classes.deleteIcon} src={DeleteIcon} />
                        <br />
                        <label>Ramesh Gupta</label>
                        <br />
                        <label>Darmatology</label>
                        <br />
                        <label>Dr. Malhotra</label>
                    </div>
                </li>
            </ul>

        </div>
    );


}


export default ScheduledAppointments;