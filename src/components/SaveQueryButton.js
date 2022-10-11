import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function SaveQueryButton(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (closeTab) => {
    if(value.trim() === '') return;
    props.onSave(value, closeTab);
    setOpen(false);
  }
  return (
    <div>
      <Button onClick={handleClickOpen}>
        Save Query
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please name the query</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of this query to save in history list.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            fullWidth
            variant="standard"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleSave(true)} style={{textTransform: 'none'}}>Save and Close Tab</Button>
          <Button onClick={()=>handleSave(false)} style={{textTransform: 'none'}}>Save</Button>
          <Button onClick={handleClose} style={{textTransform: 'none'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
