import { useContext } from "react";
import "./styles.css";
import { TodoContext } from "../../Context";
function TodoCounter() {
  const {
    totalTodos,
    CompletedTodos,
  } = useContext(TodoContext)
  return (
    <p className="h2-counter">
      {totalTodos === CompletedTodos ? "Completaste todos los items" : `Checklist ${CompletedTodos} de ${totalTodos}`}
    </p>
  );
}

export default TodoCounter;
