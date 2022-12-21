import React from 'react'


function FeedbackStats({feedback}) {
        //CALCULATE RATING AVG 
        let average = feedback.reduce((acc,cur)=>{
            return acc+cur.rating
        },0) /feedback.length
  return (

    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Raing :{average}</h4>
    </div>
  )
}

export default FeedbackStats