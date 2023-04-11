import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './projects/styling/proj_theme.css';
import Calc from '../images/calculator.png';
import Typer from '../images/typer.png';
import Tic from '../images/tictactoe.png';
import { useNavigate } from "react-router-dom";

function Projects() {

    const navigate = useNavigate();

    return (
        <Container fluid>
            <Container className="Header">
                <h2>Brick by brick...</h2>
                <h2>My projects gallery</h2>
            </Container>

            <Container>
                <Row className="d-flex my-4">
                    <Col className="my-2" >
                        <Container className="cliper" onClick={() => { navigate('/projects/tictac') }}>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <div className="Card">
                                <div className="photo_wrap">
                                    <img src={Tic} className='photo' alt='' />
                                </div>
                                <p className="title">TicTacToe</p>
                            </div>
                        </Container>
                    </Col>
                    <Col className="my-2" >
                        <Container className="cliper" onClick={() => { navigate('/projects/calculator') }}>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <div className="Card">
                                <div className="photo_wrap">
                                    <img src={Calc} className='photo' alt='' />
                                </div>
                                <p className="title">Calculator</p>
                            </div>
                        </Container>
                    </Col>
                    <Col className="my-2" >
                        <Container className="cliper" onClick={() => { navigate('/projects/typer') }}>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <div className="Card">
                                <div className="photo_wrap">
                                    <img src={Typer} className='photo' alt='' />
                                </div>
                                <p className="title">Typer</p>
                            </div>
                        </Container>
                    </Col>
                    {/* <Col className="my-2" >
                        <Container className="cliper">
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                            <div className="Card">
                                <h3 className="wip">Work in Progress <img src={Wrench} className='work' alt='' /></h3>
                            </div>
                        </Container>
                    </Col> */}
                </Row>
            </Container>

        </Container>
    )
}

export default Projects;