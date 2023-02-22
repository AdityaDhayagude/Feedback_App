import React from 'react'

function Card({children,reverse}) {

  //This is conditional class and that's how it works

  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card  