import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Timer } from "timer-node";
import "../styling/typer_theme.css"

function TyperGame(props) {

    const inputx = useRef();

    const [source] = useState(props.quote);
    const [accuracy, setPrec] = useState('');
    const [wpm, setWpm] = useState(0);
    const [result, setResult] = useState('<p class="sentence">' +source+ "</p>");
    let update;
    const [goodWords, setWords] = useState(0);
    const [done, setDone] = useState(false);
    const timer = new Timer({ label: 'wynik' });
    const [time, setTime] = useState({
        m: 0,
        s: 0,
        ms: 0,
    });
    const [myTime, setMyTime] = useState({
        m:0,
        s:0,
        ms:0,
    })
    useEffect(() => {
        timer.start();
        setInterval(updateTimer, 10);
    }, [])

    const updateTimer = () => {
        if (!done) {
            setTime({
                m: timer.time().m,
                s: timer.time().s,
                ms: Math.ceil(timer.time().ms / 10)
            });
        }
    }
    const getWords = (str) => {
        let arr = str.match(/\w+/g);
        return arr;
    }

    const updateAccuracy = (quote, userInput) => {
        setResult('')

        let ref = getWords(`${quote}`);
        let users = getWords(`${userInput}`);
        let final = ''

        if (users) {
            setWords(ref.filter(i=> users.includes(i)).length);
            for (let i = 0; i < ref.length; i++) {
                let rightVal = users[i] !== ref[i];
                const good = `${final} <span class="great">${ref[i]}</span>`
                const bad = `${final} <span class="wrong">${ref[i]}</span>`
                if (i < users.length) {
                    if (rightVal) {
                        final = bad
                    }
                    else {
                        final = good
                    }
                }
                else (
                    final = `${final} <span class="sentence">${ref[i]} </span>`
                )
            }

            setResult(`${final}`)
        }
        else {
            setResult('<p class="sentence">' +source+ "</p>")
        }
        if(equalArray(users, ref)){
            setPrec('100%');
            submitSentence();
        }
        else{
            setPrec(`${(goodWords/ref.length*100).toFixed(2)}%`)
        }
    }

    const equalArray = (a, b) =>{
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, idx) => val === b[idx]);
    }

    const updateRes = (res) => {
        return res
    }
    const submitSentence = () => {
        timer.stop();
        setMyTime(time)
        setDone(true)

        let timeDone =  time.m + time.s/60 + time.ms/60000
        setWpm((goodWords / timeDone).toFixed(2))

        clearInterval(update)
        handleShow();
    }


    // modal
        const [show, setShow] = useState(false)

        const handleClose = ()=>{
            setShow(false);
            document.location.reload()
        }
        const handleShow = ()=>{
            setShow(true);
        }

    return (
        <Container className="game_board mt-5">

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>You finished!</Modal.Title>
                </Modal.Header>
                <Modal.Body className=''>
                    <p>Time:{myTime.m}:{myTime.s}:{myTime.ms}</p>
                    <p>Accuracy:{accuracy}</p>
                    <p>Words per minute(wpm):{wpm}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='m-1' variant="secondary" onClick={handleClose}>
                        Play again
                    </Button>
                </Modal.Footer>
            </Modal>

            <p className="timer">{time.m > 0 && `${time.m}:`}{time.s}:{time.ms}</p>

            <div className="my-5"
                dangerouslySetInnerHTML={{ __html: updateRes(result) }}
            />
            <input className="mb-3 inputEl" autoFocus={true}  onDrop={(e)=>{e.preventDefault()}} onPaste={(e)=>{e.preventDefault()}}  ref={inputx} onInputCapture={(e) => updateAccuracy(source, e.target.value)} />
            <button type="submit" onClick={() => submitSentence()}>finish</button>
        </Container>
    )
}

export default TyperGame;