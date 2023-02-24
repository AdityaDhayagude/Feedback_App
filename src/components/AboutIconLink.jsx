import { Link } from "react-router-dom"
import { FaQuestion } from "react-icons/fa"

function AboutIconLink() {
  return (
    <div className="about-link">
        {/* This does get the job done but refreshes the page which is not instantaneous */} 
         {/* <a href="/about">
        <FaQuestion size={30}/>
        </a> */}

        {/* This is how u avoid refreshing at every link click */}
        <Link to='/about'>
            <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink