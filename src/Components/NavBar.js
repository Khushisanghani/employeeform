import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="Container-fluid">
                <ul className="nav nav-underline justify-content-center ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/form">Form Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/table">Table Page</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}
export default NavBar;