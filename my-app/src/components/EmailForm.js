import React, { useId } from 'react'

export default function EmailForm() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>Name: </label>        
      <input style={{marginTop: "12px"}} id={`${id}-name`} type="text" />
      <label style={{marginLeft: "12px"}} htmlFor={`${id}-email`}>Email: </label>        
      <input id={`${id}-email`} type="email" />

      {/* 
      As id for two email forms will be same in, useIdHook.js, whenever we click on any of Email label's, 
      we are always gonna get focus into first one
      So, in order to solve this, we use useId Hook, which generates unique id
      and once assigned that unique id to element, it generates same id on every render
      */}

    </div>
  )
}
