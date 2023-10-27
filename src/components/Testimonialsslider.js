import Carousel from 'react-bootstrap/Carousel';
import TestimonialsImage from '../assets/image/testimonialsbackground.webp'
import "./Testimonialsslider.css"

function Testimonialsslider() {
    return (
        <Carousel fade className='carousel'>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Testimonialsslider;