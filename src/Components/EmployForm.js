import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import EmployTable from "./EmployTable";
function EmployForm(){
    const [formData,setFormData] = useState({
        name:'',
        designation:'',
        address:'',
        contact:'',
        department:'',
        status:'',
    });
    const [employees, setEmployees] = useState([formData]);
    const [editIndex, setEditIndex] = useState(null);
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
      }, []);
      const saveToLocalStorage = (data) => {
        localStorage.setItem("employees", JSON.stringify(data));
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
          setFormData({ name:'', 
            designation: '', 
            address: '' ,
            contact:'',
            department:'',
            status:'',
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
    return(
        <>
        <Container className='mt-2'>
        <h3 className="text-center">Employee Registration Form</h3>
        
        <Form onSubmit={handleSubmit} className="border shadow p-3 mb-5 bg-white rounded  ">
        
        <Form.Label >Name :</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange}/>
        <Form.Label >Designation :</Form.Label>
        <Form.Control type="text" name="designation" value={formData.designation} onChange={handleChange}/>
        <Form.Label >Address :</Form.Label>
        <Form.Control as="textarea" rows={2} name='address' value={formData.address} onChange={handleChange}/>
        <Form.Label >Contact Info :</Form.Label>
        <Form.Control type="text" name="contact" value={formData.contact} onChange={handleChange}/>
        <Form.Label >Choose Department :</Form.Label>
        <Form.Select name='department' value={formData.department} onChange={handleChange}>
            <option>Department</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Project Management">Project Management</option>
        </Form.Select>
        <Form.Label >Choose Status :</Form.Label>
        <Form.Select name='status' value={formData.status} onChange={handleChange}>
            <option>status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </Form.Select>
        <Button type="submit" className="mt-3">
          {editIndex !== null ? "Update Employee" : "Add Employee"}
        </Button>
        </Form>
        </Container> 
        <EmployTable
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
        </>
    )
}
export default EmployForm;