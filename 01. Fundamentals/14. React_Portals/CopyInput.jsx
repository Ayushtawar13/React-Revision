import { useState } from "react";
import PopUp from "./PopUp";
const CopyInput = () => {
    const [inputValue , setInputValue ] = useState("");
    const [copied , SetCopied] = useState(false);
    
    const copyHandler = () => {
        navigator.clipboard.writeText(inputValue).then( () => {
            SetCopied(true);
            setTimeout( () => SetCopied(false) , 3000);
        });
    };

    return (
        <section>
            <h1>Copy Content</h1>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value) }  />
            <button onClick={copyHandler}>Copy</button>
            <PopUp copied={copied}></PopUp>

        </section>
    )
}

export default CopyInput;