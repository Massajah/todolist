import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){ //can't add empty spaces etc...
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test (newValue.text)){ //can't add empty spaces etc...
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id =>{
        const removedArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removedArr)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>ToDo List:</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList