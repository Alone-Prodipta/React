import { createContext,useContext } from "react";
export const TodoContext= useContext({
    //properties or objects
    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed: false, 
        }

    ],
    addTodo: (todo)=> {},   //we dont add defination in functionalities.
    updateTodo: (id, todo)=> {},
    deleteTodo: (id)=> {},
    toggleComplete: (id)=> {}

});
export const useTodo= () =>{
    return useContext(TodoContext);
}
export const TodoProvider= TodoContext.Provider();