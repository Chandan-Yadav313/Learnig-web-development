import React, { useState } from 'react'
import InputBox from '../InputBox';
import ListItem from '../ListItem';
function ShoppingList() {
    const [content, setContent] = useState("");
    // add list through the empty array state
    const [tasks, setTasks] = useState([]);

    const inputHandle = (event) => {
        setContent(event.target.value);
    }

    const handleAddItem = () => {
        // ========================in react this idea must not use=======================

        //    input value             
        /*const newItem = content;
        // add item to the array
        tasks.push(newItem);
        // empty input box or content
        setContent("");*/
        // ===================manually copy task=========================================
        //    input value
        const newItem = content;
        // add item to the array
        const newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            newArr.push(tasks[i]);
        }
        newArr.push(newItem);
        setTasks(newArr);
        // empty input box or content
        setContent("");
        // ===========================Spread Operator=================================================
        // input value
        /* const newItem = content;
         // add item to the array or copy item in newArr throught Spread operator
         const newArr = [...tasks];
         newArr.push(newItem);
         setTasks(newArr);
         // empty input box or content
         setContent("");*/
        //============================================================================================
        // input value
        /* const newItem = content;
         setTasks([...tasks, newItem]);  // Copy tasks and add newItem in one step
         // empty input box or content
         setContent("");*/
        //===========================================================================================

    }

    const handleRemove = (index) => {
        // HW-> search inbuilt function to do this operaation instead of uisng this meathod
        const filteredArr = [];
        for (let i = 0; i < tasks.length; i++) {

            if (i != index) {
                filteredArr.push(tasks[i]);
            }
        }
        setTasks(filteredArr);
    }
    // return-> jo bhi state me rahega mai vaisa hi ui render karung
    return (
        <div className='container'>
            <InputBox inputHandle={inputHandle} content={content} handleAddItem={handleAddItem}></InputBox>
            <ListItem handleRemove={handleRemove} tasks={tasks}></ListItem>
        </div>

    )
}

export default ShoppingList