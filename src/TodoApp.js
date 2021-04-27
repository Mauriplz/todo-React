import React, { useReducer } from 'react'
import { Todo } from './Todo'
import {TodoContext} from './TodoContext'
import { todoReducer } from './todoReducer'

const init = ()=>{
    return []
}

export const TodoApp = () =>{

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    console.log(todos)

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            <Todo />
        </TodoContext.Provider>
    )

}