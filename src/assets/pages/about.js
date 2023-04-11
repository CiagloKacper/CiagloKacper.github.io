import "../../style/main.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Computer from '../images/computer.gif';
import Asg from '../images/vector.gif'
import Dino from '../images/dino.gif'
import Val from '../images/val.gif';
import Star from '../images/star.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconMail } from "@tabler/icons-react";

function AboutPage() {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    return (
        <Container className="aboutBg p-5" fluid>
            <h1 className="mt-4" style={{ textAlign: 'center' }}>About me</h1>
            <Container className="d-flex w-100 about_content">
                {/* <div className="vr d-none d-md-block verticalRow my-5" /> */}
                <div>
                    <Row className="my-4">
                        <Col sm={12} md={{ span: 6, order: 'last' }} className="mt-3">
                            <div data-aos="fade-right" className="aboutEl p-3">
                                <p>My name is Kacper</p>
                                <p> I enjoy programing and many more activities like volleyball, basketball, video games etc. <br />
                                    I specialize in HTML CSS and JavaScript, i use React framework to develop front-end solutions. I've also
                                    used Angular during my first courses in programing. As a hobby I learn Kotlin for mobile apps
                                    and php in laravel for back-end Api application.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="mt-3">
                            <img data-aos="fade-left" className="about_photo" src={Computer} alt='' />
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none" />

                    <Row className="mb-4">
                        <Col sm={12} md={6} className="mt-3">
                            <div data-aos="fade-left" className="aboutEl p-3">
                                <p>
                                    My first contact with programing was 6 years ago when i tried to write my own game in C#, it wasn't
                                    easy, must admit it was too hard for me at this point of knowledge. I've created few projects but
                                    only one survived, later when I went to high school i learned python. It was nice experience but then
                                    we started learning HTML and CSS for exam and I loved it. Thats how i started web dev.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="mt-3">
                            <img data-aos="fade-right" className="about_photo" src={Dino} style={{ maxHeight: '200px' }} alt='' />
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none" />
                    <Row className="mb-4">
                        <Col sm={12} md={{ span: 6, order: 'last' }} className="mt-3">
                            <div data-aos="fade-right" className="aboutEl p-3">
                                <p> I love an active lifestyle, attending the gym, playing volleyball with friends and going to ASG games. I treat the gym like a second home, thanks to the gym I have goals in life and the desire to achieve them. I play volleyball as a hobby, because my height doesn't allow me to play a more advanced game ;(
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="mt-3">
                            <img data-aos="fade-left" className="about_photo" src={Computer} style={{ maxHeight: '200px' }} alt='' />
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none" />
                    <Row className="mb-4">
                        <Col sm={12} md={6} className="mt-3">
                            <div data-aos="fade-left" className="aboutEl p-3">
                                <p> ASG is my passion, from a young age I used to play with toy guns pretending to be a soldier, as soon as I discovered that as an adult I could continue to play with that type of toys I immediately knew I would love it.
                                    I believe that my hobbies allow me to grow both physically and mentally through contact with people.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="mt-3">
                            <img data-aos="fade-right" className="about_photo" src={Asg} style={{ maxHeight: '200px' }} alt='' />
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none" />
                    <Row className="mb-4">
                        <Col sm={12} md={{ span: 6, order: 'last' }} className="mt-3">
                            <div data-aos="fade-left" className="aboutEl p-3">
                                <p>
                                    I also play computer games, my favorites being Rocket League, Valorant, Green Hell. I would also add a lot of storytelling titles, but there is no point in listing too much. I find that these games develop my imagination, increase my perceptiveness, but what's key - they allow me to de-stress after hard days, because in my opinion that's the purpose of games.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="mt-3">
                            <img data-aos="fade-right" className="about_photo" src={Val} style={{ maxHeight: '200px' }} alt='' />
                        </Col>
                    </Row>


                </div>
            </Container>
            <hr className="w-50 mx-auto" />
            <h2 className="my-4">My knowledge (non-commercial)</h2>
            <div data-aos="fade-left" className="aboutEl mb-4 mx-auto py-4 text-center align-middle">
                <Row>
                    <Col>
                        <p className="fw-bold info">Technology</p>
                    </Col>
                    <Col>
                        <p className="fw-bold info">Learning since</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <hr className="d-md-none mx-auto mt-0 pt-0 w-50" />
                        <p className="fw-bold info">Advance level</p>
                    </Col>
                </Row>
                <hr className="d-md-none" />
                <Row>
                    <Col >
                        <p className="info">HTML</p>
                    </Col>
                    <Col>
                        <p className="info">3 years</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="info">
                            
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                        </p>
                    </Col>
                </Row>
                <hr className="d-md-none" />
                <Row>
                    <Col>
                        <p className="info">CSS</p>
                    </Col>
                    <Col>
                        <p className="info">3 years</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="info">
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                        </p>
                    </Col>
                </Row>
                <hr className="d-md-none" />
                <Row>
                    <Col>
                        <p className="info">JavaScript</p>
                    </Col>
                    <Col>
                        <p className="info">2 years</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="info">
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                        </p>
                    </Col>
                </Row>
                <hr className="d-md-none" />
                <Row>
                    <Col>
                        <p className="info">bootstrap</p>
                    </Col>
                    <Col>
                        <p className="info">1,5 year</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="info">
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                        </p>
                    </Col>
                </Row>
                <hr className="d-md-none" />
                <Row>
                    <Col>
                        <p className="info">ReactJS</p>
                    </Col>
                    <Col>
                        <p className="info">1 year</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="info">
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                            <img src={Star} className="star noExp" alt="" />
                        </p>
                    </Col>
                </Row>
            </div>
            <hr className="w-50 mx-auto" />
            <h2>Wanna chat ?</h2>
            <p className="pe">Don't be afraid to contact me!</p>
            <Container className="d-flex my-3 w-50">
                <a className="link mx-auto" href="https://github.com/CiagloKacper" rel="noreferrer" target='_blank'><IconBrandGithub size={50} /></a>
                <a className="link mx-auto" href="https://www.linkedin.com/in/kacper-ci%C4%85g%C5%82o-92a0b6238/" rel="noreferrer" target='_blank'><IconBrandLinkedin size={50} /></a>
                <a className="link mx-auto" href="https://www.facebook.com/kacperciag/" rel="noreferrer" target='_blank'><IconBrandFacebook size={50} /></a>
            </Container>
            <p className="pe"><IconMail size={50} /> kacperciag@op.pl</p>
        </Container>
    );
}

export default AboutPage;