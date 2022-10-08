import { Box } from "@mui/material";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";

export default function Editor() {
    const [value, setValue] = useState('');
    const onChange = (newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{borderRadius: '10px', overflow: 'hidden'}}>
            <AceEditor
                id="editor"
                aria-label="editor"
                mode="mysql"
                className="rounded-lg"
                theme="monokai"
                name="editor"
                fontSize={16}
                minLines={10}
                maxLines={10}
                width="100%"
                showPrintMargin={false}
                showGutter
                placeholder="Select * From Orders"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
                // value={value}
                onChange={onChange}
                showLineNumbers
            />
        </Box>
    );
}
