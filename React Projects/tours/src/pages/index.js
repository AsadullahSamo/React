import ImageCard from '@/components/ImageCard'
import Head from 'next/head'

export default function Home() {
  
  const titles = [
    { country: 'Paris', days: 7 },
    { country: 'Ireland', days: 14 },
    { country: 'Salzburg & Vienna', days: 8 },
    { country: 'Rome', days: 7 },
    { country: 'Poland', days: 10 }
  ]
  const images = ['/img/tour-1.jpeg', '/img/tour-2.jpeg', '/img/tour-3.jpeg', '/img/tour-4.jpeg', '/img/tour-5.jpeg']
  const texts =  ["Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
                     "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...",
                     "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
                     "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
                     "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y..."
                 ] 
  const prices = ['$1,995', '$3,895', '$2,695', '$2,095', '$2,595']
  let imageCard = [];
  for (let i = 0; i < images.length; i++) {
    imageCard.push(<ImageCard key={i} iteration={i} src={images[i]} country={titles[i].country} days={titles[i].days} text={texts[i]} price={prices[i]}/>)
  }

  return (

    <>
      <Head>
        <link rel="icon" href="/img/vite logo.png" />
        <title> Tours </title>
      </Head>

      <div className='min-h-screen bg-[#f8fafc]'>

      <h1 className='text-[39px] tracking-wide text-center pt-16'> Our Tours </h1>
      <div className='border-2 mt-2 border-[#10b981] w-28 m-auto'></div>

      <span className='mt-10 flex flex-wrap justify-center items-start'>

        {
          imageCard
        }

        

      </span>
      </div>
    </>
  )
}
