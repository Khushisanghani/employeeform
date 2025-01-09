import { useEffect, useState } from "react";
import { Button, Container, Form  } from "react-bootstrap";
import EmployTable from "./EmployTable";
import { useNavigate } from "react-router-dom";
// const  initialValues = {
//   name: '',
//   designation: '',
//   address: '',
//   contact: '',
//   department: '',
//   status: '',
// }
// const onSubmit = (e) => {
//   e.preventDefault();
//   if (editIndex !== null) {
//     // Update 
//     const updatedEmployees = employees.map((employee, index) =>
//       index === editIndex ? formData : employee
//     );
//     setEmployees(updatedEmployees);
//     saveToLocalStorage(updatedEmployees);
//     setEditIndex(null);
//   } else {
//     // Add 
//     const newEmployees = [...employees, { ...formData, id: Date.now() }];
//     setEmployees(newEmployees);
//     saveToLocalStorage(newEmployees);
//   }
//   setFormData({
//     name: '',
//     designation: '',
//     address: '',
//     contact: '',
//     department: '',
//     status: '',
//   });
// }

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
  }, []);
  const saveToLocalStorage = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
    // Convert a JavaScript object into a string 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update 
      const updatedEmployees = employees.map((employee, index) =>
        index === editIndex ? formData : employee
      );
      setEmployees(updatedEmployees);
      saveToLocalStorage(updatedEmployees);
      setEditIndex(null);
    } else {
      // Add 
      const newEmployees = [...employees, { ...formData, id: Date.now() }];
      setEmployees(newEmployees);
      saveToLocalStorage(newEmployees);
    }
    setFormData({
      name: '',
      designation: '',
      address: '',
      contact: '',
      department: '',
      status: '',
    });
  }
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

        <Form onSubmit={handleSubmit} className="border shadow p-3 mb-5 bg-white rounded  ">
          {/* <FormInput Label='name' name='name' type='text' value={formData.name} onChange={handleChange} required/> */}

          <Form.Label >Name :</Form.Label>
          <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
            />
          <Form.Label >Designation :</Form.Label>
          <Form.Control 
                    type="text" 
                    name="designation" 
                    value={formData.designation} 
                    onChange={handleChange} 
                    required 
            />
          <Form.Label >Address :</Form.Label>
          <Form.Control 
                    as="textarea" 
                    rows={2} 
                    name='address' 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
            />
          <Form.Label >Contact Info :</Form.Label>
          <Form.Control 
                    type="text" 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
            />
          <Form.Label >Choose Department :</Form.Label>
          <Form.Select name='department' value={formData.department} onChange={handleChange}>
            <option>Department</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Project Management">Project Management</option>
            <option value="Database Administrator">Database Administrator</option>
          </Form.Select>
          <Form.Label >Choose Status :</Form.Label>
          <Form.Select name='status' value={formData.status} onChange={handleChange}>
            <option>status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Form.Select>
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