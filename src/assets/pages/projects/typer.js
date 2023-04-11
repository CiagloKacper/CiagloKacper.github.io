import React, { useState } from "react";
import './styling/typer_theme.css';
import Bgc from '../../background/stars.webp'
import { Container } from "react-bootstrap";
import randomQuote from "../../services/api";
import TyperGame from "./components/typerGame";
import Countdown from "react-countdown";

function Typer() {

    const [inGame, changeGameStatus] = useState(false)
    const [quote, setQuote] = useState()


    const getQuote = () => {
        randomQuote.get('/random').then((response) => {
            setQuote(response.data.content)
        }).then(() => {
            changeGameStatus(true);
        })

    }

    const timer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <TyperGame quote={quote}/>;
        } else {
            // Render a countdown
            return <span className="countdown">{seconds}</span>;
        }
    };

    return (
        <Container fluid>
            <img src={Bgc} alt='' className='background' />
            <div className="content">
                <h2>Check how fast you can type using your keyboard!</h2>

                {inGame ?

                    <Countdown date={Date.now() + 3000}
                        renderer={timer} />
                    :
                    <div>
                        <button className="start_btn mt-5" onClick={() => getQuote()}>START</button>
                    </div>
                }
            </div>
        </Container>
    )
}
export default Typer;
