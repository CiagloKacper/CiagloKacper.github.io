import "../../style/main.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import BgGif from '../background/main_background.gif'
import Aos from "aos";
import 'aos/dist/aos.css'

function HomePage() {

  useEffect(() => {
    Aos.init({ duration: 700 })
  }, []);

  return (
    <Container fluid>
      <div className="overlay"></div>
      <img src={BgGif} className='background' alt="" />
      <div className="HomeTitle w-100">
        <p data-aos="fade-left">Kacper Ciągło</p>
        <h1 data-aos="fade-right" data-aos-duration="800">
          FRONT-END DEV
        </h1>
        <p data-aos="fade-left">
          from Opole, Poland
        </p>
      </div>
    </Container>
  );
}

export default HomePage;