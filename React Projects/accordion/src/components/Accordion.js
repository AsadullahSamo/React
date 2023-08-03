import React, { useEffect, useRef, useState } from 'react'
import styles from './Accordion.module.css'

export default function Accordion(props) {
    
    let containerHeight;
    useEffect(() => {
      containerHeight = document.getElementById("container").getBoundingClientRect().height;
    }, [])
    
    const [visibility, setVisibility] = useState('hidden');
    const [icon, setIcon] = useState("+");

    const showAnswer = () => {
      if(visibility === "hidden"){
        setVisibility('block');
        setIcon("-");
      } else {
        setVisibility('hidden');
        setIcon("+");
      }
    }      // end of showAnswer() method

  return (
    <div id="container" style={{boxShadow: '1px 2px 15px 1px #e2e8f0'}} className={`w-[90%] h-[${containerHeight}px] border-2 border-[#e2e8f0] rounded-[4px] m-auto mb-12`}>
      <h2 className='font-medium capitalize text-[#334155] text-[20px] py-3 px-5 tracking-wider'> {props.question} </h2>
      <p className={`-mt-10 float-right self-center mr-7 ${styles.roundedPlus} text-center text-[18px] text-white hover:cursor-pointer`} onClick={showAnswer} > {icon} </p>
      <p className={`${visibility} leading-8 py-3 px-5 text-[#64749a]`}>{props.answer}</p>
    </div>
  )
}
