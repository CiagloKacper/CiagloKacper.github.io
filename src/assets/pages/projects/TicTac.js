import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { IconCircle,IconCircleNumber0, IconX } from '@tabler/icons-react';
import './styling/tic_theme.css'

const pole = ['', '', '', '', '', '', '', '', '']


function TicTac() {

    const [p1, pChange] = useState(true);
    const [click, clicked] = useState(1);
    const [winner, setWinner] = useState('Winner is: ')
    const [whoWIn, setWin] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const wincond = []

    const pickBox = value => {
        clicked(click + 1)
        if (p1 === true) {
            pole[value - 1] = 'O'
        }
        else {
            pole[value - 1] = 'X'
        }
        wincond.push(
            // row
            pole[0] === pole[1] && pole[0] === pole[2] && pole[1] === pole[2] && pole[0] !== '' && pole[1] !== '' && pole[2] !== '',
            pole[3] === pole[4] && pole[3] === pole[5] && pole[4] === pole[5] && pole[3] !== '' && pole[4] !== '' && pole[5] !== '',
            pole[6] === pole[7] && pole[6] === pole[8] && pole[7] === pole[8] && pole[6] !== '' && pole[7] !== '' && pole[8] !== '',
            //col
            pole[0] === pole[3] && pole[0] === pole[6] && pole[3] === pole[6] && pole[0] !== '' && pole[3] !== '' && pole[6] !== '',
            pole[1] === pole[4] && pole[1] === pole[7] && pole[4] === pole[7] && pole[1] !== '' && pole[4] !== '' && pole[7] !== '',
            pole[2] === pole[5] && pole[2] === pole[8] && pole[5] === pole[8] && pole[2] !== '' && pole[5] !== '' && pole[8] !== '',
            //diagonal
            pole[0] === pole[4] && pole[0] === pole[8] && pole[4] === pole[8] && pole[0] !== '' && pole[4] !== '' && pole[8] !== '',
            pole[2] === pole[4] && pole[2] === pole[6] && pole[4] === pole[6] && pole[2] !== '' && pole[4] !== '' && pole[6] !== '',
        )
        checkWin()
    }

    const checkWin = () => {
        if (wincond.includes(true)) {
            p1 ? setWinner('Winner is:') : setWinner('Winner is:')
            p1 ? setWin(1) : setWin(2);
            handleShow()
            for (let i = 0; i < pole.length; i++)
                if (pole[i] === '')
                    pole[i] = ''
        }
        else if (click === 9) {
            setWinner("It's a tie!")
            setWin(0);
            handleShow()
        }
        else
            pChange(!p1)
    }

    const Reset = () => {
        clicked(1)
        for (let i = 0; i < pole.length; i++)
            pole[i] = ''
        handleClose()
    }

    return (
        <div class="container-fluid">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="text-center"
            >
                <Modal.Header 
                 className='modalBody'
                 closeButton>
                    <Modal.Title>{winner} {whoWIn == 0 ? '' : ((whoWIn ==1) ? <IconCircle size={30}/>: <IconX size={30}/>)} </Modal.Title>
                </Modal.Header>
                <Modal.Body className=' modalBody p-2 py-3'>
                    <Button className='mx-3 modalBTN' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='mx-3 modalBTNres' variant="secondary" onClick={Reset}>
                        Reset
                    </Button>
                </Modal.Body>
            </Modal>

            <div className="row mt-4">
                <div className="col-sm-12 col-md-4 text-center">
                    <h2>Current Player</h2> 
                    <h3>{p1? <IconCircle stroke={4} size={30}/> : <IconX stroke={4} size={30}/>}</h3>
                </div>
                <div className="col-sm-12 col-md-5 gamewrap text-center">
                    <div className="game mx-auto">
                        <Row className='my-2'>
                            <Col class="p-0">
                                {pole[0] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{ pole[0] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("1") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[1] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[1] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("2") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[2] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[2] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("3") }}></button>}
                            </Col>
                        </Row>
                        <Row>
                            <Col class="p-0">
                                {pole[3] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[3] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("4") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[4] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[4] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("5") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[5] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[5] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("6") }}></button>}
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col class="p-0">
                                {pole[6] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[6] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("7") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[7] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[7] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("8") }}></button>}
                            </Col>
                            <Col class="p-0">
                                {pole[8] ?
                                    <button class="w-100 p-0 playBtnDis" disabled>{pole[8] == "X" ? <IconX stroke={3}/> : <IconCircle stroke={3}/>}</button>
                                    :
                                    <button class="w-100 p-0 playBtn" onClick={() => { pickBox("9") }}></button>}
                            </Col>
                        </Row>
                    </div>
                    <button class='mx-auto my-5 fw-bold resetBtn' onClick={() => Reset()}>Reset</button>
                </div>
               
            </div>
        </div>
    );
}

export default TicTac;