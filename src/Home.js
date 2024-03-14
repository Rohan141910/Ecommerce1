import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import image1 from "./ios.jpg"
import image2 from "./andriod.png"
import image3 from "./mean.jpg"

function Home() {
  return (
    <div className='home'>
      <div>
    
 
    <Carousel fade>
      <Carousel.Item>
        <img src={image1} width="100%" height={500}></img>
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} width="100%" height={500}></img>
        <Carousel.Caption>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} width="100%" height={500}></img>
        <Carousel.Caption>
       </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='home2'>
      <div className='home3'>
        <h1>Start Your Carrer in </h1>
        <h1 id='h1'>Software Development.</h1>
        <h1>Programming is the art of algorithm design and the craft of debugging errant code. </h1>
      
      </div>
    </div>

    </div>
    
  );
}
export default Home;
