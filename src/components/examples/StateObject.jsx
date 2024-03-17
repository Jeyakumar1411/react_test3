import React from 'react'
import { useState } from 'react'

const StateObject = () => {

    const [laptop, setLaptop] = useState({
        brand: '',
        model: ''
    })

    return (
        <div>
            <form>
                <label htmlFor="">Brand</label>
                <input type="text" value={laptop.brand} onChange={event => setLaptop({... laptop, brand: event.target.value })}/>
                <br />
                <label htmlFor="">Model</label>
                <input type="text" value={laptop.model} onChange={event => setLaptop({... laptop, model: event.target.value })}/>
            </form>

            <p>{laptop.brand}</p>
            <p>{laptop.model}</p>
            <h1>{JSON.stringify(laptop)}</h1>
        </div>
    )
}

export default StateObject