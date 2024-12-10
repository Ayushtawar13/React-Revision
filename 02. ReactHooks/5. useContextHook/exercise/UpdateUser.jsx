import React from 'react'
import {UserContext} from './UserContext'
import { useState,useContext } from 'react'

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext);
    const [newName , setName] = useState("");
    
    const handleSubmit =(e) =>{
        e.preventDefault();

        if(newName.trim()){
            updateUser(newName);
            setName("");
        }
    }
  return (
    <div>
        <h2>Update User Profile</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter new name'
            value={newName} 
             onChange={(e) => setName(e.target.value)} />
            <button type='submit'>Upadate</button>
        </form>
    </div>
  )
}

export default UpdateUser;