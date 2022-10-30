
import React, {useState} from 'react';
import './App.css';

function App() {

  const [result, setresult] = useState("");
  const ClickHandler =(value) => {
    setresult(result.concat(value))
  }
  const deleted =()=>{
    setresult('')
  }
  const evaluation =()=> {
    setresult(eval(result).toString());
  }
  return(
    <div className='App'>
  <div className='calculator'>
    <div className='display'>
    {result}
      </div>
    <div className='operator' >
    <button onClick={()=>ClickHandler('+')}>+</button >
    <button onClick={()=>ClickHandler('-')}>-</button>
    <button onClick={()=>ClickHandler('/')}>/</button>
    <button onClick={()=>ClickHandler('%')}>%</button>
    <button onClick={()=>ClickHandler('*')}>*</button>
    <button onClick={deleted}>DEL</button>
    </div>
    <div className='digits' >
    <button onClick={()=>ClickHandler('9')}>9</button>
    <button onClick={()=>ClickHandler('8')}>8</button>
    <button onClick={()=>ClickHandler('7')}>7</button>
    <button onClick={()=>ClickHandler('6')}>6</button>
    <button onClick={()=>ClickHandler('5')}>5</button>
    <button onClick={()=>ClickHandler('4')}>4</button>
    <button onClick={()=>ClickHandler('3')}>3</button>
    <button onClick={()=>ClickHandler('2')}> 2</button>
    <button onClick={()=>ClickHandler('1')}>1</button>
    <button onClick={()=>ClickHandler('0')}>0 </button>
    <button onClick={()=>ClickHandler('.')}>.</button>
    <button onClick={evaluation}>=</button>
    </div>
    
  </div>
  </div>
  );
}

export default App;
