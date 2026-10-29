import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as y from 'yup'

export default function AdvanceValidation() {
    const validate = y.object({
        name: y.string().min(3, "minimum 3 characters are required")
            .required("name is required"),
        email: y.string().email('Invalid email format').required("email is mandatory"),
        password: y.string().min(8, "enter password atleast 8 letters")
            .required("password is mandatory")
    })
    return (
        <div>
            <Formik  initialValues={{ name: "", email: "", password: "" }}
                validationSchema={validate}
                onSubmit={(values) => console.log(JSON.stringify(values))}
            >
                <Form  className='container'>
                    <div >
                        <label>Name: </label>
                        <Field className="form-control" name="name" type="text" />
                        <ErrorMessage className='error' name='name' component="div" />
                    </div> <br />
                    <div>
                        <label>Email: </label>
                        <Field className="form-control" name="email" type="email" />
                        <ErrorMessage className='error' name='email' component="div" />
                    </div><br />
                    <div>
                        <label>Password: </label>
                        <Field className="form-control" name="password" type="password" />
                        <ErrorMessage className='error' name='password' component="div" />
                    </div> <br />
                    <button className='btn btn-success' type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
