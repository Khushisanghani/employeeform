import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Table() {
    const location = useLocation()
    const[state,setLocationState] = useState({FormData})
    useEffect(()=>{
        let state = location.state
        setLocationState(state);
    },[location.state])

    const navigate = useNavigate();
    const handleRowClick = () => {
        navigate('/form');
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr onClick={handleRowClick}>
                        <th scope="col">First Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact info.</th>
                        <th scope="col">Department</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit Record</th>
                    </tr>
                </thead>
                <tbody>
                    {state && (
                    <tr onClick={handleRowClick}>
                        <td>{state.firstname}</td>
                        <td>{state.designation}</td>
                        <td>{state.address}</td>
                        <td>{state.contact}</td>
                        <td>{state.department}</td>
                        <td>{state.status}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default Table;