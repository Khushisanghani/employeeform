import { useState } from "react";
import { Link } from "react-router-dom";

function EmpForm(){
    const [value,setvalue] = useState({
        firstname:'',
        designation:'',
        address:'',
        contact:'',
        department:'',
        status:'',
    })
    const handlechanges = (e) => {
        setvalue({...value,[e.target.name]:[e.target.value]})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
    return(
        <>
            <div>
            <h2 className="text-center mt-2">Employee Form</h2>
           <div className="container mt-3 fs-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" >Enter Your Name :</label>
                    <input className="form-control" required name="firstname"
                    onChange={(e) => handlechanges(e)}/>
                </div>
                <div class="mb-3">
                    <label className="form-label" >Designaton :</label>
                    <input className="form-control" required name="dasignation"
                    onChange={(e) => handlechanges(e)}/>
                </div>
                <div class="mb-3">
                    <label className="form-label" >Address :</label>
                    <textarea className="form-control" required name="address"
                    onChange={(e) => handlechanges(e)}></textarea>
                </div>
                <div class="mb-3">
                    <label className="form-label" >Contact info. :</label>
                    <input className="form-control" required name="contact" 
                    onChange={(e) => handlechanges(e)}/>
                </div>
                <div class="mb-3">
                    <label className="form-label" >Department :</label>
                    <input className="form-control" required name="department"
                    onChange={(e) => handlechanges(e)}/>
                </div>
                <div class="mb-3 fs-5">
                    <select className="form-select  form-select-lg mb-3" name="status"
                    onChange={(e) => handlechanges(e)}>
                        <option>Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <div  className="d-grid gap-3 d-md-flex justify-content-md-center">
                {/* <input class="btn btn-primary" type="submit" value="Submit"/> */}
                <button className="btn btn btn-outline-primary text-decoration-none" value="submit"><Link to='/table' state={FormData}>Submit</Link></button>
                <input className="btn btn btn-outline-primary" type="reset" value="Reset"/>
                </div>
                </form>
           </div>
           </div>
        </>
    )
}
export default EmpForm;