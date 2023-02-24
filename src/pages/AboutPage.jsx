import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
function AboutPage() {
  return (
    <Card>
    <div className="about">
    <h1>About the Project</h1>
    <p>This is a react app to leave feedback for a product or a service</p>
    </div>

    <Link to='/'>
      Back to home page
    </Link>
    </Card>
  )
}

export default AboutPage