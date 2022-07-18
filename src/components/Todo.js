import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import { FiTrash2 } from 'react-icons/fi'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) =>(
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <FiTrash2 onClick={() => removeTodo(todo.id)} className="delete-icon" title='poista' />
            <TiEdit onClick={() => setEdit({ id:todo.id, value: todo.text})} className="edit-icon" title='muokkaa' />
        </div>    
    </div>
  ))
}

export default Todo