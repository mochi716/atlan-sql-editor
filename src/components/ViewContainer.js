import Box from '@mui/material/Box';
import History from './History';
import TabContainer from './TabContainer';

export default function ViewContainer() {
  
  return (
    <Box sx={{display: 'flex', height: 'calc(100vh - 64px)'}}>
      <History/>
      <Box sx={{overflowY: 'scroll', flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column'}}>
        <TabContainer/>
      </Box>
    </Box>
  );
}
