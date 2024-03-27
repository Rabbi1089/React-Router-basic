import {  NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my webpage</h1>
            <nav>
                
                <NavLink to="">Home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/post">Post</NavLink>
            </nav>

        </div>
    );
};

export default Header;
