import React from 'react';
import {Input} from "@mui/material";

const SearchInput = (props) => {

    const handleKeyUp = (e) => {
        if (e.key !== 'Enter') return;
        props.fn(e.target.value)
    }
    return (
        <div>
            <Input placeholder="Placeholder" onKeyUp={handleKeyUp}/>
        </div>
    );
};

export default SearchInput;