
import Counter from "./counter"

function CounterParent() {
    return <div
    ><Counter initializeValue={1}></Counter>
        <Counter initializeValue={2}></Counter>
        <Counter initializeValue={3}></Counter>
        <Counter initializeValue={4}></Counter>
    </div>

}
export default CounterParent