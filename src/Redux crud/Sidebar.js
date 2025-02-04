import { Badge } from 'react-bootstrap';
import './Sidebar.css';
function Sidebar(){
    return(
        <>
            <div className='d-flex mt-2'>
                <div className='d-flex sidebar flex-column flex-shrink-0 text-white bg-dark'>
                    <a href='/' className='nav-link text-white p-2'>
                            <span className='ml-2 fs-4'>Department</span>
                    </a>
                    <hr className='text-white'/>
                    <ul className='nav nav-pills flex-column mb-auto px-0'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link text-white'>
                            <span className='ml-2'>Hr department <Badge bg="secondary">New</Badge></span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link text-white'>
                            <span className='ml-2'>Sale department <Badge bg="secondary">New</Badge></span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link text-white'>
                            <span className='ml-2'>development department <Badge bg="secondary">New</Badge></span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link text-white'>
                            <span className='ml-2'>Total employee <Badge bg="secondary">New</Badge></span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className='content container'>
                <Home/>
                </div> */}
            </div>
        </>
    )
}
export default Sidebar;