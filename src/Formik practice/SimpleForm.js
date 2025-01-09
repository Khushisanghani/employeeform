import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";

const  initialValues = {
    name:'',
    email:'',
    contact:'',
}
const onSubmit = values => {
    console.log('form data',values)
}
 const  validate = values => {
    let errors = {}
    if(!values.name){
        errors.name = "*Name is Required*";
    }
    else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }
    if(!values.email){
        errors.email = "*Email is Required*";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '*Invalid email address*';
      }
    if(!values.contact){
        errors.contact = "*contact is Required*";
    }
    return errors
}
function SimpleForm(){
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    console.log('visited fields',formik.touched);
    return(
        <>
        <Container>
            <Form onSubmit={formik.handleSubmit}>
            <Form.Control type="text" placeholder="Name" className="mt-3" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
            {formik.errors.name && formik.touched.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
            <br/>
            <Form.Control type="text" placeholder="Email"  id="email" name="email" onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur}/>
            {formik.errors.email && formik.touched.email? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
            <br/>
            <Form.Control type="text" placeholder="Contact"  id="contact" name="contact" onChange={formik.handleChange} value={formik.values.contact}  onBlur={formik.handleBlur}/>
            {formik.errors.contact && formik.touched.contact ? <div style={{color:'red'}}>{formik.errors.contact}</div>: null}
            <br/>
            <Button type="submit">Submit</Button>
            </Form>
        </Container>
        </>
    )
}
export default SimpleForm;