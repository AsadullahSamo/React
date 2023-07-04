import React, { useState, useMemo } from 'react'

export default function UseMemoHook() {

    // if useMemo is not used, it's gonna delay to change theme, because every 
    // time we update state of theme from dark to light or vice versa, 
    // React will render the entire document and calls slowFunction() every
    // time. With useMemo we cache slowFunction, and only use it when the num changes
    // If code is repeated, use useMemo
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(num);       
    }, [num] ) 

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    function slowFunction(number){
        console.log("Calling slow function");
        for(let i=0; i<1000000000; i++) {}
        return number * 2;
    }    // end of slowFunction() method

  return (
    <div>
      <input type="text" value={num} onChange={e => setNum(e.target.value)}/>
      <button onClick={() => setDark(dark => !dark)}> Change Theme </button>
      <div style={themeStyle}> {doubleNumber} </div>
    </div>
  )
}
