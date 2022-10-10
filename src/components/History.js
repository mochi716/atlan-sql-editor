import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { openTab } from "../store/slice";

export default function History() {
    const [search, setSearch] = useState('')
    const [searchedList, setSearchedList] = useState([])
    const histories = useSelector((state)=>state.histories)
    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(openTab(item))
    }
    useEffect(() => {
        let temp = histories.filter((item)=>{
            let query = (item.title + item.query).toLowerCase();
            let words = search.toLowerCase().split(' ');
            for(const w of words){
                if(w !== '' && query.indexOf(w) === -1) return false;
            }
            return true;
        })
        setSearchedList(temp);
    }, [search, histories])
    return (
        <Box sx={{width: '360px', display: 'flex', flexDirection: 'column', borderRight: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Typography sx={{fontSize: '1.5rem', mt: 1}}>History</Typography>
            <TextField sx={{mt: 2, mx: 2}} label="Search field" type="search" size="small" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Box sx={{mt: 2, py: 1, flexGrow: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}`, overflowY: 'scroll'}}>
                {searchedList.map((item, ind) => (
                    <Box key={item.id} sx={{p: 1, borderRadius: 1, display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 6, cursor: 'pointer'}}}
                        onClick={()=>handleClick(item)}>
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
