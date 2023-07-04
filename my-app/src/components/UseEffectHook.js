import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [windowWidth ,setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize);           // To clean useEffect and improve performance
        }
    }, [])

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);
    useEffect(() => {
      
      const controller = new AbortController();        // These 2 lines are to clean fetch api request
      const signal = controller.signal;

      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      
      return () => {
        controller.abort();
      }

    }, [resourceType]);

    let handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
  return (
    <>
        <div>
            <h2> Window width: {windowWidth}</h2>
        </div>
        <div className='container my-5'>
            <button onClick={() => setResourceType("posts")}> Posts </button>
            <button onClick={() => setResourceType("users")}> Users </button>
            <button onClick={() => setResourceType("comments")}> Comments </button>
            <button onClick={() => setResourceType("photos")}> Photos </button>
            <button onClick={() => setResourceType("todos")}> Todos </button>
            <button onClick={() => setResourceType("albums")}> Albums </button>
        </div>
        <h1 className='container'>{resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </>
  )
}

