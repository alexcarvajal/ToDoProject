import { TodoContext } from "../../Context"
import TodoCounter from "../../Components/TodoCounter"
import TodoSearch from "../../Components/TodoSearch"
import TodoList from "../../Components/TodoList"
import LeftSide from "../../Components/LeftSide"
import LoadingIcon from "../../assets/LoadingIcon"
import TodosItem from "../../Components/TodosItem"
import TodoButton from "../../Components/TodoButton"
import Modal from "../../Components/Modal"
import {useContext} from "react"
import './styles.css'
function Page () {
  const{loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
    } = useContext(TodoContext)
  return (
    <>
    <div className="container">
      <LeftSide className="leftSide" />
      <div className="rightSide">
        <TodoCounter className="TodoCounter"/>
        <TodoSearch />
            <TodoList>
            {loading &&  <LoadingIcon />}
            {error && <p>error!! </p>}
            {!loading && searchedTodos.length == 0 && 
            <p className="text-add">
              <img className="add-icon" src="/public/agregar.gif"  alt=""/>
              Put a to do ! 
              </p>}
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
        <TodoButton setOpenModal={setOpenModal}/>
        {openModal && (
          <Modal>Hola Hola</Modal>
        )}
      </div>
    </div>
    </>
  )
}
export default Page