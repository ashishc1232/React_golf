
export default function Lists() {
    const data = [
        {
            id: 1, name: "Abhishek", age: 23, course: "MERN"
        },
        {
            id: 2, name: "Suhas", age: 22, course: "MERN"
        },
        {
            id: 3, name: "Ganesh", age: 26, course: "Python"
        },
        {
            id: 4, name: "Ravi", age: 25, course: "DA"
        },
    ]
    return (
        <div>
            {
                data.map((dt, index) => (<ul key={dt.id}>
                    <li>Name: {dt.name}</li>
                    <li>Age: {dt.age}</li>
                    <li>Course: {dt.course}</li>
                </ul>

                )
                )}
            <div>
           
            </div>
        </div>
        
    )
}
