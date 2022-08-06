import React, {useState} from 'react';
import SearchInput from "./SearchInput";
import {Checkbox, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {nanoid} from "nanoid";


const Header = () => {
    const [toDoList, setToDoList] = useState([{
        id: 1, checked: true, value: '孙悟空'
    }, {
        id: 2, checked: false, value: '沙和尚'
    }, {
        id: 3, checked: true, value: '唐僧'
    }, {
        id: 4, checked: true, value: '白龙马'
    },])


    const p = (inputValue) => {
        console.log('testing')
        const toAddItem = {
            id: nanoid(),
            checked: false,
            value: inputValue,
        }
        const newToDoList = [toAddItem,...toDoList]
        setToDoList(newToDoList)
    }
    return (<div>
        <SearchInput fn={p}/>
        <List sx={{width: '100%', maxWidth: 860}}>
            {toDoList.map(value => (<ListItem key={value.id}>
                <ListItemButton>
                    <Checkbox
                        checked={value.checked}
                        edge="start" tabIndex={-1}></Checkbox>
                    <ListItemText key={value.id} primary={value.value}/>
                </ListItemButton>
            </ListItem>))}
        </List>
    </div>);
};

export default Header;