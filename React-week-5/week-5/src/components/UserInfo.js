import React from 'react'

function UserInfo({user}) {
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserInfo