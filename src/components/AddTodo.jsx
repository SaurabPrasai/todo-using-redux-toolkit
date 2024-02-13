import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getAllTodo } from "../redux/slice/todoSlice";
import { Button, TextInput } from "flowbite-react";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input !== "") {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <div className="">
    
    <form className="block" onSubmit={addTodoHandler}>
        <div className="flex flex-row">
        <TextInput placeholder="enter a task!" className="w-96 block text-3xl"  value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button color="gray" className="ml-2 text-2xl">Add</Button>
        </div>
    </form>
    </div>
  );
}
