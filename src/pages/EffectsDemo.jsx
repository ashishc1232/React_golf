import React, { useEffect, useState } from 'react'

export default function EffectsDemo() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue")
    useEffect(() => {
        console.log("useEffect called ")
    }, [])
    function toogle() {
        if (color === "red") {
            setColor("blue")
        }
        else {
            setColor("red")
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={toogle} style={{ backgroundColor: color, color: "white" }}>
                Change color</button>
        </div>
    )
}
