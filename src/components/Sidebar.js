import './Home.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='sidebar-container'>
      <ul className="content">
        <Link to= '/home'><li className="text"> Profile</li> </Link>
        <Link to= '/post'><li className="text"> Posts</li> </Link>
        <Link to= '/gallery'><li className="text"> Gallery</li> </Link>
        <Link to= '/todo'><li className="text"> Todo</li> </Link>
      </ul>
    </div>
  )
}

export default Sidebar