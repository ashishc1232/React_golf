import { useEffect, useState } from "react";
const ConditionalDemo = () => {
    const [isShow, setIsShow] = useState(false);
    function handleToggle() {
        if (isShow) {
            setIsShow(false);
        }
        else {
            setIsShow(true);
        }
    }
    // useEffect(() => {
    //     console.log("useEffect called");
    // },[]);

    
    return (
        <div>
            {
                isShow && <div className="circle"></div>
            }
            <button onClick={handleToggle}>
                {isShow ? "hide" : "show"}
            </button>
        </div>
    )
}

export default ConditionalDemo;