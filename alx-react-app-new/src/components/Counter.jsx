import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p><span style={{fontWeight: 'bold', color: 'red'}}>Current Count:</span> {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button> <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter