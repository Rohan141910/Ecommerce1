import { Link } from 'react-router-dom'
import './header.css'
import logo from './hcllogo.png'
function Header()
{
    return(
        <div className="header1">
            <div className='header2'>
                <img src={logo} height="100px" width="100px"></img>
            </div>
         <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="course">Course</Link></li>
         </ol>
        </div>
    )
}
export default Header
