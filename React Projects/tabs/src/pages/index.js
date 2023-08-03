import Tab from "@/components/Tab"
import { useEffect, useState } from "react"
import styles from '../components/Tab.module.css'
import Head from "next/head"
export default function Home() {
  
  useEffect(() => {
    let tablinks = document.getElementsByClassName("tablinks");


    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].addEventListener("click", function() {

        let current = document.getElementsByClassName(`${styles.active}`);

        if(current.length > 0){
          current[0].firstElementChild.classList.add("invisible")
          // console.log(current[0].firstElementChild.innerHTML)
          current[0].className = current[0].className.replace(`${styles.active}`, " ")
        }
        this.className += ` ${styles.active}`;
        this.firstElementChild.classList.remove("invisible")
        // console.log(this.firstElementChild.innerHTML)
      });
    }
  })

  const [i, setI] = useState(0);
  const names = ["TOMMY", "BIGDROP", "CUKER"];
  // const [height, setHeight] = useState(window.offsetHeight);


  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(width)
  })

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/vitejs.png" type="image/x-icon" />
        <title> Tabs </title>
      </Head>

      <main className='bg-[#f8fafc] min-h-screen'>

        <div className="md:inline flex flex-col">
          <div className='h-24 md:h-screen w-[100%] md:w-[26%]'>
            <ul className='md:pt-32 text-[14px] tracking-wider flex py-[72px] md:flex-col flex-row -mt-12 justify-center'>
              <li onClick={() => setI(0)} className={`text-[black] tablinks mt-5 text-center hover:cursor-pointer hover:text-[#14b8a6] transition-all duration-500`}> <span className={`${styles.pipe} text-[#12b8a6] invisible mr-5`}> {width > '980' ? "|" : "" } </span> <span className="duration-500 hover:transition-all hover:border-b border-[#12b8a6]">TOMMY </span> </li>
              <li onClick={() => setI(1)} className={`text-[black] tablinks mt-5 text-center hover:cursor-pointer hover:text-[#14b8a6] transition-all duration-500`}> <span className={`${styles.pipe} text-[#12b8a6] invisible mr-5`}> {width > '980' ? "|" : "" } </span> <span className="duration-500 hover:transition-all hover:border-b border-[#12b8a6]">BIGDROP </span> </li>
              <li onClick={() => setI(2)} className={`text-[black] tablinks mt-5 text-center hover:cursor-pointer hover:text-[#14b8a6] transition-all duration-500`}> <span className={`${styles.pipe} text-[#12b8a6] invisible mr-5`}> {width > '980' ? "|" : "" } </span> <span className="duration-500 hover:transition-all hover:border-b border-[#12b8a6]">CUKER </span> </li>
            </ul>
          </div>

          <div className="mr-0 md:mt-48 md:inline-block bottom-0 left-0 relative md:bottom-[675px] md:left-96 md:mr-44">
            <Tab i={i}/>
          </div>

        </div>
      </main>
    </>
  )
}
