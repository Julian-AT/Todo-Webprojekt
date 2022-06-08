import React, { useState } from 'react';
import TodoForm from './TodoForm'
import Todo from './ToDo'
import moment from 'moment'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ConfettiExplosion from 'react-confetti-explosion';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [isExploding, setIsExploding] = React.useState(false);

    const AddTodoToast = () => {
        toast.success(`👍 Successfully added Todo.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
    }

    const updateTodoToast = () => {
        toast.success(`♻️ Successfully updated Todo.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
    }

    const delteTodoToast = () => {
        toast.success(`🗑️ Successfully deleted Todo.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
    }

    const completedTodoToast = () => {
        // Dark or White theme rainbow bar confetti effect #121212
        toast("🎉 Todo Completed 🎉", {
            className: "todo-completed-toast",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        AddTodoToast();
    };
    
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        updateTodoToast();

    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
        delteTodoToast();
    };

    const Confetti = {
        force: 0.6,
        duration: 5000,
        particleCount: 200,
        floorHeight: 1600,
        floorWidth: 1600
    }
    
    const completeTodo = id => {
        let updatedTods = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
                if(todo.isComplete) 
                {
                    completedTodoToast()
                    setIsExploding(true)
                }
            }
            return todo;
        })
        setTodos(updatedTods)
        setIsExploding(false)
    };

    //TODO: Confetti in der Mitte
    //TODO: Confetti nur wenn ToDo abgeschlossen wird
    //TODO: Toast Nachricht Rainbow Progress Bar
    //TODO: Glitch bei Toast Fixxen (margin od. padding?) (overflow)
    //TODO: Sidebar Buttons fixxen
    //TODO: Todos im localstorage speichern!!

    return (
        <div>
            {isExploding && (
            <div>
                <ConfettiExplosion {...Confetti} />
            </div>
            )}
            <h1 className='font-bold text-slate-900 dark:text-white'>Today <span className='text-sm font-normal text-slate-500'>{moment().format("MMM Do YY")}</span></h1>  
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList