import {motion ,AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackList({handleDelete}) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length===0)
    {
        return <p>No feedback Yet</p>
    }

    //VERSION WITH FADE ANIMATION
    return (
        <div className='feedbqack-list'>
            <AnimatePresence>
            {feedback.map((item)=>(
                // motion.div must have an unique key as it's a list 
                <motion.div
                key={item.id}
                initial={{opacity: 0 }}
                animate = {{opacity:1}}
                exit = {{opacity:0}}
                >
                <FeedbackItem key={item.id} item={item} 
                handleDelete={handleDelete}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    //VERSION WITHOUT FADE ANIMATION

    // return (
    //     <div className='feedbqack-list'>
    //         {feedback.map((item)=>(
    //             <FeedbackItem key={item.id} item={item} 
    //             handleDelete={handleDelete}
    //             />
    //         ))}

    //     </div>
    // )
}

export default FeedbackList