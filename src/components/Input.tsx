import React from 'react';

type IProps = {
  todo: string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  addMessage: () => void
}

const Input:React.FC<IProps>= ({todo, setTodo, addMessage}) => {
  return (
    <div>
      <input value={todo} onChange={e =>setTodo(e.target.value)} type="text" placeholder='Write....' />
      <button onClick={addMessage}>Add</button>
    </div>
  )
}

export default Input