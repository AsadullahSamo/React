import React from 'react'
import styles from '../pages/index.module.css'

export default function ColorOpacity(props) {
  
  
  return (
    <>
  
      <div style={{filter: props.brightness}} className={`w-[17rem] h-32 bg-[#f15025]`}>
        <p className='px-5 pt-3 mb-1 text-white'>100%</p>
        <p className='px-5 text-white'>#0f172a</p>
      </div>
    </>
  )
}
