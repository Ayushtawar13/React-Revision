import React from 'react'
import {UserContext} from './UserContext'
import { useContext } from 'react'

const UserProfile = () => {
    const {user} = useContext(UserContext);
  return (
      <div>
        <h1>User Profile</h1>
        <h2>Name : {user.name}</h2>
      </div>

  )
}

export default UserProfile