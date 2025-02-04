import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home(){
    const users = useSelector((state) => state.users);
    
    return(
        <>
            <div className="container">
                <Link to='/create' className="btn btn-success my-3">Create + </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            {users.map((user,index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                        <Button className="btn-danger btn-sm ms-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    
                </table>
            </div>
        </>
    )
}
export default Home;