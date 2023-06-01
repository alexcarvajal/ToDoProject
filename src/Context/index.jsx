
import {createContext, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage';
const TodoContext = createContext()
function TodoProvider ({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage("TODOS_v1", []);
    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    
 

    const CompletedTodos = todos.filter(
        (todos) => todos.completed === true
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todos) => {
        const todoText = todos.text.toLowerCase();
        const searchText = search.toLocaleLowerCase();
        return todoText.includes(searchText);
    });
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text == text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text == text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return(
        <TodoContext.Provider value={{
            todos,
            loading,
            error,
            CompletedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
            search,
            setSearch,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}