import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";


function FeedbackForm() {
    // const[text,setText] = useState{''}

    const handleTextChange = (e) => {
        console.log(e.target.value);
    }

  return (
    <Card>
        <form action="">
            <h2>How would you like to rate your service with us ?</h2>
            {/* @todo - rating select componenet */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" />
                <Button type="submit" >Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm