import React from "react";
import Square from "./square";
import {Patterns} from "./patterns";

function App()
{
    
    const [board, updateboard] = React.useState(["","","","","","","","",""]);
    const [playernum, updateplayernum] = React.useState(1);
   const [winningstate, updatewinningstate]= React.useState({player:"none", state: "none"});
  
   
    
    displaywinner();

    function updatingplayer()
    {
        updateplayernum(function (prevValue)
        {
            if(prevValue === 1)
            {
                
                return 2;

            }
            else if(prevValue === 2)
            {
                return 1;
            }
           
        });
    }

    function checkwinner()
    {
        for(var i  = 0 ;i < Patterns.length;i++)
        {
            var flag = 0;
            for(var j = 0 ; j < Patterns[i].length-1; j++)
            {
                if(board[Patterns[i][j]] !== "" && board[Patterns[i][j]] === board[Patterns[i][j+1]])
                {
                    flag  = 1;
                }
                else 
                {
                    flag = 0;
                }
            }
            if(flag === 1)
            {
                return board[Patterns[i][j-1]];
            }
        }
        return "";
    }
    function checkarr()
    {
        for(var i = 0 ; i < board.length;i++)
        {
            if(board[i] === "")
            {
                return false;
            }

        }
        return true;
    }

    function cleanboard()
    {
        updateboard(function ()
        {
            for(var i = 0 ; i < board.length; i++)
            {
                board[i] = "";
            }
        });

        updateplayernum(1);

        
    }
    function chooseSquare(index)
    {
        
        
            updateboard(function (previtem)
            {
                if(playernum === 1 && previtem[index] === "")
                {
                    previtem[index] = "X";
                    updatingplayer();
                    return previtem;
                }
                else if(playernum === 2 && previtem[index] === "")
                {
                    previtem[index] = "O";
                    
                    updatingplayer();
               
                    return previtem;
                }
                else 
                {
                    alert("Box already selected. Please select again!!!!");
                    return previtem;
                }
               
            });
        

        
            
       
    }
    

    function displaywinner()
    {
        
        var result = checkwinner();
        var boardfull = checkarr();
        if(result === "X" && winningstate.state === "none")
        {
        
            
            updatewinningstate({
                player:"1",
                state: "won"
            });
            
        }
        
        else if(result === "O" && winningstate.state === "none")
        {
      
            
            updatewinningstate({
                player:"2",
                state: "won"
            });
           //alert("Player 2 won");
          // cleanboard();
        }
        else if(boardfull === true && result === "")
        {
            
            
            updatewinningstate({
                player:"",
                state: "Tie"
            });
           
        }
        if(winningstate.player !== "none" && winningstate.state !== "none")
        {
            
                alert(`Winning player is ${winningstate.player}`);
            
            
        }
        
    }
    
   

    return (<div className="App">
        <div className="board">
            <div className="row">
                <Square key={0} index = {0} val = {board[0]} choosingSquare={chooseSquare}/>
                <Square key={1} index = {1} val = {board[1]} choosingSquare={chooseSquare}/>
                <Square key={2} index = {2} val = {board[2]} choosingSquare={chooseSquare}/>
            </div>
            <div className="row">
                <Square key={3} index = {3} val = {board[3]} choosingSquare={chooseSquare}/>
                <Square key={4} index = {4} val = {board[4]} choosingSquare={chooseSquare}/>
                <Square key={5} index = {5} val = {board[5]} choosingSquare={chooseSquare}/>
            </div>
            <div className="row">
                <Square key={6} index = {6} val = {board[6]} choosingSquare={chooseSquare}/>
                <Square key={7} index = {7} val = {board[7]} choosingSquare={chooseSquare}/>
                <Square key={8} index = {8} val = {board[8]} choosingSquare={chooseSquare}/>
            </div>
        </div>
    </div>);
}

export default App;