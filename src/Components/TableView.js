import { FaTrashAlt } from "react-icons/fa";
function Table({SubmitData,deletedata}){
    return SubmitData.map((data,contact) => (
        <tr key={contact}>
            <td>{data.name}</td>
            <td>{data.designation}</td>
            <td>{data.address}</td>
            <td>{data.contact}</td>
            <td>{data.department}</td>
            <td>{data.status}</td>
            <td onClick={() => deletedata(data.contact)}><icon><FaTrashAlt style={{color:'red'}} /></icon></td>
        </tr>
))}
export default Table;