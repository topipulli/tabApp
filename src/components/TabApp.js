import React, { useState } from'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import Home from './Home';
import TodoList from '../TodoList';
import { Stack } from '@mui/system';

function TabApp() {

    const [value, setValue] = useState('one');

    const handleChange = (event, value) => { 
         setValue(value);
        };
    
    return (
    <div>
       <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="HOME" />
            <Tab value="two"label="TO DO" />
        </Tabs>   
        {value === 'one' && <div><Home /></div>}   
        {value === 'two' && <div>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <TodoList />
            </Stack>
            </div>}  
    </div>
    );
    
}
export default TabApp;