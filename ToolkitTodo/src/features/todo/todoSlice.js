import { createSlice, nanoid } from "@reduxjs/toolkit";         //nanoid only generates unique id.
const initialState= {
    todos:[{
        id: 1,
        text: "Hello World"
    }],
}
export const todoSlice= createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {       //'state' refers to current state,  'action' refers to current data
            const todo= {id: nanoid(), text: action.payload.text}   //payload is an object
            state.todos.push(todo);
        },
        removeTodo: (state, action)=> {
            state.todos= state.todos.filter(()=> todo.id!= action.payload )
        },
        
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer
