import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function User() {
    const {username} = useParams()
    const navigate = useNavigate()

  return (
    <div>
        User Page {username}
        <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default User