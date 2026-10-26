import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    function updateCount() {
        setCount(count + 1)
    }
    // function handleCount() {
    //    if(count>0){
    //      setCount(count - 1)
    //    }
    // }
    return (
        <div className="container">
            {/* <h1>count:{count + 1}</h1> */}
           <div>
             <button onClick={updateCount}>Increment</button>
            {/* {
                count > 0 ? <button onClick={() => setCount(count - 1)}>Decrement</button> :
                    <button>Decrement</button>
            } */}
            <button onClick={()=>setCount(count-1)} disabled={count===0}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h2>{count}</h2>
           </div>
        </div>
    )
}
export default Counter