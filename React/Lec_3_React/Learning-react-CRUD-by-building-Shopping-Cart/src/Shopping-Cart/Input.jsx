import { useState } from "react";

function InputBox() {
    const [content, setContent] = useState("");

    const handleInput = () => {
        alert(content);
        setContent("");
    }
    const changeInput = (event) => {
        // console.log(obj.target.value);
        // setContent(obj.target.value);
        const updateValue = event.target.value;
        setContent(updateValue);
       

    }
    return <div>
        {/* Value="" */}
        <input type="text" value={content} onChange={changeInput} />
        <button onClick={handleInput}>Add List</button>
    </div>
}
export default InputBox;