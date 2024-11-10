import {NavLink}  from "react-router-dom";
import "./Navbar.css";

export const Navbar = () =>{
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul className="list">
                        <li>
                            {/* <a href="/">Home</a> */}
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            {/* <a href="/login">Login</a> */}
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            {/* <a href="/register">SignUp</a> */}
                            <NavLink to="/register">SignUp</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}