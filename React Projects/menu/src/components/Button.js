import React from 'react'

export default function Button(props) {
  return (
      <button onClick={props.func} className={`${props.hover} font-medium rounded-[4px] bg-[#f59e0b] px-4 py-1 text-white text-[${props.fontSize}px]`}> {props.button} </button>
  )
}
