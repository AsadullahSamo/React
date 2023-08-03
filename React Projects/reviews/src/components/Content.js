import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Content.module.css'

export default function Content() {

    let [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
        if(count === 4){
            setCount(0)
        }
    }
    const decreaseCount = () => {
        setCount(count - 1);
        if(count === 0){
            setCount(4)
        }
    }

    const images = ['/img/person-1.jpeg', '/img/person-2.jpeg', '/img/person-3.jpeg', '/img/person-4.jpeg', '/img/person-5.jpeg']
    const names = ['Susan Smith', 'Anna Johnson', 'Peter Jones', 'Bill Anderson', 'Emily Croft']
    const professions = ['WEB DEVELOPER', 'WEB DESIGNER', 'INTERN', 'THE BOSS', 'PROJECT DIRECTOR'];
    const descriptions = ["I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
                         ,"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
                         ,"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
                         ,"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
                         ,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae debitis voluptatum veniam porro laudantium ipsam maiores ex, odio, eos quos in a officiis magnam. Laborum amet vitae aliquam magni architecto."]
  return (
    
    <div>
        {/* relative bottom-36 left-56 */}
        
        <Image alt='person-1' src={images[count]} width={250} height={250} className={`rounded-[50%] ${styles.rounded} object-cover mt-7 mx-auto ${styles.shadow}`}/>
        <div className={`relative bottom-36 left-[37%] ${styles.roundedQuote} bg-[#645cff] text-white flex justify-center items-center`}> <i className='fa fa-quote-right'></i> </div>
        
        <h2 className='text-[25px] text-[#1c2b52] tracking-wider text-center -mt-3'> {names[count]} </h2>
        <p className='text-[14px] text-[#645cff] tracking-wider text-center font-semibold'> {professions[count]} </p>
        <p className='text-[16px] text-[#475569] text-center mx-auto mt-2 w-[87%]'> {descriptions[count]} </p>
            
        <div className='ml-5 mx-auto text-center mt-3'> <span onClick={decreaseCount}><i className={`${styles.arrow} fa fa-angle-left`}></i></span>    <span onClick={increaseCount}><i className={`${styles.arrow} fa fa-angle-right`}></i></span> </div>
        <p className='mx-auto mt-5 w-[6.4rem] bg-[#c1beff] hover:bg-[#433cd6] hover:text-white duration-500 transition-all cursor-pointer px-4 py-1 text-[13px] rounded-[4px] text-[#6782db]' onClick={increaseCount}> Surprise Me </p>

    </div>

  )
}
