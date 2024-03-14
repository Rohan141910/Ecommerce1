import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Course from "./Course"
import About from "./About"
import Contact from "./Contact"
import Signup from "./Signup"
import "./routing.css"




function Routing()
{
    return(
        <div className="routing">
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}>Home page</Route>
            <Route path="/" element={<Contact></Contact>}>contact page</Route>
            <Route path="/" element={<About></About>}>about page</Route>
            <Route path="course" element={<Course></Course>}>Course</Route>
            <Route path="/" element={<Signup></Signup>}>Signup</Route>
            
            
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
        </div>
    )
}
export default Routing