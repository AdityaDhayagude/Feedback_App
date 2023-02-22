import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
function App()
{
    const[feedback,setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are u sure that u wanna delete ?')){
            setFeedback(feedback.filter((item)=> item.id!==id))
        }
        // The .filter() is an HO array method which allows u to filter through stuff but with adding in conditions can help to filter stuff according to necessity
    }

    return(
        <>
        {/* //// This is how u pass on the component to the manin app for rendering and hencforth u can pass props which are meant to be caught by components */}
        <Header />  
        
        <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}/>
        </div>
        </>
        
    )


}


export default App