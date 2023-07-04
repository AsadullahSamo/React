import React, { useEffect } from 'react'
import Context from '../context/Context'
import { useContext } from 'react'

export default function UseContext() {
    const a = useContext(Context)
    
    // useEffect(() => {
    //     a.update();
    // }, [])

  return (
    <div>
      <h2>This is from ./context/context.js</h2>
      <div>Hi, My name is {a.myState.name}</div>
      {a.update()}
    </div>
  )
}
