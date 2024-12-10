import {createPortal} from "react-dom";

const PopUp = ({copied}) =>{
return createPortal (
    <div id="portal">
        {
            copied && <p style={{top:"8rem", position:"absolute", backgroundColor:"aqua"}}>Text Copied To ClipBoard</p>
        }
    </div>,
    document.querySelector("#popUpContent")
)
}

export default PopUp;