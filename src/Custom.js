import React from "react";

function Ctm(props)
{
    return(
        <div align="center">    
            <h1 >Today  we all had a great learning experience with {props.Instructor}</h1>
            <hr />
            <hr />
            <h1>Alongwith {props.Instructor} were </h1>
            <ul>
                <li>{props.H1}</li>
                <li>{props.H2}</li>
                <li>{props.H3}</li>
            </ul>
            <hr ></hr>
            <hr></hr>
        </div>
    );
    
}
export default Ctm;