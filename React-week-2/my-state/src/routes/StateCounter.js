import React, {useState} from 'react'

const StateCounter = () => {
    const [count, setCount] = useState(5)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
           <h1>{count}</h1>
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
        </div>
    )
   
}

export default StateCounter
