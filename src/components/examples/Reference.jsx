import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Reference = () => {

    const [username, setUsername] = useState(React.createRef)

    useEffect(() => {
        username.current.focus()
    }, [])

    return (
        <div>
            <form>
                <label htmlFor="">Username</label>
                <input type="text" ref={username}/>
            </form>
        </div>
    )
}

export default Reference