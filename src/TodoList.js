import React, { useState } from 'react';
import { AgGridReact } from'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import {useRef} from 'react';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { FormControl, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/system';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';




function TodoList() {
const [desc, setDesc] = useState({description: '', date: '', priority: ''});
const [todos, setTodos] = useState ([]);

const gridRef = useRef();

const inputChanged = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
}

const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc])
}

const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {    
        setTodos(todos.filter((todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex))
        }else {  
             alert('Select row first');  
            }
        }



const dateChanged = (date) => {
    setDesc({...desc, date})
}




const columns = [  
    {headerName: 'Description', field: "description", sortable: true, filter: true, floatingFilter: true},
    {headerName: 'Date', field: "date", sortable: true, filter: true, floatingFilter: true},  
    {headerName: 'Priority', field: "priority", sortable: true, filter: true, floatingFilter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
]



const gridOptions = {
    animateRows: true

}

new AgGridReact(gridOptions);

return (
    <Stack spacing={2}>
    <div className='App' >

        <form>
        <TextField 
        type="text" 
        placeholder='To Do' 
        onChange={inputChanged} 
        name="description" 
        value={desc.description}/>
        
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
         label="date"
         type="date"
        name="date"
         value={desc.date}
         onChange={date => dateChanged(moment(date).format('l'))}
         renderInput={(params) => <TextField {...params} />}
         />
        </LocalizationProvider>

        <FormControl style={{minWidth: 180}}>
            <Select 
                label="Priority"
                value={desc.priority}
                onChange={inputChanged}
                name="priority"

                >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
            </Select>
        </FormControl>
 
        <Button onClick={addTodo} variant="contained">Add</Button>
        <Button onClick={deleteTodo} variant="contained">Delete</Button>
        </form>


        <div className="ag-theme-material">
       
       <AgGridReact 
       ref={gridRef}  
       onGridReady={params => gridRef.current = params.api}
       rowSelection="single"  
       columnDefs={columns}  
       rowData={todos}>
       </AgGridReact>
        </div>
    </div>
    </Stack>
    );
};

export default TodoList;