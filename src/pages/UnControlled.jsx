import { useEffect, useRef } from "react";

export default function UnControlled() {
    const inputRef = useRef(); // DOM 
    const defaultFocus = () => inputRef.current.focus()
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // console.log(inputRef.current.value)
    // }
    useEffect(() => {
        defaultFocus()
    }, [])
    return (
        <div className="container">
            <form >
                <input type="text" ref={inputRef} placeholder="enter username" />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
