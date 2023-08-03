import React, { useEffect } from 'react'

export default function Colors(props) {


    useEffect(() => {
        let c = document.getElementById("d");
        let e = getComputedStyle(c);
        console.log(e.backgroundColor)    
    })
    

  return (
    <div id="d" className={`w-[17rem] h-32`} style={{background:props.color}}>
    
      <p className='px-5 pt-3 mb-1'>100%</p>
      <p className='px-5'>#0f172a</p>
    </div>
  )
}
