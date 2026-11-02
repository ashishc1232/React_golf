import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    // async function getData() {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((r) =>  setData(r))
    //         .catch((Error) => console.log(Error))
    // }
    // async function getData() {
    //     try {
    //         let response = await fetch("https://fakestoreapi.com/products")
    //         let result = await response.json()
    //         setData(result)
    //     } catch (error) {
    //         setError(error)
    //     }
    // }

    async function getData() {
        try {
            let response = await axios.get("https://fakestoreapi.com/products")
            setData(response.data)
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        getData()
    }, [data])
    return (
        <div className="container">
            <h2 className="py-4">Data Fetching using fetch</h2>
            <div className="row gap-3 mt-3">
                {
                    data.map((item, index) => (
                        <div key={item.id} className="card shadow border-3" style={{ width: "18rem" }}>
                            <img style={{ height: "240px" }} src={item.image} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text text-truncate" >{item.description}</p>
                                <a href="#" className="btn btn-primary">{item.rating.rate}</a>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}
export default FetchData;