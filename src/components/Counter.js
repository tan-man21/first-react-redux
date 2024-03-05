import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment, incrementByAmount} from '../features/counterSlice'

function Counter(){
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type='number' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Counter