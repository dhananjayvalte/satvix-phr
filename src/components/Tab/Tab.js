import React from 'react';

import styles from './Tab.module.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Appointment from '../Appointment/Appointment';

function TabPanel(props) {

  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {


    setValue(newValue);
  };


  return (

    <div className={classes.root}>
      <AppBar position="static" style={{ boxShadow: "1px 1px #c9c9c9" }} >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#ffffff00" } }}

          style={{ backgroundColor: "white", color: "black", paddingTop: "15px", paddingLeft: "20px" }}>

          <Tab label="Appointments" {...a11yProps(0)} className={styles.tab, value == 0 ? styles.active : null} style={{ color: "black", textTransform: "capitalize", fontWeight: "bolder"}} />
          <Tab label="Lab Reports" {...a11yProps(1)} className={styles.tab, value == 1 ? styles.active : null} style={{ color: "black", textTransform: "capitalize", fontWeight: "bolder"}} />
          <Tab label="Prescriptions" {...a11yProps(2)} className={styles.tab, value == 2 ? styles.active : null} style={{ color: "black", textTransform: "capitalize", fontWeight: "bolder" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Appointment></Appointment>
      </TabPanel>
      <TabPanel value={value} index={1}>

      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
    </div>
  );
}