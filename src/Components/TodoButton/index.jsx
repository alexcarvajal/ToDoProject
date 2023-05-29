 
import './styles.css'

const onClickButton = (msg) => {
    alert(msg);
  };
  
   function TodoButton (props) {
    return (
      <>
      <button className="CreateTodoButton"
      onClick={() => onClickButton('alerta')}
      >+</button>
  
      </>
    )
  }
  
  
  export default TodoButton;