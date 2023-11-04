
import Carousel from 'react-bootstrap/Carousel';



const CarouselHome = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
        className='Portada_1 img-fluid'
        style={{width: '100%',
        height: '400px', objectFit:'cover'}}
        src="src\assets\images\pexels-rachel-claire-5865196.jpg" alt=""
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='Portada_2 img-fluid'
        style={{width: '100%',
        height: '400px', objectFit:'cover'}}
        src= "src\assets\images\pexels-rachel-claire-5531541.jpg" alt=""
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='Portada_3 img-fluid'
        style={{width: '100%',
        height: '400px', objectFit:'cover'}}
        src = "src\assets\images\pexels-rdne-stock-project-5698851.jpg" alt=""
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default CarouselHome