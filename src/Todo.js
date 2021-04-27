import React from 'react'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const Todo = () => {
    return (
        <>
            <h1>TodoApp</h1>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <TodoList />
                </div>
                <div className="col-6">
                    <AddTodo />
                </div>

            </div>
        </>
    )
}
