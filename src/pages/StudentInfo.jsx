const StudentInfo = ({ name, address, course, age, skills }) => {
    return (
        <>
            <hr />
            {/* <h3>Name:{p.name}</h3>
            <h3>Address:{p.address}</h3>
            <h3>Course:{p.course}</h3>
            <h3>Age:{p.age}</h3>
            <h3>Next year age:{p.age + 1}</h3>
            <h3>Skills:{p.skills}</h3> */}

            <h3>Name:{name}</h3>
            <h3>Address:{address}</h3>
            <h3>Course:{course}</h3>
            <h3>Age:{age}</h3>
            <h3>Next year age:{age + 1}</h3>
            <h3>Skills:{JSON.stringify(skills)}</h3>

        </>
    )
}

export default StudentInfo;