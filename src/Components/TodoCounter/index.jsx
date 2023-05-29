import './styles.css'
function TodoCounter  ({total,completed})  {
  return (
   <p className="h2-counter"> Checklist <span>{completed}</span> de <span>{total}</span></p>
  )
}

export default TodoCounter