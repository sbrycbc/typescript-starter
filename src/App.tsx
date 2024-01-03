import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { Todos } from './types/Type';
import Message from './components/Message';

const App = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])


  const addMessage = ()=> {
    if(todo) setTodos([...todos,{message:todo, id: todos.length + 1}])
    setTodo('')
  }

  const deleteMessage = (id:number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
  <div className='App'>
   <Input addMessage = {addMessage}todo={todo} setTodo = {setTodo}/>
   <Message deleteMessage={deleteMessage} todos={todos}/>
  </div>
  )
}

export default App;






// function App() {
//   let name: string = "Typescript Notes";
//   let age: number= 37;
//   //let done: boolean = true;
//   let trial: any = "test testt";
//   let beide: number | string = 5

//   /* type Obj = {
//     name: string,
//     age: number,
//     done?:boolean
//   }

//   let obj: Obj = {
//     name: "Typescript Notes",
//     age: 26,
//     done:true
//   } */

//   interface Obj {
//     name: string,
//     age: number,
//     done?:boolean
//   }

//   interface ObjTwo extends Obj {
//     accept?: boolean
//   }

//   let obj: ObjTwo = {
//     name: "Typescript Notes",
//     age: 26,
//     done:true
//   }

//   return (
//     <div className="App">
//      {name + " - " + age + " mit " + trial + " oder " + beide }
//     </div>
//   );
// }


