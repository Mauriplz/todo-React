import React, { useContext } from 'react'
import { useForm } from './Hooks/useForm'
import { TodoContext } from './TodoContext'
import { types } from './typesTodo'

export const AddTodo = () =>{

    const {dispatch} = useContext(TodoContext)

    const {formValues, handleInputChange, handleResetForm} = useForm({
        add: ''
    })

    const {add} = formValues

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(add.trim().length < 2){
            return
        }

        const newTodo = {
            id : new Date().getTime(),
            desc : add,
            done : false
        }
        dispatch({
            type: types.add,
            payload : newTodo
        })

        handleResetForm()
    }

    return (
        <>
            <h1>AddTodo</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                placeholder="AddTodo.."
                name = "add"
                value = {add}
                onChange = {handleInputChange}
            />
            </form>
        </>
    )

}