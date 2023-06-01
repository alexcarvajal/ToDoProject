/* eslint-disable react/prop-types */
import {useContext} from "react"
import { TodoContext } from "../../Context";
import './style.css'

 function TodoSearch () {
  const {
    search,
    setSearch,
  } = useContext(TodoContext)
    return (
    <>
      <input type="text"
      className="TodoSearch"
      placeholder="Search your Task"
      value={search}
      onChange={(event)=>
      setSearch(event.target.value)
      }
      />

    </>
  )
}
export default TodoSearch