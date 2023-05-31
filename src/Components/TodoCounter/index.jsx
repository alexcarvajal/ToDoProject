
import "./styles.css";
function TodoCounter({ total, completed }) {
  return (
    <p className="h2-counter">
      {completed === total ? "Completaste todos los items" : `Checklist ${completed} de ${total}`}
     </p>

  );
}

export default TodoCounter;
