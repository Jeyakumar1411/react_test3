import React from 'react'
import { useState, useEffect } from 'react'

const StateArray = () => {
    const [languages, setLanguages] = useState([])
    const [user_input, setUserInput] = useState('')

    const AddLanguages = event => {
        event.preventDefault()
        setLanguages([... languages, user_input])
        setUserInput('')
    }

    useEffect (() => {
        console.log(languages)
    }, [languages])

    return (
        <div>
            <form>
                <input type="text" value={user_input}  onChange={event => setUserInput(event.target.value)}/>
                <input style={{marginLeft: "10px"}} type="submit" onClick={AddLanguages}/>
            </form>

            <h1>Programming Languages</h1>
            <ul>
                {
                    languages.map((lang, index) => <li key={index}>{lang}</li>)
                }
            </ul>
        </div>
    )
}

export default StateArray