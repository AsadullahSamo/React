import React, { useState, useTransition } from 'react'

export default function UseTransitionHook() {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();
    function handleChange(e){
        setInput(e.target.value);
        startTransition(() => {
        const l = [];
        for(let i=0; i<20000; i++){
            l.push(e.target.value)
        }
        setList(l);
        })
    }    // end of handleChange() method

  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>  
        {isPending ? "Loading" 
        :list.map((item) => {
            return <div>{item}</div>
        })}
    </div>
  )
}
