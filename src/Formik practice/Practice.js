import {  useFormik } from "formik";
import { Button,  Form  } from "react-bootstrap";
import * as Yup from "yup";
function Practice() {
    const formik = useFormik({initialValues:{ 
        name: '',
        designation: '',
        address: '',
        contact: '',
        department: '',
        status: ''
    },
    validationSchema:Yup.object({
        name:Yup.string()
            .max(10,"**Name must be 10 charecter")
            .required("**This field is required"),
        designation:Yup.string()
            .required("**This field is required"),
        address:Yup.string()
            .email("**Please provide valid email address")
            .required("**This field is required"),
        contact:Yup.string()
            .max(10,"**Name must be 10 charecter")
            .required("**This field is required"),
        department:Yup.string()
            .required("**Please select your department"),
        status:Yup.string()
            .required("**Please select your status"),
    }),
    onsubmit:(values) => {
        console.log(values);
    }
})
    return (
         <>
            <form onSubmit={formik.handleSubmit}>
                        <Form.Control
                            placeholder="Name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
                        <Form.Control
                            placeholder="Designation"
                            type="text"
                            name="designation"
                            autoComplete="off"
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.designation && formik.errors.designation && <p style={{color:'red'}}>{formik.errors.designation}</p>}
                        <Form.Control
                            placeholder="Email Address"
                            type="text"
                            name="address"
                            autoComplete="off"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}    
                        />
                        {formik.touched.address && formik.errors.address && <p style={{color:'red'}}>{formik.errors.address}</p>}
                        {/* <Form.Control
                            placeholder="Contact Info."
                            type="text"
                            name="contact"
                            autoComplete="off"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                         {formik.touched.contact && formik.errors.contact && <p style={{color:'red'}}>{formik.errors.contact}</p>}
                        <Form.Select name='department' 
                            value={formik.values.department} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            >
                            <option>Choose Department</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Database Administrator">Database Administrator</option>
                        </Form.Select>
                        {formik.touched.department && formik.errors.department && <p style={{color:'red'}}>{formik.errors.department}</p>}
                       
                        <Form.Select name='status' 
                        onBlur={formik.handleBlur}
                        value={formik.values.status} 
                        onChange={formik.handleChange}
                        >
                            <option>Choose status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                        {formik.touched.status && formik.errors.status && <p style={{color:'red'}}>{formik.errors.status}</p>}
                        <Button type="submit" className="mt-3" >
                            Submit
                            {editIndex !== null ? "Update Employee" : "Add Employee"}
                        </Button> */}
                    </form>
                
        </>
    )
}
export default Practice;
 // validationSchema = yup
            // validate={(values) => {
            //     const errors = {};
            //     if(!values.name){
            //         errors.name = "**require";
            //     }
            //     if(!values.designation){
            //         errors.designation = "**require";
            //     }
            //     if (!values.contact) {
            //         errors.contact = '**Required';
            //       } 
            //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contact)) {
            //         errors.contact = '**Please enter only digit';
            //       }



            //     if (!values.address) {
            //         errors.address = '**Required';
            //       } 
            //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.address)) {
            //         errors.address = '**Invalid email address';
            //       }
            //     return errors;
                
            // }}