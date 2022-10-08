import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from 'react-redux'

export default function History() {
    const histories = useSelector((state)=>state.histories)

    return (
        <Box sx={{width: '360px', display: 'flex', flexDirection: 'column', borderRight: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Typography sx={{fontSize: '1.5rem', mt: 1}}>History</Typography>
            <TextField sx={{mt: 2, mx: 2}} label="Search field" type="search" size="small"/>
            <Box sx={{mt: 2, py: 1, flexGrow: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}`}}>
                {histories.map((item, ind) => (
                    <Box key={item.id} sx={{p: 1, borderRadius: 1, display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 6, cursor: 'pointer'}}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography sx={{fontSize: '1.1rem'}} className='ellipse'>{item.title}</Typography>
                            <Typography sx={{fontSize: '0.8rem', alignSelf: 'self-end'}}>{item.time}</Typography>
                        </Box>
                        <Typography sx={{fontSize: '0.8rem', ml: 3}} className='ellipse'>{item.query}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
