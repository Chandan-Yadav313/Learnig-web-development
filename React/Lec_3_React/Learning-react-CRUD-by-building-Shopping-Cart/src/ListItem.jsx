import React from 'react'

function ListItem(props) {
    const handleRemove = props.handleRemove;
    const tasks = props.tasks;
    return (
        <div className='shopping-list'>
            <ul className='list'>
                {tasks.map((item, index) => {
                    return <li key={index}>
                        <span>{item}</span>
                        <button className='remove-button' onClick={() => {
                            handleRemove(index)
                        }}>x</button>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default ListItem