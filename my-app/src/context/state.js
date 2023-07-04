import { useState } from "react";
import Context from "./Context";

function State(props){
    const s = {
        "name": "Asad",
        age: 18
    }
    const [myState, setState] = useState(s);
    const update = () => {
        setTimeout(() => {
            setState({
            name: "Junaid",
            age: 27})
        }, 1000)
        
    }
    

    return (
        <Context.Provider value={{myState, update}}>
          {props.children}
        </Context.Provider>
    );
}

export default State;