import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { CgClose } from 'react-icons/cg' 
import { MdEditNote } from 'react-icons/md'

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            if: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <CgClose onClick={() => removeTodo(todo.id)} className='delete-icon' />
            <MdEditNote onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
          </div>
      </div>
  ))
}

export default ToDo

