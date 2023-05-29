/* eslint-disable react/prop-types */
import './style.css'

 function TodoSearch ({search,setSearch}) {
    const onSearchValueChange=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    return (
    <>
    <input type="text"
    className="TodoSearch"
    placeholder="Search your Task"
    value={search}
    onChange={onSearchValueChange}
    />

    </>
  )
}
export default TodoSearch