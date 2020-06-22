import React, { useState } from 'react';
import classes from './Appointment.module.css';
import Select from '@material-ui/core/Select';
import AppointmentIcon from '../../Images/calendar-clock.png';
import ScheduledIcon from '../../Images/scheduled-check.png';
import CustomDatePicker from '../DatePicker/DatePicker';


const Appointment = (props) => {
    const [state, setState] = React.useState(0);
    const handleChange = (event) => {
        const name = event.target.value;
        setState(name);
    };

    const [count, setCount] = React.useState(0);

    const handleChangeNew = (event) => {
        const name = event.target.value;
        setCount(name)
    };

    const clearHandler = () => {
        this.props.writeText(this.state.text)
        this.setState({
            text: ''
        })
        const dropDown = document.getElementById("age-native-simple");
        dropDown.selectedIndex = 0;
        const dropDown1 = document.getElementById("age-native-simple1");
        dropDown.selectedIndex = 0;
    }

    console.log("Jitendra", count);
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
                        <div style={{ borderRight: "1px solid #808080", marginRight: "80px" }} >
                            <table style={{ textAlign: 'right' }} >
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
                                        <Select
                                            style={{ border: "none" }, state == 0 ? { color: "gray", fontSize: "14px" } : { color: "Black" }}
                                            className={classes.dropDown}
                                            native
                                            value={state}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                        >
                                            <option value={0} selected disabled hidden>Select Department</option>
                                            <option value={5}></option>
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.tbltd}>
                                        <label style={{ fontSize: "14px", marginRight: "10px", marginTop: "-1%" }} className={classes.label}>Doctor</label>
                                    </td>
                                    <td>
                                        <Select
                                            style={{ border: "none" }, count == 0 ? { color: "gray", fontSize: "14px" } : { color: "Black" }}
                                            className={classes.dropDown}
                                            native
                                            value={count}
                                            onChange={handleChangeNew}
                                            inputProps={{
                                                name: 'age3',
                                                id: 'age-native-simple1',
                                            }}
                                        >
                                            <option value={0} selected disabled hidden >Select Doctor</option>
                                            {/* <option value="" >Select Doctor</option> */}
                                            <option value={5}></option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </Select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.tbltd}>
                                        <div style={{ marginTop: "-135%" }}>
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
                                </tr>
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
