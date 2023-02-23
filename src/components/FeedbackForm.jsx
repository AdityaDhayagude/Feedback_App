import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";


function FeedbackForm() {
    const[text,setText] = useState('')
    //Real-Time validation
    const [btnDisabled,setBtnDisabled] = useState('')
    const [message,setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '')
        {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text!=='' && text.trim().length<=10)
        {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
           
            
        }
        else
        {
            setMessage(null)
            setBtnDisabled(false)
        }

            setText(e.target.value)
    }




  return (
    <Card>
        <form action="">
            <h2>How would you like to rate your service with us ?</h2>
            {/* @todo - rating select componenet */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" />
                <Button type="submit" isDisabled={btnDisabled} >Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm