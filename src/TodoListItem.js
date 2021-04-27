import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { types } from './typesTodo'

export const TodoListItem = ({id, desc, done, index}) => {

    const {dispatch} = useContext(TodoContext)

    const handleToogle = () =>{
        dispatch({
            type : types.toogle,
            payload : id
        })
    }

    const handleDelete = () =>{
        dispatch({
            type : types.delete,
            payload : id
        })
    }

    return (
        <>
        <div style={{margin:'10px'}} className="row">
            <div className="col 4">
                {`${index+1} -`}
            </div>
            <div
                className={`col-4 ${(done) && 'complete'}`}
                onClick={()=>{handleToogle()}}
            >
                {desc}
            </div>
            <div className="col-4">
                <button className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
        </>
    )
}
