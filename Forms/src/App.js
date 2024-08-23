import { useFormik } from 'formik';
import * as Yup from 'yup';


function App() {

  const formSchema = Yup.object().shape({
    username: Yup.string().required('Username Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    age: Yup.number().required('Age Required'),
    number: Yup.string()
      .matches(/^[789]\d{9}$/, 'Invalid phone number')
      .required('Phone number is required'),
  })


  const formik = useFormik(
    {
      initialValues:
      {
        username: "",
        email: "",
        age: "",
        number: ""
      },
      onSubmit: values => {
        console.log(values);
      },
      validationSchema: formSchema
    })





  return (
    <div className="p-3">
      <h4>Form</h4>
      <form onSubmit={formik.handleSubmit}>

        <label>User Name :</label><input type="text" className="ms-2" name='username' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />
        {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />

        <label>Email :</label><input type="email" className="ms-2" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />

        <label>Age :</label><input type="number" className="ms-2" name='age' value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />
        {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
        <br />

        <label>Number :</label><input type="number" className="ms-2" name='number' value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />
        {formik.touched.number && formik.errors.number ? <div>{formik.errors.number}</div> : null}
        <br />

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
export default App;








