import PropTypes from 'prop-types'


function Header({text}) {

    const HeaderStyles = 
    {
        backgroundColor:'blue',
        color:'red',
    }
    
    
    return (
      <header style={HeaderStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
  }


  // We cannn generate Deafault props doen here 
Header.defaultProps = 
{
    text:'Feedback UI'
}


// User generated prop types can be defined by this method
Header.propTypes = 
{
    text:PropTypes.string
}

export default Header