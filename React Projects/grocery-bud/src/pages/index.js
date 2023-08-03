import { useEffect, useState, useMemo, useRef } from "react"
import Items from "@/components/Items";

export default function Home() {


    let [height, setHeight] = useState(0)
    useEffect(() => {
      height = document.getElementById("container").getBoundingClientRect().height;
      setHeight(height)
    }, [])

    const [value, setValue] = useState();
    const handleChange = (e) => {
      setValue(e.target.value);
    }

    const [a, setA] = useState([])
    useEffect(() => {
      const storedItems = localStorage.getItem("item");
      if (storedItems) {
        setA(JSON.parse(storedItems));
      }
      
      // localStorage.clear();
    }, []);

    const addItem = () => {
        localStorage.setItem(`item`, JSON.stringify([...a, value]))
        setA(prevItem => [...prevItem, value])
    };

    const [editable, setEditable] = useState(false);
    const check = (edit) => {
      let myInput = document.getElementById("item");
      myInput.focus();
      setEditable(edit)
      console.log(`Editable: ${editable}`);
    };

    const [myId, setMyId] = useState(0);
    const getId = (id) => {
      setMyId(id)
    }

    const updateItem = () => {
      let myInput = document.getElementById("item");
      // console.log(myInput.value)
      // console.log(myId)
      const newArr = [...a]
      newArr[myId] = myInput.value
      setA(newArr)
      localStorage.setItem("item", JSON.stringify(newArr))
      setEditable(false)
    }


  return (

    <>
      <main className="min-h-screen bg-[#f8fafc] mb-24 pt-32"> 
        
        <div id="container" className={`bg-white w-[475px] h-[${height}px] mx-auto rounded-[4px] border-[1px] border-gray-100`}>
          <h2 className="text-center text-[#0f172a] tracking-wide text-[25px] mt-6"> Grocery Bud </h2>
          <div className="mx-auto flex justify-center mt-4 mb-8">
            <input type="text" value={value} onChange={handleChange} name="item" id="item" className="bg-[#f8fafc] w-80 h-7 rounded-l-[4px] border-[1px] border-gray-200 px-3 py-2 text-[13px]"/> 
            <span onClick={editable ? updateItem : addItem} className="text-[13px] text-white bg-[#06b6d4] py-[4px] px-5 rounded-r-[4px] font-sans font-medium duration-500 transition-all hover:bg-[#228799] hover:cursor-pointer">{editable ? `Update Item` : `Add Item`}</span>
          </div>

          <div id="items" className="mb-12">

            {
              a.map((item, index) => {
                return <Items key={index} item={item} id={index} check={check} getId={getId}/>
              })
            }
  
          </div>

        </div>

      </main>
    </>
  )
}