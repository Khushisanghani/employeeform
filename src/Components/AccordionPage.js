import { Accordion, Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccordionPage(){
    const navigate = useNavigate();
    const back = () => {
        navigate("/")
    }
    const employees = JSON.parse(localStorage.getItem("employees"))||[];
    const groupemploy=employees.reduce((accordion,employee)=>{
        // at a time one object /array show 
        if(!accordion[employee.department]){
            accordion[employee.department]=[];
        }
        accordion[employee.department].push(employee);
        return accordion;
    },{});
    return(
        <>
        
        <Container>
        <h1>Employee list in Department wise</h1>
            <Accordion>
                {Object.keys(groupemploy).map((department,index)=>(
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>{department}</Accordion.Header>
                        <Accordion.Body>
                            {groupemploy[department].length === 0 ? (
                                <p>No employee in this department.</p>
                            ):
                            (
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Address</th>
                                            <th>Contact</th>
                                            <th>status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groupemploy[department].map((employee,index)=>(
                                                <tr key={employee.index}>
                                                <td>{index+1}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                                <td>{employee.address}</td>
                                                <td>{employee.contact}</td>
                                                <td>{employee.status}</td>
                                                </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <Button onClick={back} className="mt-2">Back</Button>
        </Container>
        
        </>
    )
}
export default AccordionPage;