import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function BasicValidation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const {theme,setTheme}=useContext(ThemeContext)
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = {}
        if (!formData.email) validateErrors.email = "Email is required"
        else if (formData.name.length < 3) validateErrors.name = "Length should be more than 3"
        setErrors(validateErrors)

        if (Object.keys(validateErrors).length === 0) {
            console.log('Form submitted successfully')
            console.log(FormData)
            setFormData({ name: "", email: "", password: "" })
        }    

    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" required maxLength={100} name='name' value={formData.name} onChange={handleChange}
                        placeholder='enter your name' />
                    {errors && <p style={{ color: "red" }}>{errors.name}</p>}
                </div> <br />
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange}
                        placeholder='enter your email' />
                    {errors && <p style={{ color: "red" }}>{errors.email}</p>}
                </div> <br />
                <div>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='enter your password' />
                </div><br />
                <button onClick={()=>setTheme(theme=="white"?"black":"white")} style={{backgroundColor:theme,color:theme}} type='submit'>Submit</button>
            </form>
        </div>
    )
}




