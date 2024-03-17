import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CustomerEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {userid} = params

    const [customer_name, setCustomerName] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/test/post/${userid}`)
        .then(response => {
            setCustomerName(response.data.customer_name)
            setUsername(response.data.username)
            setAge(response.data.age)
        })
        .catch(error => console.log(error))
    }, [])

    const SubmitHandler = event => {

        event.preventDefault()

        const customer_data = {
            username: username,
            customer_name: customer_name,
            age: age
        }

        axios.patch(`http://127.0.0.1:8000/test/post/${userid}/`, customer_data)
        .then(response => navigate('/'))
        .catch(error => console.log(error))

    }

    const DeleteCustomer = (event) => {
        axios.delete(`http://127.0.0.1:8000/test/post/${userid}`)
        .then(response => navigate('/'))
        .catch(error => console.log(error))

    }

    return (
        <div className='m-5 p-5'>
            <form>
                <label className='form-label' htmlFor="">Username</label>
                <input className='form-control' type="text" name='username' value={username} onChange={event => setUsername(event.target.value)}/>
                <br />

                <label className='form-label' htmlFor="">Customer Name</label>
                <input className='form-control' type="text" name='customer_name' value={customer_name} onChange={event => setCustomerName(event.target.value)}/>
                <br />

                <label className='form-label' htmlFor="">Age</label>
                <input className='form-control' type="text" name='age' value={age} onChange={event => setAge(event.target.value)}/>

                <input className='btn btn-outline-success m-2' type="button" value="Update" onClick={SubmitHandler}/>
                <input className='btn btn-danger m-2' type="button" value="Delete" onClick={DeleteCustomer}/>
            </form>
        </div>
    )
}

export default CustomerEdit