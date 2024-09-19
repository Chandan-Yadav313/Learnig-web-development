import React from 'react'

function ShoppingList() {
    return (
        <div className='container'>
            <div className='input-box'>
                <input type="text" name="" id="" />
                <button>Add Item</button>
            </div>
            <div className='shopping-list'>
                <ul>
                    <li><span>Task</span><button>Delete</button></li>
                    <li><span>Task</span><button>Delete</button></li>
                    <li><span>Task</span><button>Delete</button></li>
                </ul>
            </div>
        </div>


    )
}

export default ShoppingList