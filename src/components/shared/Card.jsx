import React, { Children } from 'react'
import PropTypes from 'prop-types'

function Card({children,reverse}) {

  //This is conditional style and that's how it works

  return (
    <div className='card' 
    style={{
      backgroundColor:reverse ? 'rgba(0,0,0,0.4)' : '#fff',
      color: reverse? '#fff' : '#000',
    }}>
      {children}
    </div>
  )
} 

Card.defaultProps = 
{
  reverse:false,
}

// Crad.PropTypes = {
//   children:PropTypes.node.isRequired,
//   reverse:Prop
// }

export default Card  