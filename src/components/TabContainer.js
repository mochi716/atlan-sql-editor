import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import { closeTab, createTab, openTab, setActive } from '../store/slice';
import { getTabIndexFromId } from '../utils/helper';
import CancelIcon from '@mui/icons-material/Cancel';
function TabPanel({children, value}) {
    const activeId = useSelector((state)=>state.activeId)

    return (
        <div
            role="tabpanel"
            hidden={value !== activeId }
        >
            {children}
        </div>
    );
}

export default function TabContainer() {

  const openedTabs = useSelector((state)=>state.openedTabs)
  const activeId = useSelector((state)=>state.activeId)
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    if(newValue < openedTabs.length){
        dispatch(setActive(openedTabs[newValue].id))
    }
  };
  const handleNew = (e) => {
    e.stopPropagation();
    dispatch(createTab())
  };
  const handleClose = (e, id) => {
    e.stopPropagation();
    dispatch(closeTab(id))
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={getTabIndexFromId(openedTabs, activeId)} onChange={handleChange} aria-label="basic tabs example"
        variant="scrollable" scrollButtons allowScrollButtonsMobile>
            {openedTabs.map((item, ind) => (
                <Tab key={item.id}
                    label={<div style={{display: 'flex', alignItems:'center', textTransform: 'none'}}>
                            {item.title} 
                            <CancelIcon onClick={(e)=>handleClose(e, item.id)} className='cancel-icon' sx={{fontSize: 'medium', ml: 2, ':hover': {color: 'secondary.main'}}}/>
                            </div>}/>
            ))}
            <Tab key={0} label={'+ New'} onClick={handleNew}/>
        </Tabs>
      </Box>
      <>
        {openedTabs.map((item, ind) => (
            <TabPanel key={item.id} value={item.id}>
                <Content data={item}/>
            </TabPanel>
        ))}
      </>
    </Box>
  );
}
