import PropTypes from 'prop-types'

// function Header(props) {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }

function Header({text}) {//Prop was caught here which was thrown by main app
    return (
      <header>
          <div className="container">
              <h2>{text}</h2> // Prop was dynamically used here
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