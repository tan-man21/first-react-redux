import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos, removeTodo } from '../features/todoSlice';

function ToDo() {
    const listItem = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = listItem.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>)

    const listItemSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => listItemSubmit(e)}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodos())} >Clear</button>
        </div>
    )
}

export default ToDo