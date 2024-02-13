import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    addTodo:(state,action)=>{
        const todo={
          id:nanoid(),
          text:action.payload
        }
        state.todos.push(todo)
    },
    removoTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },
    getAllTodo:(state,action)=>{
      return state.todos;
    }
  }
});




export const {addTodo,removoTodo,getAllTodo}=todoSlice.actions

export default todoSlice.reducer