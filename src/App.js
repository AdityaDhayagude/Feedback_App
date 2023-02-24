import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
function App()
{
    const[feedback,setFeedback] = useState(FeedbackData)

    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()

        //... is a spread
        setFeedback([newFeedback,...feedback])
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are u sure that u wanna delete ?')){
            setFeedback(feedback.filter((item)=> item.id!==id))
        }
    // The .filter() is an HO array method which allows u to filter through stuff but with adding in conditions can help to filter stuff according to necessity
    }

    return(
        <Router>
        {/* //// This is how u pass on the component to the manin app for rendering and hencforth u can pass props which are meant to be caught by components */}
        <Header />  
        
        <div className="container">
        <Routes>
            <Route exact path='/' 
            element={
                <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/>
                </>
            }>
                
            </Route>
            
            <Route path='/about' element={<AboutPage/>}  />
            </Routes>
        </div>
        </Router>
        
    )


}


export default App