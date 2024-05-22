import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { workType, workCardData, settings } from './data';
import './OurWorkSection.css';
import ButtonComponent from './ButtonComponent';

function CustomTabPanel(props) {
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    
                    textColor="inherit"
                    indicatorColor='danger'
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className='our-work-label-1'  label={workType[0].name} {...a11yProps(0)} />
                    <Tab className='our-work-label-2'  label={workType[1].name} {...a11yProps(1)} />
                    <Tab className='our-work-label-3' label={workType[2].name} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div >
                <CustomTabPanel className='work-1' value={value} index={0}>
                    <div className='mt-[19px]'>
                        <h1 className='pb-0 text-xl  '>{workCardData[0].name}</h1> <br />
                        <p className='mt-0 text-xs '>{workCardData[0].typeOfWork}</p>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel className='work-2' value={value} index={1}>
                    <div className='mt-[19px]'>
                        <h1 className='pb-0 text-xl  '>{workCardData[1].name}</h1> <br />
                        <p className='mt-0 text-xs '>{workCardData[1].typeOfWork}</p>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel className='work-3' value={value} index={2}>
                    <div className='mt-[19px]'>
                        <h1 className='pb-0 text-xl  '>{workCardData[2].name}</h1> <br />
                        <p className='mt-0 text-xs '>{workCardData[2].typeOfWork}</p>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel className='work-4' value={value} index={3}>
                    <div className='mt-[19px]'>
                        <h1 className='pb-0 text-xl '>{workCardData[3].name}</h1> <br />
                        <p className='mt-0 text-xs '>{workCardData[3].typeOfWork}</p>
                    </div>
                </CustomTabPanel>
            </div>
            <ButtonComponent></ButtonComponent>
        </Box>
    );
}

