import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) { //WE can pass in the props in curly braces to avoid props.text shit

  const headerStyles ={
    backgroundColor:bgColor,
    color:textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
      <h2>{text}</h2>
    </div>
    </header>
  )
}

//WE can set dfault properties for loading  
Header.defaultProps ={
  text:'Feedback UI',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a95',
}

// Used for type checking
Header.propTypes = {
  text: PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string,
}

export default Header