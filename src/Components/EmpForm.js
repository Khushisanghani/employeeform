import { Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useEffect, useState } from 'react';
import TableView from './TableView';


const getdatafromLS = () => {
    const data = localStorage.getItem('SubmitData');
    if(data){
        return JSON.parse(data);
    }
    else{
        return[];
    }
}
function EmpForm(){
    const [EmployData,setEmployData] = useState({
        name:'',
        designation:'',
        address:'',
        contact:'',
        department:'',
        status:'',
    });
    const[SubmitData,setSubmitData] = useState(getdatafromLS());
    const handleinputchange = (e) => {
        
        setEmployData({...EmployData,[e.target.name]:e.target.value});
    }
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        setSubmitData([...SubmitData,EmployData]);
        setEmployData({
            name:'',
            designation:'',
            address:'',
            contact:'',
            department:'',
            status:'',
        });
    };
    const deletedata = (contact) =>{
        setEmployData(SubmitData.filter(data => data.contact !== contact ));
    }
    useEffect(()=>{
        localStorage.setItem('SubmitData',JSON.stringify(SubmitData));
    },[SubmitData])
    return(
        <>
        <Container className='mt-2'>
        <Form onSubmit={handlesubmit}>
        <Form.Label >Name :</Form.Label>
        <Form.Control type="text" name="name" value={EmployData.name} onChange={handleinputchange}/>
        <Form.Label >Designation :</Form.Label>
        <Form.Control type="text" name="designation" value={EmployData.designation} onChange={handleinputchange}/>
        <Form.Label >Address :</Form.Label>
        <Form.Control as="textarea" rows={2} name='address' value={EmployData.address} onChange={handleinputchange}/>
        <Form.Label >Contact Info :</Form.Label>
        <Form.Control type="text" name="contact" value={EmployData.contact} onChange={handleinputchange}/>
        <Form.Label >Choose Department :</Form.Label>
        <Form.Select name='department' value={EmployData.department} onChange={handleinputchange}>
            <option>Department</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Project Management">Project Management</option>
        </Form.Select>
        <Form.Label >Choose Status :</Form.Label>
        <Form.Select name='status' value={EmployData.status} onChange={handleinputchange}>
            <option>status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </Form.Select>
        <Button variant="primary" type='submit'>Submit</Button>
        </Form>
        </Container>

        <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Contact Info.</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <TableView SubmitData={SubmitData} deletedata={deletedata}/>
                {/* {SubmitData.map((data,index) => (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.address}</td>
                        <td>{data.contact}</td>
                        <td>{data.department}</td>
                        <td>{data.status}</td>
                    </tr>
                ))} */}
            </tbody>
        </Table>
    </>
    );
}
export default EmpForm;