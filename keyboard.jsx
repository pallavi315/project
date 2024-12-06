import React from "react";
export default function keyboard({handleclick,calculate,handleclear}){
    return(
        <div className="keyboard">
            <div className="row">
                < button onClick={()=>{handleclick("7")}} className="digit">7</ button>
                < button onClick={()=>{handleclick("8")}} className="digit">8</ button >
                < button onClick={()=>{handleclick("9")}} className="digit">9</ button>
                < button onClick={()=>{handleclick("/")}} className="operator">/</ button>
            </div>
            <div className="row">
                < button onClick={()=>{handleclick("4")}} className="digit">4</ button>
                < button onClick={()=>{handleclick("5")}} className="digit">5</ button>
                < button onClick={()=>{handleclick("6")}} className="digit">6</ button>
                < button onClick={()=>{handleclick("*")}} className="operator">*</ button>
            </div>
            <div className="row">
                < button onClick={()=>{handleclick("1")}} className="digit">1</ button>
                < button onClick={()=>{handleclick("2")}} className="digit">2</ button>
                < button onClick={()=>{handleclick("3")}} className="digit">3</ button>
                < button onClick={()=>{handleclick("-")}} className="operator">-</ button>
            </div>
            <div className="row">
                < button onClick={()=>{handleclick("0")}} className="digit">0</ button>
                < button onClick={()=>{calculate("")}} className="fun-key">=</ button>
                < button onClick={()=>{handleclear("")}} className="fun-key">c</ button>
                < button onClick={()=>{handleclick("+")}} className="operator">+</ button>
            </div>
        </div>
    )
}