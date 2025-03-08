import logo from './logo.svg';
import './App.css';
 import { useState } from 'react';
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
 
function Square ({value  , OnClicked})
{
 

  if( value === "O")
    return ( 

      <button className = 'Square' onClick={ OnClicked} style={{color : "green"}}>{value}</button>
    )
    else
  return ( 

    <button className = 'Square' onClick={ OnClicked} style={{color : "red"}}>{value}</button>
  )

}
function HandleWinner(squares)
{
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null
}
function Board()
{
  const [xOrO ,UpdateCurrent] = useState(true)
  const [Squares, updateSquared] = useState(Array(9).fill(null))
  let Status = "Test"
  function handleClick(i)
  {
   
   
    if(Squares[i] || HandleWinner(Squares))
      return
   
    const copiedSquares = Squares.slice()

    if(xOrO )
      copiedSquares[i] = "X"
    else 
      copiedSquares[i] = "O"

    
     
  updateSquared(copiedSquares)
  UpdateCurrent(!xOrO)
  
  
  }

  const winner = HandleWinner(Squares)
  if(winner)

    { Status = "Current Winner is " + winner + "!!!!!!!!!!!" 
    
    }
    else
    { Status = "Current Round is for " +( xOrO ? "X" : "O" )}

  return(
  <>
  <div className = 'Status' >
    
    {Status}
    
  </div>
  
  <div className='BoardRow' >
   
  <Square value= {Squares[0]} OnClicked={()=>handleClick(0)}/>
  <Square value= {Squares[1]} OnClicked={()=>handleClick(1)}/>
  <Square value= {Squares[2]} OnClicked={()=>handleClick(2)}/>


  </div>
  
  <div className='BoardRow' >
    
  <Square value= {Squares[3]} OnClicked={()=>handleClick(3)}/>
  <Square value= {Squares[4]} OnClicked={()=>handleClick(4)}/>
  <Square value= {Squares[5]} OnClicked={()=>handleClick(5)}/>

  </div>
  <div className='BoardRow' >
    
  <Square value= {Squares[6]} OnClicked={()=>handleClick(6)}/>
  <Square value= {Squares[7]} OnClicked={()=>handleClick(7)}/>
  <Square value= {Squares[8]} OnClicked={()=>handleClick(8)}/>

  </div>
  
  </>
  )
}
function App() {

  
  return (
    <div className="App">

      <header className="App-header">
        <div className = "Wlc"  >  Tic-Tac-Toe Game !</div>
       

        <Board/>
      </header>
    </div>
  );
}

export default App;
