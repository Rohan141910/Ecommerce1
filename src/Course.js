
import "./course.css"
import mern from "./mern2.png"
import Java from "./Java-Full-Stack.png"
import python from "./python.jpg"
import mean from "./mean.jpg"
import andriod from "./andriod.png"
import ios from "./ios.jpg"

function Course()
{
    return(
      <div className="wrapper">
        <div className="card" style={{height:"200px"}}>
          <img src={mern}></img>
          <div className="info">
            <h1>Mern Full Stack</h1>
            <a href="mern" className="btn">View Detail</a>
            </div>
            </div><br></br>
            <br></br>
            <br></br>

            <div className="card" style={{height:"200px"}}>
          <img src={mean}></img>
          <div className="info6">
            <h1>Mean Full Stack</h1><br></br>
            
            <a href="mean" className="btn">View Detail</a>

          </div>
        </div>
        <br></br>
        <br></br>
           
        <div className="card" style={{height:"200px"}}>
          <img src={Java}></img>
          <div className="info2">
            <h1>Java Full Stack</h1>
            <a href="java" className="btn">View Detail</a>

          </div>
        </div>
        <br></br>
        <br></br>

        <div className="card" style={{height:"200px"}}>
          <img src={python}></img>
          <div className="info3">
            <h1>Python Full Stack</h1>
            <a href="python" className="btn">View Detail</a>

          </div>
        </div>
        <br></br>
        <br></br>
        
        <div className="card" style={{height:"200px"}}>
          <img src={andriod}></img>
          <div className="info4">
            <h1>Andriod</h1>
            <a href="android" className="btn">View Detail</a>

          </div>
        </div>
        <br></br>
        <br></br>
        
        <div className="card" style={{height:"200px"}}>
          <img src={ios}></img>
          <div className="info5">
            <h1>IOS</h1>
            <a href="ios" className="btn">View Detail</a>

          </div>
        </div>
        <br></br>
        <br></br>
        
         
      </div>
        )
}
export default Course