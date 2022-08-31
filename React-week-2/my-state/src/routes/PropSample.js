import React from 'react'

const PropSample = props => {
   return (
   <div style={{
      fontSize: '5rem',
      color: 'red'
   }}>
      <p>{props.first}</p>
      <p>{props.last}</p>
    </div>
   )
}

export default PropSample
