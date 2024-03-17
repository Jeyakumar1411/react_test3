import React from 'react'
import { useState } from 'react'

const PreviousState = () => {

    const initial_count = 0
    const [count, setCount] = useState(initial_count)

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(previousState => previousState + 1)
        }
    }

    return (
        <div className='m-3'>
            Count: {count}
            <button className='btn btn-outline-primary m-2' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn btn-outline-primary m-2' onClick={IncrementFive}>Increment Five</button>
        </div>
    )
}

export default PreviousState