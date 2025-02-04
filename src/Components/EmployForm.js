import { useEffect, useState } from "react";
import { Button, Container, Form  } from "react-bootstrap";
import EmployTable from "./EmployTable";
import {  useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function EmployForm() {
  const navigate = useNavigate();
  const listpage = () => {
    navigate("/list");
  }

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    address: '',
    contact: '',
    department: '',
    status: '',
  });
  const [employees, setEmployees] = useState([formData]);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    
    // data becomes object 
    setEmployees(storedEmployees);
    // alert("hello");
  }, []);
  const saveToLocalStorage = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
    // Convert a JavaScript object into a string 
  };
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
          onSubmit : (values,{resetForm}) => {
            // e.preventDefault();
            if (editIndex !== null) {
              // Update 
              const updatedEmployees = employees.map((employee, index) =>
                index === editIndex ? values : employee
              );
              setEmployees(updatedEmployees);
              saveToLocalStorage(updatedEmployees);
              setEditIndex(null);
            } else {
              // Add 
              const newEmployees = [...employees, { ...values, id: Date.now() }];
              setEmployees(newEmployees);
              saveToLocalStorage(newEmployees);
            }
            resetForm();
          },
    });
  const handleDelete = (index) => {
    const filteredEmployees = employees.filter((_, i) => i !== index);
    setEmployees(filteredEmployees);
    saveToLocalStorage(filteredEmployees);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(employees[index]);
  };
  return (
    <>
      <Container className='mt-2'>
        <h3 className="text-center">Employee Registration Form</h3>
        
        <Form onSubmit={formik.handleSubmit} className="border shadow p-3 mb-5 bg-white rounded  ">
          {/* <FormInput Label='name' name='name' type='text' value={formData.name} onChange={handleChange} required/> */}
          <Form.Control 
                    className="mb-2"
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
                    className="mb-2"
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
                            className="mb-2"
                            type="text"
                            name="address"
                            autoComplete="off"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}    
                        />
                        {formik.touched.address && formik.errors.address && <p style={{color:'red'}}>{formik.errors.address}</p>}
             
          <Form.Control 
                    placeholder="Contact Info."
                    className="mb-2"
                    type="text" 
                    name="contact" 
                    autoComplete="off"
                    value={formik.values.contact} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
            />
             {formik.touched.contact && formik.errors.contact && <p style={{color:'red'}}>{formik.errors.contact}</p>}
             
          <Form.Select name='department' value={formik.values.department} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mb-2">
            <option>Choose Department</option>
            <option value="Hr Department">Hr Department</option>
            <option value="sale Department">sale Department</option>
            <option value="Development Department">Development Department</option>
          </Form.Select>
          {formik.touched.department && formik.errors.department && <p style={{color:'red'}}>{formik.errors.department}</p>}
          
          <Form.Select name='status' value={formik.values.status} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mb-2">
            <option>Choose status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Form.Select>
          {formik.touched.status && formik.errors.status && <p style={{color:'red'}}>{formik.errors.status}</p>}
          <Button type="submit" className="mt-3" >
            {editIndex !== null ? "Update Employee" : "Add Employee"}
          </Button>
        </Form>
        <Button onClick={listpage} variant="info">Department wise Employees</Button>
      </Container>

      <EmployTable
        setEmployees={setEmployees}
        employees={employees}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}
export default EmployForm;