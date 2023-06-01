import { useContext, useState } from "react"
import { TodoContext } from "../../Context";
import './styles.css'
function TodoForm () {
    const{
        setOpenModal,
        addTodo
    }=useContext(TodoContext)

    const [newTodoValue, setNewTodoValue]=useState('')

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange =()=>{
      setNewTodoValue( event.target.value)
    }

  return (
    <>
    <form onSubmit= {onSubmit}>
        <label>Write a new Text</label>
        <textarea 
            placeholder="Write your task"
            value={newTodoValue}
            onChange={onChange}></textarea>
        <div className="buttonContainer">
            <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-cancel">Exit</button>
            <button 
                type=""
            className="TodoForm-button TodoForm-add">Add Task </button>
        </div>
    </form>

    </>
  )
}

export default TodoForm