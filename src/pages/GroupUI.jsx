import { useMemo, useState } from "react"
import products from "../utils/products"

const GroupUI = () => {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0)
    const filteredData = useMemo(() => {
        return products.filter((item) => (
            item.name.toLowerCase().includes(search.toLowerCase())
        ))
    }, [search])
    return (
        <div className="">
            <h2 className="text-center my-2">Products Data</h2>

            <div className="container">
                <div className="p-3" style={{ maxWidth: "300px" }}>
                    <input className="form-control" value={search}
                        onChange={(e) => setSearch(e.target.value)} type="text"
                        placeholder="search product" />
                </div>
                <div className="row gap-3">
                    {
                        filteredData.map((item) => (
                            // <ul key={item.id} style={{ listStyle: "none" }}>
                            //     <li className="fw-bold  text-primary">Name: {item.name}</li>
                            //     <li>Brand: {item.brand}</li>
                            //     <li>Price: {item.price}</li>
                            //     <li>Rating: {item.rating}</li>
                            // </ul>
                            <div key={item.id} className="card" style={{ width: "18rem" }}>
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">r: {item.price}</p>
                                    <a href="#" className="btn btn-primary">{item.rating}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )

}
export default GroupUI