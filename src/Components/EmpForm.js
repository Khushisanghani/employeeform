import { useEffect, useState } from "react";
import { Button, Container, Form, Pagination, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
function EmpForm(){
    const [formData,setFormData] = useState({
        name:'',
        designation:'',
        address:'',
        contact:'',
        department:'',
        status:'',
    });
    // const navigate = useNavigate();
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
        // delete
        const handleDelete = (index) => {
            const filteredEmployees = employees.filter((_, i) => i !== index);
            setEmployees(filteredEmployees);
            saveToLocalStorage(filteredEmployees);
          };
        //   edit
        const handleEdit = (index) => {
            setEditIndex(index);
            setFormData(employees[index]);
          };
         
        // const [CurrentPage,setCurrentPage] = useState(1);
        // const recordPerPage = 5;
        // const lastIndex = CurrentPage * recordPerPage;
        // const firstIndex = lastIndex - recordPerPage;
        // const record = employees.slice(firstIndex,lastIndex);
        // const npage = math.cail(employees.length / recordPerPage);
        // const number = [...Array(npage + 1).keys()].slice(1);
          
    return(
    <>
    
     <Container className='mt-2'>
        <h3 className="text-center">Employee Registration Form</h3>
        <Form onSubmit={handleSubmit}>
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
        <Button type="submit">
          {editIndex !== null ? "Update Employee" : "Add Employee"}
        </Button>
        </Form>
        </Container> 
        {/* table */}
        <h2 className="text-center">Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <Table variant="dark" className='mt-4'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.index}>
                <td>{index+1}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.address}</td>
                <td>{employee.contact}</td>
                <td>{employee.department}</td>
                <td>{employee.status}</td>
                <td>
                  <Button onClick={() => handleEdit(index)} variant="success">Edit</Button>&nbsp;&nbsp;
                  <Button onClick={() => handleDelete(index)} variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Pagination>
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      </Pagination>
      
    
      
    </>
    )
}
export default EmpForm;
