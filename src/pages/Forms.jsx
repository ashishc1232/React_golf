import { useState } from 'react'

export default function Forms() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const [data, setData] = useState([])
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.email)
        console.log(formData.name)
        console.log(formData.password)
        // setData([...data, formData])
        setFormData({ name: "", email: "", password: "" })
        // setEmail("");
        // setName("");
        // setPassword("");
    }
    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" maxLength={100} name='name' value={formData.name} onChange={handleChange}
                        placeholder='enter your name' />
                        
                </div> <br />
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange}
                        placeholder='enter your email' />
                </div> <br />
                <div>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='enter your password' />
                </div><br />
                <button type='submit'>Submit</button>
            </form>

            <h2>{formData.name}</h2>
            <h2>{formData.email}</h2>
            <h2>{formData.password}</h2>

            {/* {
                data.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <h3>{item.password}</h3>
                        <h3>{item.email}</h3>
                    </div>
                ))
            } */}

        </div>
    )
}
