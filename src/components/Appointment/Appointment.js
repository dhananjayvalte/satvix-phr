import React, { useState } from 'react';
import classes from './Appointment.module.css';
import AppointmentIcon from '../../Images/calendar-clock.png';
import ScheduledIcon from '../../Images/scheduled-check.png';
import CustomDatePicker from '../DatePicker/DatePicker';


const Appointment = (props) => {
    const [countDoc, setCountDoc] = React.useState(0);
    const [countDep, setCountDep] = React.useState(0);

    const handleChangeDoctor = (event) => {
        const name = event.target.value;        
        setCountDoc(event.target.value);
    };

    const handleChangeDepartment = (event) => {
        const name = event.target.value;        
        setCountDep(event.target.value);
    };

    const clearHandler = () => {
        this.props.writeText(this.state.text)
        this.setState({
            text: ''
        })        
    }

    return (
        <div>
            <div id="form">
                <form className={classes.form}>
                    <div className={classes.container1}>
                        <div>
                            <img src={AppointmentIcon} className={classes.iconDetails} />
                        </div>
                        <div className={classes.headerStyleAppointment}>
                            <label>Book an Appointment</label>
                        </div>
                    </div>
                    <fieldset style={{ border: 0 }}>
                        <div style={{ borderRight: "2px solid #d9d9d9", marginRight:"130px"  }} >
                            <table style={{ textAlign: 'right' }} ><tbody>
                                <tr>
                                    <td>
                                        <label style={{ marginTop: "-10%" }} className={classes.label} >Patient Name <span style={{ color: "red", fontSize: "18px" }}>*</span></label>
                                    </td>
                                    <td>
                                        <input className={classes.input} placeholder="Enter Full Name of Patient" />
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <label style={{ marginTop: "-10%" }} className={classes.label}>Department <span style={{ color: "red", fontSize: "18px" }}>*</span></label>
                                    </td>
                                    <td >
                                        <select value={countDep}
                                            onChange={handleChangeDepartment}
                                            style={{ border: "none" },
                                                countDep == 0 ? { color: "gray", fontSize: "14px" } : { color: "Black" }}
                                            className={classes.dropDown}
                                            name="Department" id="Department">
                                            <option value={0} selected disabled hidden defaultValue>Select Department</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Obstetrics and gynaecology">Obstetrics and gynaecology</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.tbltd}>
                                        <label style={{ fontSize: "14px", marginRight: "10px", marginTop: "-1%" }} className={classes.label}>Doctor</label>
                                    </td>
                                    <td>
                                        <select
                                            value={countDoc}
                                            onChange={handleChangeDoctor}
                                            style={{ border: "none" }, countDoc == 0 ? { color: "gray", fontSize: "14px" } : { color: "Black" }}
                                            className={classes.dropDown}
                                            name="Doctor" id="Doctor">
                                            <option value={0} selected disabled hidden defaultValue >Select Doctor</option>
                                            {/* <option value="Dr. Kiran">Dr. Kiran</option> */}
                                            <option value="Dr. Kiran">Dr. Kiran</option>
                                            <option value="Dr. Vishal">Dr. Vishal</option>
                                            <option value="Dr. Patil">Dr. Patil</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.tbltd}>
                                        <div style={{ marginTop: "-120%" }}>
                                            <label className={classes.label}>Date and Time <span style={{ color: "red", fontSize: "18px" }}>*</span></label>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ borderRadius: "0px", marginLeft: "10px", marginTop: "10px", fontFamily: "OpenSans" }}>

                                            <CustomDatePicker />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div className={classes.button}>
                                            <button className={classes.buttonClear} onClick={clearHandler}>Clear</button>
                                            <button className={classes.buttonConfirm} >Confirm</button>
                                        </div>
                                    </td>
                                </tr></tbody>
                            </table>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div id="form">
                <form className={classes.formNew}>
                    <div className={classes.container2}>
                        <div>
                            <img src={ScheduledIcon} className={classes.iconDetails} />
                        </div>
                        <div className={classes.headerStyleScheduled}>
                            <label>Scheduled Appointments</label>
                        </div>
                    </div>
                    <div className={classes.bigblue}>
                        <label >No Scheduled Appointments</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment; 
