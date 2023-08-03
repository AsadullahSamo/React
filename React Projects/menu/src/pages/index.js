import Button from "@/components/Button"
import ImageCard from "@/components/ImageCard";
import Head from "next/head";
import { useState } from "react";

export default function Home() {

  // let buttons  = ["All", "Breakfast", "Lunch", "Shakes"];
  // let button = [], i = 0;
  // for(let x of buttons){
  //   button.push(<Button key={i++} button={x} fontSize="13" hover="hover:cursor-pointer hover:bg-orange-700 transition-all duration-500"/>)
  // }
  
  let imageCardAll = [], imageCardBreakfast = [], imageCardLunch = [], imageCardShakes = [];  
  const [imageCard, setImageCard] = useState(imageCardAll);

  const items = ["Buttermilk Pancakes", "Diner Double", "Gozilla Milkshake", "Country Delight", "Egg Attack", "Oreo Dream", "Bacon Overflow", "American Classic", "Quarantine Buddy"]
  const prices = ["$15.99", "$13.99", "$6.99", "$20.99", "$22.99", "$18.99", "$8.99", "$12.99", "$16.99"];
  const descriptions = ["I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
                        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
                        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
                        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
                        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
                        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
                        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
                        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
                        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."]


  for(let i=0; i<items.length; i++){
    imageCardAll.push(<ImageCard i={i+1} item={items[i]} price={prices[i]} description={descriptions[i]}/>)
    if(i===0 || i===3 || i===6)
      imageCardBreakfast.push(<ImageCard i={i+1} item={items[i]} price={prices[i]} description={descriptions[i]}/>)
    else if(i===1 || i===4 || i===7)
      imageCardLunch.push(<ImageCard i={i+1} item={items[i]} price={prices[i]} description={descriptions[i]}/>)
    else if(i===2 || i===5 || i===8)
      imageCardShakes.push(<ImageCard i={i+1} item={items[i]} price={prices[i]} description={descriptions[i]}/>)
  }

  const executeAll = () => {
    setImageCard(imageCardAll)
  }

  const executeBreakfast = () => {
    setImageCard(imageCardBreakfast)
  }

  const executeLunch = () => {
    setImageCard(imageCardLunch)
  }

  const executeShakes = () => {
    setImageCard(imageCardShakes)
  }

  return (
    <>
    <Head>
      <title> Menu </title>
      <link rel="shortcut icon" href="/img/vitejs.png" type="image/x-icon" />
    </Head>

      <main className="bg-[#f8fafc] min-h-screen"> 
        <h1 className="text-[#0f172a] text-[39px] m-auto text-center tracking-wide pt-16"> Our Menu </h1>
        <div className="mx-auto w-28 mt-[6px] h-1 bg-[#f59e0b]"></div>
        
        <div id="buttons" className="flex justify-center mt-8 gap-5">
          <Button func={executeAll} button={"All"} fontSize="13" hover="hover:cursor-pointer hover:bg-orange-700 transition-all duration-500"/>
          <Button func={executeBreakfast} button={"Breakfast"} fontSize="13" hover="hover:cursor-pointer hover:bg-orange-700 transition-all duration-500"/>
          <Button func={executeLunch} button={"Lunch"} fontSize="13" hover="hover:cursor-pointer hover:bg-orange-700 transition-all duration-500"/>
          <Button func={executeShakes} button={"Shakes"} fontSize="13" hover="hover:cursor-pointer hover:bg-orange-700 transition-all duration-500"/>
        </div>

        <div id="image-cards" className="mt-12 flex justify-center flex-wrap gap-5 items-start">
          {/* <ImageCard /> */}
          {imageCard}
        </div>

      </main>
    </>
  )
}
