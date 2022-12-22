import React from 'react'

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}></button>
  )
} 
 
Button.defaultProps = {
    version:'primary',
    type:'button',
    isDisabled:false,
}

// Button.prototype =  {
//     children:proptypes.node.isRequired,
//     version:proptypes.string,
//     type:proptypes.string,
//     isDisabled:proptypes.bool,
// }

export default Button