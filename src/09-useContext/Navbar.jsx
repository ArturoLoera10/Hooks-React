import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    useContext
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={"nav-link"}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="login" className={"nav-link"}>
                                Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="about" className={"nav-link"}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
