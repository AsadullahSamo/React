import { useState } from "react"
import Text from "./components/Text"
import Head from "next/head";

export default function Home() {

  const [inputVal, setInputVal] = useState(1);
  const [val, setVal] = useState(0);

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const setComponent = () => {
    setVal(inputVal);
  }

  return (
    <>

      <Head>
        <title> Lorem Ipsum </title>
        <link rel="icon" href="/img/vitejs.png" type="image/x-icon" />
      </Head>


      <main className="bg-[#f8fafc] min-h-screen">
        <h1 className="text-[#0f172a] text-[25px] text-center pt-36 tracking-wider"> TIRED OF BORING LOREM IPSUM </h1>
        
        <div className="flex justify-center gap-3 mt-6 mb-12">
          <p className="text-[#0f172a] text-[20px] tracking-wider"> Paragraphs: </p>
          <input onChange={handleChange} value={inputVal} min="1" max="8" type="number" name="num" id="num" className="w-16 bg-[#cbd5e1] h-9 rounded-[4px] pl-3 pr-3 font-medium text-[20px] py-1"/>
          <button onClick={setComponent} className="bg-[#10b981] text-[#fff] text-[13px] rounded-[4px] font-medium px-3 hover:transition-all hover:bg-[#32ac83] hover:duration-800"> Generate </button>
        </div>

        <Text inputVal={val}/>

      </main>
    </>
  )
}
