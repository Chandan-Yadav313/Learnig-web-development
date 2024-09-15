import { useState } from "react";

function Counter(props) {
    const [count, countValue] = useState(props.initializeValue);
    // count on which countValue function update operation perform
    // const count = arr[0];
    // countValue which update count;
    // const countValue = arr[1];

    function increamentHandler() {
        if (count == 10) {
            return;
        }
        countValue(count + 1);

    }
    function decreamentHnadler() {
        if (count == 0) {
            return;
        }
        countValue(count - 1);
    }

    return (<h1>
        <div>
            count: {count}
        </div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHnadler}>Decreament</button>
    </h1>);
}
export default Counter;