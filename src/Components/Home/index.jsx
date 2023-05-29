import LeftSide from "../LeftSide";
import "./styles.css";
import { useState } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodosItem from "../TodosItem";
import TodoButton from "../TodoButton";

const defaulttodos = [
  { text: "Cortar element", completed: true },
  { text: "Tomar element", completed: true },
  { text: "Take element", completed: false },

];

const Todo = () => {
  const [todos, setTodos] = useState(defaulttodos);
  const [search, setSearch] = useState("");

  const CompletedTodos = todos.filter(
    (todos) => todos.completed === true
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todos)=>{
      const todoText=todos.text.toLowerCase()
      const searchText=search.toLocaleLowerCase()
      return(
        todoText.includes(searchText)
      )
    
    }
  )
    
  return (
    <div className="container">
      <LeftSide className="leftSide" />
      <div className="rightSide">
        <TodoCounter
          className="TodoCounter"
          total={totalTodos}
          completed={CompletedTodos}
        />
        <TodoSearch search={search} setSearch={setSearch} />
        <TodoList>
          {searchedTodos.map((todos) => (
            <TodosItem key={todos.text} text={todos.text} completed={todos.completed}  />
          ))}
        </TodoList>
            <TodoButton />
      </div>
    </div>
  );
};
export default Todo;
