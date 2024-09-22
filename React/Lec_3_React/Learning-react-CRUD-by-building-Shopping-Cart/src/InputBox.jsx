import React from 'react'

function InputBox(props) {
    const inputHandle = props.inputHandle;
    const content = props.content;
    const handleAddItem = props.handleAddItem;
    return (
        <div className='input-box'>
            <input type="text" value={content} onChange={inputHandle} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default InputBox