import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ImageDescription.module.css'

export default function ImageDescription(props) {
  
  return (
    
    // props.hideImage &&
    <div>
      <figure>
        
        <ul className='flex'>
         <li><Image src={props.imgSrc} width={80} height={80} className={`${styles.rounded} mt-4 object-cover`}/> </li>
        <li>
          <ul className='flex flex-col mt-9 ml-5'>
            <li><h2 className='text-2xl tracking-wide'> {props.name} </h2></li>
            <li><p className='text-[#64748b]'> {props.age} </p></li>
          </ul>
        </li>

        </ul>
      </figure>
    </div>
  )
}
