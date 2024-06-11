import  PropTypes  from "prop-types"
import { useState } from "react";

export const CounterApp = () => {
    
    // Hook useState -> Hook que permite manejar estados dentro del componente
    const [value, setValue] = useState(0);
    const handleIncrementValue=()=>{setValue(value+1);}
    const handleDecrementValue=()=>{value>0&&setValue(value-1);}
    const handleReset=()=>{value>0&&setValue(0);}
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={handleIncrementValue}>+1</button>
      <button onClick={handleDecrementValue}>-1</button>
      <button onClick={handleReset}>Reset</button>
      
    </>
  );
};


CounterApp.propTypes={
    value: PropTypes.number.isRequired
  }
CounterApp.defaultProps = {
    value: 0
  }