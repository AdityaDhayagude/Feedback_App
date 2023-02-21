import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
function App()
{
    const[feedback,setFeedback] = useState(FeedbackData)

    return(
        <>
        {/* //// This is how u pass on the component to the manin app for rendering and hencforth u can pass props which are meant to be caught by components */}
        <Header />  
        
        <div className="container">
            <FeedbackList feedback={feedback}/>
        </div>
        </>
        
    )


}


export default App