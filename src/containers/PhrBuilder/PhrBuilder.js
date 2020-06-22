import React, { Component } from 'react';

import classes from './PhrBuilder.module.css';
import SimpleTabs from '../../components/Tab/Tab';

import Appointment from '../../components/Appointment/Appointment';

class PhrBuilder extends Component {
    render() {
        return (
            <div>
                <div className={classes.mystyle}>Bahmni Hospital</div>
                <SimpleTabs></SimpleTabs>
                {/* <Appointment></Appointment> */}
            </div>


        );

    };
};


export default PhrBuilder;
