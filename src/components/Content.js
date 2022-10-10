import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeTab, saveTab } from "../store/slice";
import { parseCSV } from "../utils/helper";
import DataGridView from "./DataGridView";
import Editor from "./Editor";
import QueryTabs from "./QueryTabs";
import SaveQueryButton from "./SaveQueryButton";

const tables = ['categories', 'customers', 'employees', 'orders', 'products', 'regions', 'shippers', 'suppliers', 'territories']
export default function Content(props) {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState({headers: [], rows: []})
    const dispatch = useDispatch()

    const handleRunQuery = () => {
        if(query.trim() === '') return;
        let tblName = 'categories';
        for(const tableName of tables){
            if(query.toLowerCase().indexOf(tableName) !== -1){
                tblName = tableName;
                break;
            }
        }
        const fetchUrl = `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${tblName}.csv`
        fetch(fetchUrl).then((res) => res.text())
        .then((res) => {
            let temp = parseCSV(res);
            setResult(temp);
          }
        ).catch((error) => {
            console.log(error)
        });
    }
    const handleSaveQuery = (name, toClose) => {
        dispatch(saveTab({id: props.data.id, query: query, title: name}))
        if(toClose){
            dispatch(closeTab(props.data.id))
        }
    }
    const handleQueryChange = (value) => {
        setQuery(value);
    }

    useEffect(() => {
        setQuery(props.data.query);
    }, [props.data])

    return (
        <Box p={3} pt={1} sx={{flexGrow: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Typography sx={{fontSize: '13px', color: 'gray', textAlign: 'left'}}>Possbile table names for test : {tables.join(', ')}</Typography>
            <Editor value={query} onChange={handleQueryChange}/>
            <Box sx={{p:1, display: 'flex', justifyContent: 'flex-end'}}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button color='secondary' onClick={handleRunQuery}>Run Query</Button>
                    <SaveQueryButton onSave={handleSaveQuery} title={props.data.title}/>
                </ButtonGroup>
            </Box>
            <DataGridView data={result}/>
        </Box>
    );
}
