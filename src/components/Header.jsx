import PropTypes from 'prop-types'


function Header({text,bgColor,textColor}) {

    const HeaderStyles = 
    {
        backgroundColor:bgColor,
        color:textColor,
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
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}


// User generated prop types can be defined by this method
Header.propTypes = 
{
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColorColor:PropTypes.string,
}

export default Header