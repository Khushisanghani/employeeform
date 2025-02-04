import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Create(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id : users [users.length - 1].id+1 , name , email}));
        navigate('/');
    }
    return(
        <>
            <div className="d-flex justify-content-center align-item-center p-5">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3 className="mb-3">Add New Employee </h3>
                    <form onSubmit={handleSubmit}>
                        
                    <Form.Control 
                    className="mb-2"
                    placeholder="Name"
                    type="text" 
                    name="name" 
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    
                    <Form.Control 
                    className="mb-2"
                    placeholder="Email"
                    type="text" 
                    name="name" 
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <Button className="btn-info" type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Create;