
import { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState("")
  const kitta=(e)=>{
    setResult(result.concat(e.target.name))

  }
  const clear1=()=>{
    setResult("")
  }
  const C2=()=>{
    setResult(result.slice(0,result.length-1));

  }
  const claculate=()=>{
    try{

      setResult(this.eval(result))
    }
    catch{
      setResult("error")
    }
    
  }
  return (
    <div className="App">
      <div className='king'>

      
        <form>
          <input type="text" value={result}/>
        </form>
        <div className='keypad'>
        <button name="%"  className="Cler" onClick={kitta}>%</button>
        <button name="" className='Cler' onClick={C2}>C</button>
        
        <button  name="" className='Cler Clear1' onClick={clear1}>Clear</button>
       
        <button name="/" className='Cler'  onClick={kitta}>&divide;</button>
        <button name="7" onClick={kitta}>7</button>
        <button name="8" onClick={kitta}>8</button>
        <button name="9" onClick={kitta}>9</button>
        <button name="*" className='Cler'  onClick={kitta}>&times;</button>
        <button name="4" onClick={kitta}>4</button>
        <button name="5" onClick={kitta}>5</button>
        <button name="6" onClick={kitta}>6</button>
        <button name="-" className='Cler' onClick={kitta}>&ndash;</button>
        <button name="1" onClick={kitta}> 1</button>
        <button name="2" onClick={kitta}>2</button>
        <button name="3"  onClick={kitta}>3</button>
        <button name="+" className='Cler' onClick={kitta}>+</button>
        <button name="0" onClick={kitta}>0</button>
        <button name="." onClick={kitta}>.</button>
        <button name="" className='Cler equallTo' onClick={claculate}>=</button>
        </div>
      </div>



      
      
    </div>
  );
}

export default App;
