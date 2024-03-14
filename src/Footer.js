
import "./footer.css"
import insta from "./instagram.png"
// import whatsapp from "./whatsapp.png"
import linkdin from "./linkdin.png"
// import call from "./call.png"
// import map from "./map.png"
import { Link } from "react-router-dom"

function Footer()
{
    return(
        <div className="footer0">
            <div className="footer1">
                <ol>
                    <li><h1>About Us</h1></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="course">Course </Link></li>
                    <li><Link to="contact">Contact Us</Link></li>
                </ol>
                </div>
          <div className="footer2">
            <ol>
            <li><h1>QUICK LINKS</h1></li>

<li><Link id="11"><img src={insta} height={30} width={30}></img> Instagram</Link></li>

 <li><Link id="12"><img src={linkdin} height={30} width={30}></img> Linkdin</Link></li>

{/* <li><Link id="12"><img src={facebook} height={30} width={30}></img> Facebook </Link></li> */}

</ol>

</div>

<div className="footer3">

<ol>

<li><h1>CONTACT US</h1></li>

<li><Link>109 1st Floor,306 3rd Floor, Prem Plaza, Ashok Nagar, Bhawarkua Road, Indore (M.P) </Link></li>


</ol>
</div> 
      
      </div>  
    )
}
export default Footer