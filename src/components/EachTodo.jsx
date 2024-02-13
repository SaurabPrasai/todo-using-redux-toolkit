import { Button, TextInput } from "flowbite-react";
import { useSelector,useDispatch } from "react-redux";
import { removoTodo } from "../redux/slice/todoSlice";

export default function EachTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch=useDispatch();

  const handleDelete=(id)=>{
        dispatch(removoTodo(id))
  }


  return (
    <div className="flex flex-col ">
      {todos &&
        todos.map((todo) => (
          <div className="flex flex-row mt-2" key={todo.id}>
            <TextInput  value={todo.text} readOnly className="w-96"/>
            <Button color="gray" className="ml-2 text-2xl" onClick={()=>handleDelete(todo.id)}>
              del
            </Button>
          </div>
        ))}
    </div>
  );
}
