import {FaCheck}from 'react-icons/fa'
import {GiCancel}from 'react-icons/Gi'

import './styles.css'
function TodosItem (props){
      return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
            <FaCheck />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >
              <GiCancel />
             </span>
        </li>
      )
}

export default TodosItem