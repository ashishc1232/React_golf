import Navbar from "../components/Navbar"
import Counter from "./Counter"


export default function Conditional() {
    const isAdmin = false
    return (
        <div>
            {
                isAdmin ? <Counter /> : <Navbar />
            }
        </div>
    )
}
