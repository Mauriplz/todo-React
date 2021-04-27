/*[
    {
        id: new Date().getTime(),
        desc : 'adsadad',
        done : false
    }
]
*/
import { types } from "./typesTodo";

export const todoReducer = (state = [], action) =>{
    switch(action.type){
        case types.add:
            return [...state, action.payload]
        
        case types.delete:
            return state.filter((todo)=> todo.id !== action.payload)
        
        case types.toogle:
            return state.map((todo)=>
                (todo.id === action.payload)
                    ? ({...todo, done: !todo.done})
                    : todo
            )
        
        default:
            return state
    }
} 