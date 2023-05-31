import LeftSide from "../LeftSide";
import "./styles.css";
import { useState } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodosItem from "../TodosItem";
import TodoButton from "../TodoButton";
import useLocalStorage from "../../Hooks/useLocalStorage";
import LoadingIcon from "../../assets/LoadingIcon";


 const defaulttodos = [
  { text: "Cortar element", completed: false },
  { text: "Tomar element", completed: false },
  { text: "Take element", completed: false },
];
localStorage.setItem('TODOS_v1', JSON.stringify(defaulttodos));

const Todo = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_v1", []);
  const [search, setSearch] = useState("");

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
  return (
    <div className="container">
      <LeftSide className="leftSide" />
      <div className="rightSide">
        <TodoCounter className="TodoCounter"
          total={totalTodos}
          completed={CompletedTodos}
        />
        <TodoSearch search={search} setSearch={setSearch} />
        <TodoList>
          {loading &&  <LoadingIcon />}
          {error && <p>error!! </p>}
          {!loading && searchedTodos.length == 0 && <p>Put a to do ! </p>}
          {searchedTodos.map((todos) => (
            <TodosItem
              key={todos.text}
              text={todos.text}
              completed={todos.completed}
              onComplete={() => completeTodo(todos.text)}
              onDelete={() => deleteTodo(todos.text)}
            />
          ))}
        </TodoList>
        <TodoButton />
      </div>
    </div>
  );
};
export default Todo;
