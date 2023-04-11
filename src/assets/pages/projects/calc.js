import React, { useState } from 'react';
import './styling/calc_theme.css';


function Calculator() {

    const [Calc, setCalc] = useState('');
    const [Result, SetResult] = useState('');
    const ops = ['+', '-', '*', '/', '.']

    const updateCalc = value =>{
        if(
            (ops.includes(value) && Calc === '') ||
            (ops.includes(value) && ops.includes(Calc.slice(-1)))
        )
            return

        setCalc(Calc + value)
        if(!ops.includes(value))
            SetResult(eval(Calc + value).toString())
    }

    const delet = () => {
        if(Calc === ''){
            return
        }
        const del = Calc.slice(0,-1)
        
        setCalc(del)
        if(ops.includes(del.slice(-1)))
            SetResult(eval(del.slice(0,-1)))
        else if(del === '')
            SetResult('')
        else
            SetResult(eval(del).toString())
    }

    const equal = () => {
        setCalc(eval(Calc).toString())
        SetResult('');
    }


    return (
        <div className="container-fluid">
            <div className="calculator mx-auto my-5 border rounded fw-bold">
                <div className="res text-end">
                    {Calc || "0"} <br/>
                    {Result? <span>({Result})</span> : ''}
                </div>
                <div className="row ops mx-auto w-100">
                    <div className="col m-0 p-0">
                        <button type="button" className="w-100" onClick={()=> updateCalc('+')}>+</button>
                    </div>
                    <div className="col m-0 p-0">
                        <button type="button" className="w-100" onClick={()=> updateCalc('-')}>-</button>
                    </div>
                    <div className="col m-0 p-0">
                        <button type="button" className="w-100" onClick={()=> updateCalc('*')}>*</button>
                    </div>
                    <div className="col m-0 p-0">
                        <button type="button" className="w-100" onClick={()=> updateCalc('/')}>/</button>
                    </div>
                    <div className="col m-0 p-0">
                        <button type="button" className="w-100" onClick={() => delet()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="nums">
                    <div className="row mx-auto w-100">
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100" onClick={()=> updateCalc('7')}>7</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('8')}>8</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('9')}>9</button>
                        </div>
                    </div>
                    <div className="row mx-auto w-100">
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('4')}>4</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('5')}>5</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('6')}>6</button>
                        </div>
                    </div>
                    <div className="row mx-auto w-100">
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('1')}>1</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('2')}>2</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('3')}>3</button>
                        </div>
                    </div>
                    <div className="row mx-auto w-100">
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('.')}>.</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100"onClick={()=> updateCalc('0')}>0</button>
                        </div>
                        <div className="col m-0 p-0">
                            <button type="button" className="w-100" onClick={()=>equal()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;