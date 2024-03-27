import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my webpage</h1>
            <nav>
                <Link to="">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">users</Link>
                <Link to="/post">Post</Link>
            </nav>

        </div>
    );
};

export default Header;