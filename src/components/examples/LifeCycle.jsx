import React from 'react'
import { useState, useEffect } from 'react'

const LifeCycle = () => {

    const [username, setUsername] = useState("User1")
    const [age, setAge] = useState(20)

    useEffect(() => {
        console.log("After Load Up")

        return () => {
            console.log("On destroy")
        }
    }, [])

    useEffect(() => {
        console.log("OnUpdate")
    }, [username])

    return (
        <div>
            <h1>{username}</h1>
            <h1>{age}</h1>
            <button onClick={() => setUsername("NewUser")}>Update Name</button>
            <button onClick={() => setAge(22)}>Update Age</button>
        </div>
    )
}

export default LifeCycle