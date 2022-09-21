import React from 'react'

function CompanyInfo({user}) {
  return (
    <div>
        <p>{user.company.name}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        <br />
        <hr />
    </div>
  )
}

export default CompanyInfo