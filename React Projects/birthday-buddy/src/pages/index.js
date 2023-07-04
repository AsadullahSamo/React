import { useState } from 'react';
import { Inter } from 'next/font/google'
import ImageDescription from '@/components/ImageDescription'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [showImages, setShowImages] = useState(true);
  const [divHeight, setDivHeight] = useState('40rem');
  function hideImage(){
    setShowImages(false)
    setDivHeight('8rem');
  }
  return (
    <main className='flex justify-center items-center mx-5'> 
      
      <div className={`bg-white h-[${divHeight}] w-[35rem] my-16 px-8 py-4`}> 
        <h2 className='text-[#0f172a] text-[32px] tracking-wide'>5 Birthdays Today</h2>  

        {showImages && (
          <>
          <ImageDescription imgSrc="/img/person-1.jpeg" name="Bertie Yates" age="29 years"/>
          <ImageDescription imgSrc="/img/person-2.jpeg" name="Hester Hogan" age="32 years"/>
          <ImageDescription imgSrc="/img/person-3.jpeg" name="Larry Little" age="36 years"/>
          <ImageDescription imgSrc="/img/person-4.jpeg" name="Sean Walsh" age="34 years"/>
          <ImageDescription imgSrc="/img/person-5.jpeg" name="Lola Gardner" age="29 years"/>
          </>
        )}
        <button className='hover:bg-[#9d2aff] tracking-wider duration-500 mt-6 p-1 w-full rounded-md bg-[#d946ef] text-[13px] font-[Arial] text-center text-[#ffffff]' onClick={hideImage}> Clear All </button>
      </div>

    </main>
  )
}
