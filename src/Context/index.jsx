
import {createContext } from 'react'

const TodoContext = createContext()

function TodoProvider (){
    return(
        <TodoContext.Provider>

        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}