export default function Navbar() {
    let username = "Ashish"
    let address = "krvnf"

    function add(a, b) {
        return a + b
    }
    let num=5
    return (
        <>
            <h1> Navbar</h1>
            <h2>{username}</h2>
            <p className="address">{address}</p>
            <p>{add(43, 6)}</p>
            <p>{num+1}</p>
        </>
    )
}