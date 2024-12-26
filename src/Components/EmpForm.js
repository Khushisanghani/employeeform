import { Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useEffect, useState } from 'react';
// import TableView from './TableView';


const getdatafromLS = () => {
    const data = localStorage.getItem('Submit');
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
    const[EditData,setEditData] = useState(null);
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(EditData !== null){
            const Update = [...SubmitData];
            Update[EditData]=EmployData;
            setSubmitData(Update);
            setEditData(null);
        }
        else{
            setSubmitData((prevdata) => [...prevdata,EmployData]);
        }
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
    const deletedata = (targetindex) =>{
        setSubmitData(SubmitData.filter((_,index) => index !== targetindex));
    }
    const handleEdit = (index) => {
        const Updatedata = SubmitData[index];
        setSubmitData(Updatedata);
        setEditData(index);
    }
    
    
    useEffect(()=>{
        localStorage.setItem('Submit',JSON.stringify(SubmitData));
    },[SubmitData])

    
    return(
        <>
        <Container className='mt-2'>
        <Form onSubmit={handlesubmit}>
        <Form.Label >Name :</Form.Label>
        <Form.Control type="text" name="name" value={EmployData.name} onChange={handleinputchange} required autoComplete='off'/>
        <Form.Label >Designation :</Form.Label>
        <Form.Control type="text" name="designation" value={EmployData.designation} onChange={handleinputchange} required autoComplete='off'/>
        <Form.Label >Address :</Form.Label>
        <Form.Control as="textarea" rows={2} name='address' value={EmployData.address} onChange={handleinputchange} required autoComplete='off'/>
        <Form.Label >Contact Info :</Form.Label>
        <Form.Control type="text" name="contact" value={EmployData.contact} onChange={handleinputchange} required autoComplete='off'/>
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
        <Button variant="primary" type='submit'>{EditData !== null ? 'Update' : 'Submit'}</Button>
        </Form>
        </Container>

        <Table striped hover className='mt-4' responsive-sm deletedata={deletedata} >
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Contact Info.</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <TableView SubmitData={SubmitData} deletedata={deletedata} handleEdit={handleEdit}/> */}
                {
                    SubmitData.map((data,index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.address}</td>
                        <td>{data.contact}</td>
                        <td>{data.department}</td>
                        <td>{data.status}</td>
                        <td>
                            <Button variant="primary" onClick={()=> handleEdit(index)}>Edit</Button>&nbsp;
                            <Button variant="danger" onClick={() => deletedata(index)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
    );
}
export default EmpForm;