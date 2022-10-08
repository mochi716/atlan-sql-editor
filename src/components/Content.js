import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import DataGridView from "./DataGridView";
import Editor from "./Editor";
import QueryTabs from "./QueryTabs";

export default function Content() {
    const handleRunQuery = () => {
        const fetchUrl = `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/orders.csv?ref=master`
        fetch(fetchUrl).then((res) => res.json)
        .then((res) => {
            // GitHub sends over base64 encoded content
            // const rawResults = parseCSV(res);
            // setResult(
            //   rawResults.map((rawResult) => {
            //     // Use the custom processing function for each field type.
            //     Object.keys(rawResult).forEach((key) => {
            //       rawResult[key] = getFieldDetails(key).processFn(
            //         rawResult[key]
            //       );
            //     });
            //     return rawResult;
            //   })
            // );
            // setIsLoaded(true);
            // setEndTime(new Date().getTime());
          }
        ).catch((error) => {
            console.log(error)
        });
    }
    const handleSaveQuery = () => {

    }
    return (
        <Box p={3} sx={{flexGrow: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Editor/>
            <Box sx={{p:1, display: 'flex', justifyContent: 'flex-end'}}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button color='secondary' onClick={handleRunQuery}>Run Query</Button>
                    <Button onClick={handleSaveQuery}>Save Query</Button>
                </ButtonGroup>
            </Box>
            <DataGridView/>
        </Box>
    );
}
