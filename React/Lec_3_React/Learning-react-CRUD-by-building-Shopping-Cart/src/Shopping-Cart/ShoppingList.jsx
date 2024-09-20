import React, { useState } from 'react'

function ShoppingList() {
    const [content, setContent] = useState("");
    // add list through the empty array state
    const [tasks, setTasks] = useState(["Tea"]);

    const inputHandle = (event) => {
        setContent(event.target.value);
    }

    const handleAddItem = () => {
        console.log("Add Item")
    }

    const handleRemove = () => {
        console.log("removed item");
    }
    // return-> jo bhi state me rahega mai vaisa hi ui render karung
    return (
        <div className='container'>
            <div className='input-box'>
                <input type="text" value={content} onChange={inputHandle} />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            
            <div className='shopping-list'>
                <ul className='list'>
                    {tasks.map((item) => {
                        return <li>
                            <span>{item}</span>
                            <button className='remove-button' onClick={handleRemove}>x</button>
                        </li>
                    })}

                </ul>
            </div>
        </div>


    )
}

export default ShoppingList