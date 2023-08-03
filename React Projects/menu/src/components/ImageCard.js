import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './ImageCard.module.css';
import Button from './Button';

export default function ImageCard(props) {

    let containerHeight;
    useEffect(() => {
      containerHeight = document.getElementById("container").getBoundingClientRect().height;
    }, []);

  return (
    
    <div id="container" className={`w-[370px] bg-white h-[${containerHeight}px] mb-12`}>
      <Image src={`/img/item-${props.i}.jpeg`} width={350} height={400} className={`rounded-t-[4px] object-cover ${styles.img}`}/>
      <div className='mt-10 flex justify-between items-end mx-5 text-[16px]'>
        <h2 className='font-medium text-[#0f172a] text-[20px] tracking-wide'> {props.item} </h2>
        <Button button={props.price}/>
      </div>
      <p className='leading-7 px-5 py-6 text-[#64748b]'>{props.description}</p>
    </div>

  )
}
