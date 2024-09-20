function Shopping() {
    const [content, setContent] = useState("");
    // state ke through 
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setContent(e.target.value)
    }
    const handleAddItem = () => {
        // input value 
        const newItem = content
        // tasks array me add krna hai
        const newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            newArr.push(tasks[i]);
        }
        newArr.push(newItem)
        setTasks(newArr)
        setContent("");
    }
    const handleDelete = (index) => {
        console.log("Remove Item");
        // inbuilt function -> search 
        const filteredArr = []
        for (let i = 0; i < tasks.length; i++) {
            if (i != index) {
                filteredArr.push(tasks[i]);
            }
        }
        setTasks(filteredArr);

    }

    // return -> jo bhi us time pe state me rahega mai bikul waise hi ui render krunga 
    return (
        <div className='Shopping-list'>
            <InputBox 
            handleInput={handleInput} 
            content={content} 
            handleAddItem={handleAddItem}
            ></InputBox>
            <h2> Shopping Cart</h2>
            <ListItem handleDelete={handleDelete} tasks={tasks}></ListItem>
        </div >
    )
}
export default Shopping;