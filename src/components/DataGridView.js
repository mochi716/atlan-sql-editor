import Box from '@mui/material/Box';
import {
  DataGridPremium,
  GridToolbar
} from '@mui/x-data-grid-premium';
import { useEffect, useState } from "react";

export default function DataGridView(props) {
  const [pageSize, setPageSize] = useState(5);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  
  const removeLicense = () => {
    let items = document.getElementsByClassName('Mui-resizeTriggers');
    for(const item of items){
      for(const childItem of item.parentNode.childNodes){
        if(childItem.innerHTML.indexOf('license key') !== -1){
          childItem.remove();
        }
      }
    }
  }
  useEffect(() => {
    if(props.data && props.data.headers && props.data.headers.length > 0 && props.data.rows.length > 0){
      let temp = [];
      for(const h of props.data.headers){
        temp.push({field: h, headerName: h})
      }
      setColumns(temp);
      setRows(props.data.rows);
    }
  }, [props]);

  useEffect(() => {
    removeLicense();
    setTimeout(() => {
      removeLicense();
    }, 50);
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <DataGridPremium
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        experimentalFeatures={{ newEditingApi: true }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        pagination
        autoHeight
      />
    </Box>
  );
}
