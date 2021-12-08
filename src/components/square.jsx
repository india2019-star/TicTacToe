import React from "react";

function Square(props)
{
    return (<div className="square" onClick={function ()
        {
           return  props.choosingSquare(props.index);
        }}>{props.val}</div>);

}

export default Square;