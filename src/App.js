import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"

function App()
{


    return(
        <>
        {/* //// This is how u pass on the component to the manin app for rendering and hencforth u can pass props which are meant to be caught by components */}
        <Header />  


        
        <div className="container">
            <FeedbackItem />
        </div>
        </>
        
    )


}


export default App