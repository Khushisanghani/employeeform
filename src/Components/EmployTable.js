import { useState } from "react";
import { Button, Container, Form, Pagination, Table } from "react-bootstrap";

function EmployTable({ employees, handleEdit, handleDelete, setEmployees }) {
  const [Search, setSearch] = useState('');
  const [sort, setsort] = useState('asc');
  const sorting = (col) => {
    if (sort === 'asc') {
      const sortdata = [...employees].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setEmployees(sortdata);
      setsort('desc')
    }
   


    if (sort === 'desc') {
      const sortdata = [...employees].sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
      setEmployees(sortdata);
      setsort('asc')
    }
   
  }
  // console.log(Search);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = employees.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(employees.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  }

  return (
    <><h2 className="text-center">Employee List</h2>
      <Container>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Here ...."
            className="w-25 ml-5"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </Container>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <Table variant="dark" className='mt-4'>
          <thead>
            <tr>
              <th>No.</th>
              <th onClick={() => sorting('name')}>Name</th>
              <th onClick={() => sorting('designation')}>Designation</th>
              <th>Address</th>
              <th>Contact</th>
              <th onClick={() => sorting('department')}>Department</th>
              <th onClick={() => sorting('status')}>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.filter((employee) => {
              return Search.toLowerCase() === ''
                ? employee
                : employee.name.toLowerCase().includes(Search) || employee.designation.toLowerCase().includes(Search) || employee.status.toLowerCase().includes(Search);
            }).map((employee, index) => (
              <tr key={employee.index}>
                <td>{indexOfFirstRow + index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.address}</td>
                <td>{employee.contact}</td>
                <td>{employee.department}</td>
                <td>{employee.status}</td>
                <td>
                  <Button onClick={() => handleEdit(indexOfFirstRow + index)} variant="success">Edit</Button>&nbsp;&nbsp;
                  <Button onClick={() => handleDelete(indexOfFirstRow + index)} variant="danger">Delete</Button>
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