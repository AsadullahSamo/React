import Accordion from "@/components/Accordion"
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {

  let containerHeight;
  useEffect(() => {
    containerHeight = document.getElementById("container").getBoundingClientRect().height;
  }, []);

  const questions = ["Do I have to allow the use of cookies?", "How do I change my page password?", 
                    "What is BankID?", "Whose birth number can I use?", "When do I receive a password ordered by letter?"];
  const answers = ["Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
                   "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
                   "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
                   "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
                   "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"];
  
  let renderQuestions = [];
  for(let i=0; i<questions.length; i++){
    renderQuestions.push(<Accordion question={questions[i]} answer={answers[i]}/>)  
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/vitejs.png" type="image/x-icon" />
        <title> Questions </title>
      </Head>

      <main className={`bg-[#cffafe] h-[${containerHeight}px] flex justify-center items-center`}> 
        <div id="container" className={`my-12 bg-white w-[815px] h-[${containerHeight}px]`}>
          <h1 className="text-[#334155] text-[48px] tracking-wider m-auto text-center mt-6 mb-9"> Questions </h1>
          
          {
            renderQuestions
          }

        </div>
      </main>
    </>
  )
}
