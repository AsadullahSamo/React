import React from 'react'
import { useState } from 'react'
import "../style.css"
export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", comments: "", gameLover: false, employment: "", favColor: ""
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
               return {
                ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
               }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    
    

  return (

    <>
    <link rel="stylesheet" href="./style.css" />
     <form method="POST" id='form' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="First Name: " 
            onChange={handleChange} 
            value={formData.firstName} 
            name="firstName"
        /> <br /> <br />

        <input 
            type="text" 
            placeholder="Last Name: " 
            onChange={handleChange} 
            value={formData.lastName} 
            name="lastName"
        /> <br /> <br />

        <input 
            type="email" 
            placeholder="Email: " 
            onChange={handleChange} 
            value={formData.email} 
            name="email" 
        /> <br /> <br />

        <textarea name="comments" id="comments" cols="30" rows="10" value={formData.comments} onChange={handleChange}></textarea> <br /> <br />
        
        <input type="checkbox" 
            id="gameLover"
            name="gameLover" 
            onChange={handleChange}
            checked={formData.gameLover}
        /> 
        <label htmlFor="gameLover">Do you love Games?</label>
        <br /> <br />


            <fieldset>
                <legend> Current employment status </legend> <br />
            <input type="radio" 
                name="employment" 
                id="unemployed" 
                onChange={handleChange}
                checked={formData.employment === "unemployed"}
                value="unemployed"
            />        
            <label htmlFor="unemployed"> Unemployed </label> <br />

            <input type="radio" 
                name="employment" 
                id="employed" 
                onChange={handleChange}
                checked={formData.employment === "employed"}
                value="employed"
            />        
            <label htmlFor="employed"> Employed </label> <br />

            <input type="radio" 
                name="employment" 
                id="full-time" 
                onChange={handleChange}
                checked={formData.employment === "full-time"}
                value="full-time"
            />        
            <label htmlFor="full-time"> Full Time </label> <br /> <br />
            </fieldset>

            <label htmlFor="favColor"> What is your favorite color? </label> <br /> 
            <select 
                id='favColor'
                name="favColor"
                onChange={handleChange}
                value={formData.favColor}
            >
            
            <option value=""> -- Choose -- </option>
            <option value="Green"> Red </option>
            <option value="Orange"> Orange </option>
            <option value="Yellow"> Yellow </option>
            <option value="Green"> Green </option>
            <option value="Blue"> Blue </option>
            
            </select>

            <button> Submit </button>
     </form> 
    </>

  )
}
