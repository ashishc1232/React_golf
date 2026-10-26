import { useState } from "react"

const Events = () => {
    const [input, setInput] = useState("")
    // const [click, setClick] = useState(0)
    /*
    function Notification() {
        // alert("button is clicked " + click)
        console.log("button is clicked " + click)
        setClick(click + 1)
    }*/

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    return (
        <>
            {/* <button onClick={Notification} >Click Here</button> */}
            <input type="text" value={input} placeholder="enter name" onChange={handleChange} />
            <div onMouseEnter={() => alert("mouse entered")} className="circle"></div>
            <div onMouseLeave={() => alert("mouse leaved")} className="circle"></div>
            <h2>{input}</h2>
        </>
    )
}
export default Events