import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CustomerRender from './CustomerRender'
import { useNavigate } from 'react-router-dom'
import PreviousState from '../examples/PreviousState'
import StateArray from '../examples/StateArray'

const CustomerGet = () => {

    const navigate = useNavigate()

    const [customer_data, setCustomerData] = useState([])

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/test/post')
        .then(response => setCustomerData(response.data))
        .catch(error => console.log(error))
    }, [])

    let customer_render = customer_data.length > 0 ? customer_data.map(customer => <CustomerRender key={customer.id} customer={customer}/>): <div style={{color:'red', fontWeight:'bold'}}>No Data Found!</div>

    return (
        <div className='m-5 p-2'>
            <table className='table table-light'>
                <thead>
                    <tr className='table table-primary'>
                        <th className='col'>Username</th>
                        <th className='col'>Customer Name</th>
                        <th className='col'>Age</th>
                        <th className='col'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {customer_render}
                </tbody>
            </table>
            <button className='btn btn-primary ' onClick={() => navigate('/add')}>Go to add page</button>
            

            {/* <FragmentCom/> */}
            {/* <MemoCom/> */}
            {/* <Portals/> */}
            

            {/* 24/wed.jan.2024 */}
            <PreviousState/>
            <StateArray/>

            {/* we are not use in Reference, we use "useRef" (auto focus curser) */}

            
            
        </div>
    )
}

export default CustomerGet