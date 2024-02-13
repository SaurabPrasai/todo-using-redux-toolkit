import AddTodo from "./components/AddTodo";
import EachTodo from "./components/EachTodo";


export default function App(){
  
  return (
    <div className=" w-screen h-screen flex flex-row justify-center pt-6 bg-slate-900 text-white">
    <div className="flex flex-col">
    <AddTodo/>
    <EachTodo/>
    </div>
    </div>
  )
}