import React, {useEffect, useRef, useState} from 'react'

export default function Items(props) {

    const [underlined, setUnderlined] = useState(false);
    
    const underline = () => {
        setUnderlined(underlined => !underlined)
    }

    const [comp, setComp] = useState(true);

    const handleDelete = () => {
      let array = localStorage.getItem(`item`);
        if(array){
          array = JSON.parse(array)
        }
      setComp(false)
        const updatedArray = array.filter((item) => item !== props.item);   
        localStorage.setItem(`item`, JSON.stringify(updatedArray)); // Update localStorage      
    }

    const [edit, setEdit] = useState(false);
    const alterEdit = () => {
      setEdit(true);
      props.check(true); // Pass the updated edit state to the parent component (Home)
      props.getId(props.id)
    };


  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
        {comp &&  <div className="flex mb-4">
          <input onClick={underline} type="checkbox" name="item" id="item" className="hover:cursor-pointer ml-7 mr-3" /> <span className={`w-[80%] ${underlined===true ? 'line-through' : 'no-underline'}`}>{props.item}</span>
          <i onClick={alterEdit} className='fa fa-pen-to-square mt-1 text-[#6be675] hover:text-[#4fc459] duration-500 hover:cursor-pointer'></i>
          <i className='fa fa-trash ml-4 mr-7 mt-1 text-[#e66b6b] hover:text-[#c04848] duration-500 hover:cursor-pointer' onClick={handleDelete}></i>
        </div>
        }
    </>
  )
}
