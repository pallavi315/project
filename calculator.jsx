import { useState } from 'react';
import React from "react";
import './calculator.css'
import Keyboard from "./keyboard";
export default function calculator(){
    const[input,setinput]=useState("")
    function handleclick(value){
        setinput(input+value)
    }
    function calculate(value){
        let outputval=eval(input)
        setinput(outputval)
    }
    function handleclear(){
        setinput("")
    }
    return(
        <div className="container">
            <h1>calculator application</h1>
            <div className="calculator">
                <input type="text"  value={input}className="output" />
                <Keyboard handleclick={handleclick} calculate={calculate} handleclear={handleclear}></Keyboard>
                </div>
        </div>
    )
}