import Carousel from 'react-bootstrap/Carousel';
import TestimonialsImage from '../assets/image/testimonialsbackground.webp'
import QuotationMarks from "../assets/icons/quotation-marks.webp"
import "./Testimonialsslider.css"

function Testimonialsslider() {
    return (
        <Carousel fade className='carousel'>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="" />
            <Carousel.Caption>
              <img src={QuotationMarks} />
                <p>Cooperation with Niko has been rewarding. The contents of the trainings have been exactly 
                  what was agreed and the micro-enterprises that were the target group have received tools for 
                  developing their business from the trainings. Trainer Niko is approachable and you dare to ask 
                  him any questions that come to mind. The atmosphere of the trainings has 
                  been relaxed and immediate.</p>
                  <i>Katariina Moilanen, R&D expert, Savonia University of Applied Sciences</i>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="" />
            <Carousel.Caption>
              <img src={QuotationMarks} />
                <p>Cooperation with Niko has been rewarding. The contents of the trainings have been exactly 
                  what was agreed and the micro-enterprises that were the target group have received tools for 
                  developing their business from the trainings. Trainer Niko is approachable and you dare to ask 
                  him any questions that come to mind. The atmosphere of the trainings has 
                  been relaxed and immediate.</p>
                  <i>Mia Koivujoki, R&D expert, Savonia University of Applied Sciences</i>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="" />
            <Carousel.Caption>
              <img src={QuotationMarks} />
                <p>Cooperation with Niko has been rewarding. The contents of the trainings have been exactly 
                  what was agreed and the micro-enterprises that were the target group have received tools for 
                  developing their business from the trainings. Trainer Niko is approachable and you dare to ask 
                  him any questions that come to mind. The atmosphere of the trainings has 
                  been relaxed and immediate.</p>
                  <i>Sanna Hujanen, R&D expert, Savonia University of Applied Sciences</i>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="" />
            <Carousel.Caption>
              <img src={QuotationMarks} />
                <p>Cooperation with Niko has been rewarding. The contents of the trainings have been exactly 
                  what was agreed and the micro-enterprises that were the target group have received tools for 
                  developing their business from the trainings. Trainer Niko is approachable and you dare to ask 
                  him any questions that come to mind. The atmosphere of the trainings has 
                  been relaxed and immediate.</p>
                  <i>Reetta Simppanen, R&D expert, Savonia University of Applied Sciences</i>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={TestimonialsImage} alt="" />
            <Carousel.Caption>
              <img src={QuotationMarks} />
                <p>Cooperation with Niko has been rewarding. The contents of the trainings have been exactly 
                  what was agreed and the micro-enterprises that were the target group have received tools for 
                  developing their business from the trainings. Trainer Niko is approachable and you dare to ask 
                  him any questions that come to mind. The atmosphere of the trainings has 
                  been relaxed and immediate.</p>
                  <i>Anna-Reetta Väänänen, R&D expert, Savonia University of Applied Sciences</i>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Testimonialsslider;