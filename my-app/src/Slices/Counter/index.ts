import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface Todo {
    id: string;
    text: string;
  }
  
  interface TodosState {
    todos: Todo[];
  }
  
  const initialState: TodosState = {
    todos: [{ id: "1", text: "hello sami" }],
  };
// Creating the counter slice
export const counterslice = createSlice({
  
  name: "counter",
  initialState,
  reducers: {
    addtodo:(state,Action:PayloadAction<string>)=>{
        const todo={
            id:nanoid() ,
             text:Action.payload
        }
        state.todos.push(todo);
    },
    removetodo:(state,Action:PayloadAction<string>)=>{
        state.todos = state.todos.filter(todo => todo.id !== Action.payload);
    }
    
  },

});

// Exporting actions to use in components
export const {addtodo,removetodo  } = counterslice.actions;

// Exporting the reducer to configure the store
export default counterslice.reducer;
