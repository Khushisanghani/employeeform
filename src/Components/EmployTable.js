import { useState } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";

function EmployTable({employees,handleEdit,handleDelete}){
  const [Search,setSearch] = useState('');
  console.log(Search);
     const [currentPage,setCurrentPage] = useState(1);
        const rowsPerPage = 3;
    const indexOfLastRow = currentPage * rowsPerPage;
     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
     const currentRows = employees.slice(indexOfFirstRow,indexOfLastRow);
     const totalPages = Math.ceil(employees.length / rowsPerPage);

     const handlePageChange = (page) => {
      setCurrentPage(page);
     };

     const renderPagination = () => {
      let items = [];
      for (let number = 1; number <= totalPages; number++){
        items.push(
          <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={()=>handlePageChange(number)}>
            {number}
          </Pagination.Item>
        );
      }
      return items;
     }
          
    return(
        <><h2 className="text-center">Employee List</h2>
        <Form>
        <Form.Control
              type="text"
              placeholder="Search"
              className="w-25 ml-5"
              onChange={(e)=>setSearch(e.target.value)}
            />
        </Form>
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
              {currentRows.filter((employee)=>{
                return Search.toLowerCase() === '' 
                ? employee 
                : (employee.name,employee.designation,employee.department,employee.status).toLowerCase().includes(Search);           
                }).map((employee, index) => (
                <tr key={employee.index}>
                  <td>{indexOfFirstRow+index+1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.address}</td>
                  <td>{employee.contact}</td>
                  <td>{employee.department}</td>
                  <td>{employee.status}</td>
                  <td>
                    <Button onClick={() => handleEdit(indexOfFirstRow+index)} variant="success">Edit</Button>&nbsp;&nbsp;
                    <Button onClick={() => handleDelete(indexOfFirstRow+index)} variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          )}
          <Pagination className="justify-content-center">{renderPagination()}</Pagination>
          </>
    )
}
export default EmployTable;