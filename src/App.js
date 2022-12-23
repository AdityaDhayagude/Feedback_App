import { useState } from "react"
import Header from "./componenets/Header"
// import FeedbackItem from "./componenets/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componenets/FeedbackList"
// import Card from "./componenets/shared/Card"
import FeedbackStats from "./componenets/FeedbackStats"
import FeedbackForm from "./componenets/FeedbackForm"   

function App() { 
  const [feedback,setFeedback] = useState(FeedbackData)
  
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}

export default App