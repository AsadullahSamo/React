import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './ImageCard.module.css'

export default function ImageCard(props) {

    const containerRef = useRef(null);
    const [text, setText] = useState("Read More");
    const [display, setDisplay] = useState(true);

    const hide = () => {
        setDisplay(false);
    }

    const showLessFunc = () => {
        if(text === "Read More"){
            setText("Show Less")
        } else {
            setText("Read More")
        }
        changeRemainingText();
    }


    const [containerHeight, setContainerHeight] = useState(0)
    useEffect(() => {          // useEffect to calculate height of container once it mounted
        if(containerRef.current){
            setContainerHeight(containerRef.current.getBoundingClientRect().height);
        }
    }, [text]);

    const [remainingText, setRemainingText] = useState(props.text);
    const remainingTextArray = ["the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
                           "ingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
                           "is region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
                           "Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
                           "ou'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!"];

    const changeRemainingText = () => {
        if(text === "Read More"){
            setRemainingText(`${remainingText.replace("...", "")}${remainingTextArray[props.iteration]}`)
        } else {
            setRemainingText(`${props.text}...`)
        }
        setContainerHeight(containerRef.current.getBoundingClientRect().height);
        console.log(containerRef.current.getBoundingClientRect().height)
    }

  return (

    display &&
        <figure style={{border: '1px solid #dfe1e2' }} className={`bg-white mt-10 ml-8 mb-8 h-[${containerHeight}px] w-[391px] rounded-md inline-block`} ref={containerRef}>
            <Image src={props.src} alt="image-1" width={500} height={1000} className={`${styles.img} rounded-t-md object-cover`}/>    
            <div className='relative -mt-[350px] w-24 h-8 rounded-tr-md tracking-wider bg-[#10b981] text-[system-ui] text-center p-1 text-[white] float-right'> {props.price} </div>
            <figcaption>
                <h2 className='text-center text-[20px] tracking-wide font-medium text-[#0f172a] p-5'> Best Of {props.country} in {props.days} days tour</h2>
                <p className='px-5 mt-4 text-[16px] text-[#64748b]'> {remainingText} </p>
                <button className='text-[14px] text-[#10b981] font-semibold px-5 pb-6' onClick={showLessFunc}> {text} </button>
                <button onClick={hide} style={{border: '1px solid #10b981', margin: '24px auto'}} className='py-1 px-28 text-[14px] text-[#10b981] font-medium rounded-[4px] flex justify-center hover:bg-[#10b981] transition-all duration-500 hover:text-white'> Not Interested </button>
            </figcaption>
        </figure>        
  )
}
