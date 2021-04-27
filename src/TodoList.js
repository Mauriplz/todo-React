import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { TodoListItem } from './TodoListItem'

export const TodoList = () => {

    const {todos} = useContext(TodoContext)
    console.log(todos)

    return (
        <>
            <h1>Todo List</h1>
            <hr/>
                {
                    todos.map((todo, i) =>{
                        return (<TodoListItem key={todo.id} {...todo} index={i} />)
                    })
                }
        </>
    )
}
