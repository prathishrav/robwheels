import axios from 'axios';
import React, { useEffect, useState } from 'react';
import'../../styles/admin.css'

function Dashboard(props) {
    const URL = 'http://localhost:8080/api/orders/'

    const [data, setData] = useState([])
      
    useEffect(() => {
      getData()
    }, [])
  
    const getData = async () => {
      const response = await axios.get(URL)

      setData(response.data)
    }
  
    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(() => {
          const del = data.filter((item) => id !== item.id)
          setData(del)
        })
      }

  
    const renderBody = () => {
        return data && data.map(({ id,bikeId, userId, email, amount, }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{bikeId}</td>
                    <td>{userId}</td>
                    <td>{email}</td>
                    <td>{amount}</td>
                    <td className='operation'>
                        <button className='button' onClick={() => removeData(id)}> Delete </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
        <div className='table-container'>
        <h1 id='title'>Admin DashBoard</h1>
        <table id='employee'>
            <thead>
                <tr>
                <th>ID</th>
                <th>BIKEID</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>AMOUNT</th>
                <th>ACTIONS</th>
               
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
        </div>
    </>
    );
}

export default Dashboard;